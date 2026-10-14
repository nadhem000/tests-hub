// circuitDrawer.js
// يحتوي على جميع دوال الرسم الخاصة بالدارة الكهربائية وشاشة المشواف
// دوال الرسم تعتمد على متغيرات CSS المعرفة في الصفحة الرئيسية (مثل --Tests-Hub-circuit-wire)

/**
 * رسم شاشة المشواف (oscilloscope)
 * @param {string} containerId - معرف الحاوية div
 * @param {number} yOffset - عدد المربعات للارتفاع (موجب للأعلى، 0 للمنتصف)
 * @param {string} title - عنوان يظهر أعلى الشاشة (اختياري)
 */
function drawOscilloscope(containerId, yOffset = 0, title = '') {
    if (typeof SVG === 'undefined') {
        document.getElementById(containerId).innerHTML = '<div class="Tests-Hub-fallback">⚠️ فشل تحميل مكتبة الرسم.</div>';
        return;
    }
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const canvas = SVG().addTo(`#${containerId}`).size('100%', '100%').viewbox(0, 0, 300, 200).attr({ preserveAspectRatio: 'xMidYMid meet' });
    
    // خلفية سوداء (شاشة)
    canvas.rect(300, 200).fill('var(--Tests-Hub-oscilloscope-bg)').radius(5);
    
    // رسم الشبكة (مربعات 20×20)
    const step = 20;
    canvas.stroke({ color: 'var(--Tests-Hub-oscilloscope-grid)', width: 0.8 });
    for (let i = 0; i <= 300; i += step) {
        canvas.line(i, 0, i, 200).stroke({ width: 0.5 });
    }
    for (let i = 0; i <= 200; i += step) {
        canvas.line(0, i, 300, i).stroke({ width: 0.5 });
    }
    
    // محور الزمن (أفقي) – خط منقط
    canvas.line(0, 100, 300, 100).stroke({ color: 'var(--Tests-Hub-oscilloscope-axis)', width: 1.5, dasharray: '5,3' });
    
    // محور القيم (عمودي) – خط منقط
    canvas.line(150, 0, 150, 200).stroke({ color: 'var(--Tests-Hub-oscilloscope-axis)', width: 1.5, dasharray: '5,3' });
    
    // رسم الخط الضوئي (أفقي) حسب yOffset
    const yPos = 100 - yOffset * 20; // كل مربع 20 بكسل، y=100 هو المنتصف
    canvas.line(40, yPos, 260, yPos).stroke({ color: 'var(--Tests-Hub-oscilloscope-trace)', width: 3 });
    
    // إضافة نقاط نهاية الخط
    canvas.circle(6).fill('var(--Tests-Hub-oscilloscope-trace)').center(40, yPos);
    canvas.circle(6).fill('var(--Tests-Hub-oscilloscope-trace)').center(260, yPos);
    
    // إضافة العنوان إذا وجد
    if (title) {
        canvas.text(title).font({ size: 14, weight: 'bold', family: 'Segoe UI' }).move(10, 10).fill('white');
    }
}

/**
 * رسم الدارة الأصلية (التمرين الثاني)
 * @param {string} containerId - معرف الحاوية div
 * @param {boolean} showArrows - هل نعرض أسهم التيارات (للإصلاح)؟
 */
function drawCircuit(containerId, showArrows = false) {
    if (typeof SVG === 'undefined') {
        document.getElementById(containerId).innerHTML = '<div class="Tests-Hub-fallback">⚠️ فشل تحميل مكتبة الرسم.</div>';
        return;
    }
    
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const canvas = SVG().addTo(`#${containerId}`).size('100%', '100%').viewbox(0, 0, 580, 380).attr({ preserveAspectRatio: 'xMidYMid meet' });
    
    // شبكة وخلفية
    canvas.rect(580, 380).css('fill', 'var(--Tests-Hub-white)').radius(12).stroke({ width: 1 }).css('stroke', 'var(--Tests-Hub-circuit-border-light)');
    for (let i = 40; i < 580; i += 40) {
        canvas.line(i, 0, i, 380).stroke({ width: 0.5 }).css('stroke', 'var(--Tests-Hub-circuit-grid)').back();
    }
    for (let i = 40; i < 380; i += 40) {
        canvas.line(0, i, 580, i).stroke({ width: 0.5 }).css('stroke', 'var(--Tests-Hub-circuit-grid)').back();
    }
    
    // إحداثيات ثابتة
    const leftX = 130, rightX = 460, topY = 70, bottomY = 280, branchX = 235;
    const genX = 295, switchY = 175, resistorX = 295, ammeter1Y = 200, lamp1Y = 120, ammeter2Y = 200, motorY = 120;
    
    // رسم الأسلاك
    canvas.line(leftX, topY, rightX, topY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(rightX, topY, rightX, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(rightX, bottomY, leftX, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(leftX, bottomY, leftX, topY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(branchX, topY, branchX, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    
    // نقاط التوصيل (العقد)
    const junctions = [[leftX, topY], [rightX, topY], [rightX, bottomY], [leftX, bottomY], [295, topY], [rightX, 175], [295, bottomY], [branchX, topY], [branchX, bottomY]];
    junctions.forEach(pos => {
        canvas.circle(6).center(pos[0], pos[1]).css('fill', 'var(--Tests-Hub-circuit-junction-fill)').stroke({ width: 1 }).css('stroke', 'var(--Tests-Hub-circuit-junction-stroke)');
    });
    
    // رسم المكونات
    // المولد
    canvas.circle(32).center(genX, topY).css('fill', 'var(--Tests-Hub-circuit-gen-fill)').stroke({ width: 2.5 }).css('stroke', 'var(--Tests-Hub-circuit-gen-stroke)');
    canvas.path(`M${genX-12},${topY-4} q6,-12 12,0 q6,12 12,0`).fill('none').stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-gen-stroke)');
    // القاطع
    canvas.line(rightX-30, switchY, rightX-15, switchY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-switch-stroke)');
    canvas.circle(7).center(rightX-15, switchY).css('fill', 'var(--Tests-Hub-circuit-switch-knob-fill)').stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-switch-knob-stroke)');
    canvas.line(rightX-15, switchY, rightX, switchY-12).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-switch-stroke)');
    // المقاومة
    canvas.rect(48, 26).center(resistorX, bottomY).css('fill', 'var(--Tests-Hub-circuit-resistor-fill)').stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-resistor-stroke)').radius(6);
    // الأمبيرمترات
    canvas.circle(22).center(leftX, ammeter1Y).css('fill', 'var(--Tests-Hub-circuit-ammeter-fill)').stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-ammeter-stroke)');
    canvas.line(leftX-8, ammeter1Y, leftX+8, ammeter1Y).stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-ammeter-stroke)');
    canvas.circle(22).center(branchX, ammeter2Y).css('fill', 'var(--Tests-Hub-circuit-ammeter-fill)').stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-ammeter-stroke)');
    canvas.line(branchX-8, ammeter2Y, branchX+8, ammeter2Y).stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-ammeter-stroke)');
    // المصباح
    canvas.circle(22).center(leftX, lamp1Y).css('fill', 'var(--Tests-Hub-circuit-lamp-fill)').stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-lamp-stroke)');
    canvas.line(leftX-8, lamp1Y-8, leftX+8, lamp1Y+8).stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-lamp-stroke)');
    canvas.line(leftX-8, lamp1Y+8, leftX+8, lamp1Y-8).stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-lamp-stroke)');
    // المحرك
    canvas.circle(22).center(branchX, motorY).css('fill', 'var(--Tests-Hub-circuit-motor-fill)').stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-motor-stroke)');
    canvas.text('M').font({ size: 16, weight: 'bold', family: 'Segoe UI' }).center(branchX, motorY).css('fill', 'var(--Tests-Hub-circuit-motor-text)');
    
    // التسميات
    canvas.text('G').font({ size: 16, weight: 'bold' }).center(genX, topY-26).css('fill', 'var(--Tests-Hub-circuit-label-gen)');
    canvas.text('+').font({ size: 12, weight: 'bold' }).center(genX-20, topY-6).css('fill', 'var(--Tests-Hub-circuit-label-plus)');
    canvas.text('−').font({ size: 14, weight: 'bold' }).center(genX+20, topY-6).css('fill', 'var(--Tests-Hub-circuit-label-minus)');
    canvas.text('k').font({ size: 15, weight: 'bold' }).center(rightX-22, switchY-22).css('fill', 'var(--Tests-Hub-circuit-label-k)');
    canvas.text('R').font({ size: 15, weight: 'bold' }).center(resistorX, bottomY-20).css('fill', 'var(--Tests-Hub-circuit-label-r)');
    canvas.text('A₁').font({ size: 12, weight: 'bold' }).center(leftX, ammeter1Y-20).css('fill', 'var(--Tests-Hub-circuit-label-a)');
    canvas.text('A₂').font({ size: 12, weight: 'bold' }).center(branchX, ammeter2Y-20).css('fill', 'var(--Tests-Hub-circuit-label-a)');
    canvas.text('L₁').font({ size: 12, weight: 'bold' }).center(leftX, lamp1Y+24).css('fill', 'var(--Tests-Hub-circuit-label-l1)');
    canvas.text('M').font({ size: 12, weight: 'bold' }).center(branchX, motorY+26).css('fill', 'var(--Tests-Hub-circuit-label-m)');
    canvas.text('A').font({ size: 16, weight: 'bold' }).center(branchX, topY-15).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    canvas.text('B').font({ size: 16, weight: 'bold' }).center(branchX, bottomY+15).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    
    // رسم أسهم التيارات إذا طلب (للإصلاح)
    if (showArrows) {
        function drawArrow(fromX, fromY, toX, toY, label, offsetX, offsetY) {
            const group = canvas.group();
            group.line(fromX, fromY, toX, toY).stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-arrow-stroke)')
                .marker('end', 10, 10, (add) => add.polygon('0,0 10,5 0,10').css('fill', 'var(--Tests-Hub-circuit-arrow-fill)'));
            const midX = (fromX + toX) / 2 + offsetX;
            const midY = (fromY + toY) / 2 + offsetY;
            group.text(label).font({ size: 14, weight: 'bold' }).center(midX, midY).css('fill', 'var(--Tests-Hub-circuit-arrow-text)');
            return group;
        }
        drawArrow(genX-20, topY, genX-45, topY, 'I', -10, -15);
        drawArrow(leftX, 90, leftX, 100, 'I₁', 15, 0);
        drawArrow(branchX, 90, branchX, 100, 'I₂', 15, 0);
    }
}

/**
 * رسم الدارة الجديدة (التمرين الثالث) مع إمكانية إضافة الفولطمتر وأسهم التوترات
 * @param {string} containerId - معرف الحاوية div
 * @param {boolean} showVoltmeter - هل نرسم فولطمتر بين C و D؟
 * @param {boolean} showVoltageArrows - هل نرسم أسهم التوترات (U_AB, U_CD, U_QP, U_PN)؟
 */
function drawEx3Circuit(containerId, showVoltmeter = false, showVoltageArrows = false) {
    if (typeof SVG === 'undefined') {
        document.getElementById(containerId).innerHTML = '<div class="Tests-Hub-fallback">⚠️ فشل تحميل مكتبة الرسم.</div>';
        return;
    }
    
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const canvas = SVG().addTo(`#${containerId}`).size('100%', '100%').viewbox(0, 0, 600, 400).attr({ preserveAspectRatio: 'xMidYMid meet' });
    
    // خلفية وشبكة
    canvas.rect(600, 400).css('fill', 'var(--Tests-Hub-white)').radius(12).stroke({ width: 1 }).css('stroke', 'var(--Tests-Hub-circuit-border-light)');
    for (let i = 40; i < 600; i += 40) {
        canvas.line(i, 0, i, 400).stroke({ width: 0.5 }).css('stroke', 'var(--Tests-Hub-circuit-grid)').back();
    }
    for (let i = 40; i < 400; i += 40) {
        canvas.line(0, i, 400, i).stroke({ width: 0.5 }).css('stroke', 'var(--Tests-Hub-circuit-grid)').back();
    }
    
    // إحداثيات رئيسية
    const leftX = 80, rightX = 520;   // حدود المستطيل الأفقي
    const topY = 60, bottomY = 340;   // حدود المستطيل العمودي
    
    // مواقع النقاط على الضلع الأيمن (من الأعلى للأسفل)
				const A_y = topY + 10;      // 80
				const lampY = topY + 30;     // 130
				const B_y = topY + 50;      // 180
				const R1_y = topY + 130;     // 230
				const Q_y = topY + 190;       // 280
				const R2_y = topY + 240;      // 330
    
				
				// موقع البطارية على الضلع السفلي (N و P)
				const N_x = leftX + 180;      // 230
				const P_x = leftX + 320;      // 430
				const neg_x = leftX + 230;    // 210
				const pos_x = leftX + 250;    // 320
				
				// موقع القاطعة على الضلع الأيسر
				const switchY = topY + 120;   // 150
    
    // الخط الأفقي الداخلي: يبدأ بين R1 و Q
    const midY = (R1_y + Q_y) / 2;  // 275
    // نقطة البداية على الضلع الأيمن: (rightX, midY)
    // نقطة النهاية على الضلع الأيسر: (leftX, midY)
    // على هذا الخط نضع من اليسار: C ثم المحرك ثم D.
    const motor_x = leftX + 280;    // 360
    const C_x = leftX + 200;        // 280
    const D_x = leftX + 360;        // 440
    
    // رسم الأسلاك
    // الضلع الأيمن
    canvas.line(rightX, topY, rightX, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    // الضلع السفلي
    canvas.line(rightX, bottomY, leftX, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    // الضلع الأيسر
    canvas.line(leftX, bottomY, leftX, topY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    // الضلع العلوي
    canvas.line(leftX, topY, rightX, topY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    // الخط الأفقي الداخلي
    canvas.line(rightX, midY, leftX, midY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    
    // نقاط التوصيل (العقد)
    const junctions = [
        [rightX, A_y], [rightX, lampY], [rightX, B_y], [rightX, R1_y], [rightX, Q_y], [rightX, R2_y],
        [leftX, topY], [leftX, switchY], [leftX, bottomY],
        [neg_x, bottomY], [pos_x, bottomY], [N_x, bottomY], [P_x, bottomY],
        [rightX, midY], [leftX, midY], [C_x, midY], [motor_x, midY], [D_x, midY]
    ];
    junctions.forEach(pos => {
        canvas.circle(6).center(pos[0], pos[1]).css('fill', 'var(--Tests-Hub-circuit-junction-fill)').stroke({ width: 1 }).css('stroke', 'var(--Tests-Hub-circuit-junction-stroke)');
    });
    
    // رسم المكونات
    // المصباح L1 على الضلع الأيمن
    canvas.circle(22).center(rightX, lampY).css('fill', 'var(--Tests-Hub-circuit-lamp-fill)').stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-lamp-stroke)');
    canvas.line(rightX-8, lampY-8, rightX+8, lampY+8).stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-lamp-stroke)');
    canvas.line(rightX-8, lampY+8, rightX+8, lampY-8).stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-lamp-stroke)');
    
    // المقاومات R1 و R2 على الضلع الأيمن – عمودية
    canvas.rect(16, 30).center(rightX, R1_y).css('fill', 'var(--Tests-Hub-circuit-resistor-fill)').stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-resistor-stroke)').radius(4);
    canvas.rect(16, 30).center(rightX, R2_y).css('fill', 'var(--Tests-Hub-circuit-resistor-fill)').stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-resistor-stroke)').radius(4);
    
    // المحرك M على الخط الأفقي
    canvas.circle(22).center(motor_x, midY).css('fill', 'var(--Tests-Hub-circuit-motor-fill)').stroke({ width: 2.2 }).css('stroke', 'var(--Tests-Hub-circuit-motor-stroke)');
    canvas.text('M').font({ size: 16, weight: 'bold', family: 'Segoe UI' }).center(motor_x, midY).css('fill', 'var(--Tests-Hub-circuit-motor-text)');
    
    // البطارية بين N و P على الضلع السفلي
    canvas.line(N_x, bottomY, neg_x, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(neg_x, bottomY-10, neg_x, bottomY+10).stroke({ width: 4 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(neg_x, bottomY, pos_x, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(pos_x, bottomY-15, pos_x, bottomY+15).stroke({ width: 4 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.line(pos_x, bottomY, P_x, bottomY).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    
    // القاطعة على الضلع الأيسر
    canvas.line(leftX, topY, leftX, switchY-8).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-wire)');
    canvas.circle(6).center(leftX, switchY).css('fill', 'var(--Tests-Hub-circuit-switch-knob-fill)').stroke({ width: 2 }).css('stroke', 'var(--Tests-Hub-circuit-switch-knob-stroke)');
    canvas.line(leftX, switchY, leftX-15, switchY+15).stroke({ width: 2.8 }).css('stroke', 'var(--Tests-Hub-circuit-switch-stroke)');
    
    // التسميات الأساسية
    canvas.text('A').font({ size: 16, weight: 'bold' }).center(rightX+20, A_y).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    canvas.text('B').font({ size: 16, weight: 'bold' }).center(rightX+20, B_y).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    canvas.text('Q').font({ size: 16, weight: 'bold' }).center(rightX+20, Q_y).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    canvas.text('N').font({ size: 16, weight: 'bold' }).center(N_x, bottomY+20).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    canvas.text('P').font({ size: 16, weight: 'bold' }).center(P_x, bottomY+20).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    canvas.text('C').font({ size: 16, weight: 'bold' }).center(C_x, midY-15).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    canvas.text('D').font({ size: 16, weight: 'bold' }).center(D_x, midY-15).css('fill', 'var(--Tests-Hub-circuit-label-node)');
    
    canvas.text('L₁').font({ size: 12, weight: 'bold' }).center(rightX+25, lampY-20).css('fill', 'var(--Tests-Hub-circuit-label-l1)');
    canvas.text('R₁').font({ size: 12, weight: 'bold' }).center(rightX+25, R1_y-20).css('fill', 'var(--Tests-Hub-circuit-label-r)');
    canvas.text('R₂').font({ size: 12, weight: 'bold' }).center(rightX+25, R2_y-20).css('fill', 'var(--Tests-Hub-circuit-label-r)');
    canvas.text('k').font({ size: 15, weight: 'bold' }).center(leftX-25, switchY-10).css('fill', 'var(--Tests-Hub-circuit-label-k)');
    canvas.text('+').font({ size: 14, weight: 'bold' }).center(pos_x, bottomY-25).css('fill', 'var(--Tests-Hub-circuit-label-plus)');
    canvas.text('−').font({ size: 14, weight: 'bold' }).center(neg_x, bottomY-25).css('fill', 'var(--Tests-Hub-circuit-label-minus)');
    canvas.text('G').font({ size: 16, weight: 'bold' }).center((neg_x+pos_x)/2, bottomY-40).css('fill', 'var(--Tests-Hub-circuit-label-gen)');
    
    // إضافة الفولطمتر إذا طُلب (showVoltmeter = true)
    if (showVoltmeter) {
        const voltX = (C_x + D_x) / 2;  // 360
        const voltY = midY - 60;        // 215
        const radius = 12;
        
        // خط من C إلى الفولطمتر
        canvas.line(C_x, midY, C_x, voltY).stroke({ width: 2.2, color: 'var(--Tests-Hub-circuit-wire)' });
        canvas.line(C_x, voltY, voltX - radius, voltY).stroke({ width: 2.2, color: 'var(--Tests-Hub-circuit-wire)' });
        
        // خط من D إلى الفولطمتر
        canvas.line(D_x, midY, D_x, voltY).stroke({ width: 2.2, color: 'var(--Tests-Hub-circuit-wire)' });
        canvas.line(D_x, voltY, voltX + radius, voltY).stroke({ width: 2.2, color: 'var(--Tests-Hub-circuit-wire)' });
        
        // دائرة الفولطمتر
        canvas.circle(radius * 2).center(voltX, voltY).css('fill', 'var(--Tests-Hub-circuit-ammeter-fill)').stroke({ width: 2, color: 'var(--Tests-Hub-circuit-ammeter-stroke)' });
        canvas.text('V').font({ size: 18, weight: 'bold', family: 'Segoe UI' }).center(voltX, voltY).css('fill', 'var(--Tests-Hub-circuit-label-a)');
        
        // علامات القطبية
        canvas.text('−').font({ size: 14, weight: 'bold' }).center(C_x - 15, midY - 10).css('fill', 'var(--Tests-Hub-circuit-label-plus)');
        canvas.text('+').font({ size: 14, weight: 'bold' }).center(D_x + 15, midY - 10).css('fill', 'var(--Tests-Hub-circuit-label-minus)');
    }
    
    // إضافة أسهم التوترات إذا طُلب
    if (showVoltageArrows) {
        // تعريف marker موحد للسهم
        const marker = canvas.marker(8, 8, function(add) {
            add.path('M0,0 L4,4 L0,8')
                .stroke({ width: 2, color: 'var(--Tests-Hub-circuit-arrow-stroke)' })
                .fill('none');
        }).ref(4, 4).attr({ orient: 'auto', markerUnits: 'strokeWidth' });

        // ---- رسم سهم U_CD (أفقي بين C و D) ----
        const lineY = midY;
        const arrowY = lineY + 20; // ارتفاع السهم عن الخط الأفقي
        canvas.line(C_x, arrowY, D_x, arrowY)
            .stroke({ width: 2, color: 'var(--Tests-Hub-circuit-arrow-stroke)', dasharray: '5,3' })
            .marker('end', marker);

        const labelGroupCD = canvas.group();
        labelGroupCD.text('U').font({ size: 18, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(0,0);
        labelGroupCD.text('CD').font({ size: 12, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(14,6);
        labelGroupCD.center((C_x + D_x) / 2, arrowY + 15);

        // ---- رسم سهم U_AB (عمودي بين A و B موازي للضلع الأيمن) ----
        const A_point = [rightX + 25, A_y];
        const B_point = [rightX + 25, B_y];
        canvas.line(A_point[0], A_point[1], B_point[0], B_point[1])
            .stroke({ width: 2, color: 'var(--Tests-Hub-circuit-arrow-stroke)', dasharray: '5,3' })
            .marker('end', marker);

        const midY_AB = (A_y + B_y) / 2;
        const labelGroupAB = canvas.group();
        labelGroupAB.text('U').font({ size: 18, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(0,0);
        labelGroupAB.text('AB').font({ size: 12, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(14,6);
        labelGroupAB.center(rightX + 35, midY_AB);

        // ---- رسم سهم U_QP (عمودي بين Q و P، موازي للضلع الأيمن) ----
        const PQ_x = rightX + 25;   // نفس الإزاحة الأفقية
        const PQ_y_start = Q_y;
        const PQ_y_end = bottomY - 20; // يتوقف قبل الزاوية السفلية (حيث P)
        canvas.line(PQ_x, PQ_y_start, PQ_x, PQ_y_end)
            .stroke({ width: 2, color: 'var(--Tests-Hub-circuit-arrow-stroke)', dasharray: '5,3' })
            .marker('end', marker);

        const midY_PQ = (PQ_y_start + PQ_y_end) / 2;
        const labelGroupPQ = canvas.group();
        labelGroupPQ.text('U').font({ size: 18, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(0,0);
        labelGroupPQ.text('QP').font({ size: 12, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(14,6);
        labelGroupPQ.center(PQ_x + 15, midY_PQ);

        // ---- رسم سهم U_PN (أفقي أسفل البطارية بين N و P) ----
        canvas.line(N_x, bottomY + 15, P_x, bottomY + 15)
            .stroke({ width: 2, color: 'var(--Tests-Hub-circuit-arrow-stroke)', dasharray: '5,3' })
            .marker('end', marker);

        const labelGroupUPN = canvas.group();
        labelGroupUPN.text('U').font({ size: 18, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(0,0);
        labelGroupUPN.text('PN').font({ size: 12, weight: 'bold' }).fill('var(--Tests-Hub-circuit-arrow-text)').move(14,6);
        labelGroupUPN.center((N_x + P_x) / 2, bottomY + 30);
    }
}