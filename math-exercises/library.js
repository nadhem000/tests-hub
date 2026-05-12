// 📦 مكتبة التمارين التفاعلية – قابلة لإعادة الاستخدام

const exercises = [
	// ── التمارين الأصلية (بترجماتها) ────────────────────────────
	{
		id: 'ex-001',
		section: 'الزوايا',
		sectionIcon: '📐',
		name: 'تسمية الزاوية',
		description: 'تمرين تفاعلي لتعلّم تسمية الزوايا باستخدام الرأس والضلعين. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#e06c2e',
		cardColorDark: '#f08a50',
		link: 'تمرين الزاوية.html',
		version: '1.1',
		tags: ['زوايا', 'تسمية', 'هندسة', 'رأس الزاوية'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-01-15',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['زاوية', 'ضلع', 'رأس', 'تسمية الزاوية', 'BAC'],
		thumbnail: '📐',
		translations: {
			fr: {
				name: 'Nommer un angle',
				description: 'Exercice interactif pour apprendre à nommer les angles en utilisant le sommet et les côtés. 10 essais avec points.'
			},
			en: {
				name: 'Naming an Angle',
				description: 'Interactive exercise to learn naming angles using the vertex and sides. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-002',
		section: 'تقايس المثلثات',
		sectionIcon: '🔺',
		name: 'تقايس المثلثات – الحالة الثانية (ASA)',
		description: 'تمرين حول تقايس مثلثين حسب حالة زاوية-ضلع-زاوية. 10 فراغات للإكمال مع رسم تفاعلي.',
		difficulty: 'medium',
		class: 'الثامنة أساسي',
		cardColor: '#2a7db5',
		cardColorDark: '#5ba0d0',
		link: 'تقايس المثلثات – الحالة الثانية.html',
		version: '1.1',
		tags: ['تقايس', 'مثلثات', 'ASA', 'زاوية-ضلع-زاوية', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-02-20',
		estimatedTime: '8-12 دقيقة',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['تقايس', 'مثلث', 'ASA', 'زاوية', 'ضلع', 'حالة ثانية'],
		thumbnail: '🔺',
		translations: {
			fr: {
				name: 'Triangles isométriques – Cas ASA',
				description: 'Exercice sur l\'isométrie de deux triangles selon le cas Angle-Côté-Angle. 10 champs à compléter avec dessin interactif.'
			},
			en: {
				name: 'Congruent Triangles – ASA Case',
				description: 'Exercise on triangle congruence using Angle-Side-Angle. 10 blanks to fill with interactive drawing.'
			}
		}
	},
	{
		id: 'ex-003',
		section: 'التوازي',
		sectionIcon: '📏',
		name: 'تمرين التوازي – أبعاد مضبوطة',
		description: 'تمرين لتحديد المستقيم الموازي والقاطع من رسم توضيحي. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#1f8a4c',
		cardColorDark: '#4ade80',
		link: 'تمرين التوازي.html',
		version: '1.1',
		tags: ['توازي', 'مستقيمات', 'قاطع', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-03-10',
		estimatedTime: '4-7 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['توازي', 'مستقيم', 'قاطع', 'موازي'],
		thumbnail: '📏',
		translations: {
			fr: {
				name: 'Parallélisme – Dimensions précises',
				description: 'Exercice pour identifier la droite parallèle et la sécante à partir d\'un schéma. 10 essais avec points.'
			},
			en: {
				name: 'Parallelism – Precise Dimensions',
				description: 'Exercise to identify the parallel line and transversal from a diagram. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-004',
		section: 'الزوايا',
		sectionIcon: '📐',
		name: 'الزوايا الداخلية من نفس الجهة',
		description: 'تمرين تفاعلي حول الزوايا الداخلية من نفس الجهة. يدعم العربية والفرنسية والإنجليزية، مع صوت ووضع ليلي. 10 محاولات مع نقاط.',
		difficulty: 'medium',
		class: 'السابعة أساسي',
		cardColor: '#2c6e9e',
		cardColorDark: '#5ba0d0',
		link: 'الزوايا الداخلية من نفس الجهة.html',
		version: '1.1',
		tags: ['زوايا', 'داخلية', 'نفس الجهة', 'متوازيان', 'قاطع', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-25',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['زوايا داخلية', 'متكاملتان', 'قاطع', 'موازي', 'نفس الجهة'],
		thumbnail: '📐',
		translations: {
			fr: {
				name: 'Angles intérieurs du même côté',
				description: 'Exercice interactif sur les angles intérieurs du même côté. Supporte arabe, français, anglais, avec audio et mode sombre. 10 essais avec points.'
			},
			en: {
				name: 'Consecutive Interior Angles',
				description: 'Interactive exercise on consecutive interior angles. Supports Arabic, French, English, with audio and dark mode. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-005',
		section: 'الزوايا',
		sectionIcon: '📐',
		name: 'الزوايا المتبادلة داخلياً',
		description: 'تمرين تفاعلي حول الزوايا المتبادلة داخلياً. يدعم العربية والفرنسية والإنجليزية، مع صوت ووضع ليلي. 10 محاولات مع نقاط.',
		difficulty: 'medium',
		class: 'السابعة أساسي',
		cardColor: '#b34130',
		cardColorDark: '#e07060',
		link: 'الزوايا المتبادلة داخلياً.html',
		version: '1.1',
		tags: ['زوايا', 'متبادلة', 'داخلياً', 'متوازيان', 'قاطع', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-25',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['زوايا متبادلة', 'تقايس', 'قاطع', 'موازي'],
		thumbnail: '📐',
		translations: {
			fr: {
				name: 'Angles alternes-internes',
				description: 'Exercice interactif sur les angles alternes-internes. Supporte arabe, français, anglais, avec audio et mode sombre. 10 essais avec points.'
			},
			en: {
				name: 'Alternate Interior Angles',
				description: 'Interactive exercise on alternate interior angles. Supports Arabic, French, English, with audio and dark mode. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-006',
		section: 'الزوايا',
		sectionIcon: '📐',
		name: 'الزوايا المتقابلة بالرأس',
		description: 'تمرين تفاعلي حول الزوايا المتقابلة بالرأس عند تقاطع مستقيمين متوازيين مع قاطع. يدعم العربية والفرنسية والإنجليزية، مع صوت ووضع ليلي. 10 محاولات مع نقاط.',
		difficulty: 'medium',
		class: 'السابعة أساسي',
		cardColor: '#8a3b7c',
		cardColorDark: '#c060b0',
		link: 'الزوايا المتقابلة بالرأس.html',
		version: '1.1',
		tags: ['زوايا', 'متقابلة بالرأس', 'هندسة', 'قاطع', 'متوازيان'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-25',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['متقابلة بالرأس', 'تقايس', 'قاطع', 'موازي'],
		thumbnail: '📐',
		translations: {
			fr: {
				name: 'Angles opposés par le sommet',
				description: 'Exercice interactif sur les angles opposés par le sommet lorsque deux droites parallèles sont coupées par une sécante. 10 essais avec points.'
			},
			en: {
				name: 'Vertical Angles',
				description: 'Interactive exercise on vertical angles formed by a transversal intersecting two parallel lines. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-007',
		section: 'تقايس المثلثات',
		sectionIcon: '🔺',
		name: 'تقايس المثلثات – الحالة الأولى (AAA)',
		description: 'تمرين تفاعلي حول تقايس المثلثات حسب الحالة الأولى (زاوية-زاوية-زاوية) مع رسم مثلثين متقايسين وأقواس ملوّنة. يدعم العربية والفرنسية والإنجليزية، مع صوت ووضع ليلي. 10 محاولات مع نقاط.',
		difficulty: 'hard',
		class: 'الثامنة أساسي',
		cardColor: '#d9443a',
		cardColorDark: '#f07060',
		link: 'تقايس المثلثات – الحالة الأولى.html',
		version: '1.1',
		tags: ['تقايس', 'مثلثات', 'AAA', 'زاوية-زاوية-زاوية', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-25',
		estimatedTime: '10-15 دقيقة',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['تقايس', 'مثلث', 'AAA', 'زاوية', 'حالة أولى'],
		thumbnail: '🔺',
		translations: {
			fr: {
				name: 'Triangles isométriques – Cas AAA',
				description: 'Exercice interactif sur les triangles isométriques selon le cas Angle-Angle-Angle avec dessin de deux triangles et arcs colorés. 10 essais avec points.'
			},
			en: {
				name: 'Congruent Triangles – AAA Case',
				description: 'Interactive exercise on triangle congruence using Angle-Angle-Angle with drawing of two congruent triangles and colored arcs. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-008',
		section: 'تقايس المثلثات',
		sectionIcon: '🔺',
		name: 'تقايس المثلثات – الحالة الثالثة (SAS)',
		description: 'تمرين تفاعلي حول تقايس المثلثات حسب الحالة الثالثة (ضلع-زاوية-ضلع). 10 محاولات مع رسم مثلثين.',
		difficulty: 'hard',
		class: 'الثامنة أساسي',
		cardColor: '#2e7d32',
		cardColorDark: '#4caf50',
		link: 'تقايس المثلثات – الحالة الثالثة.html',
		version: '1.1',
		tags: ['تقايس', 'مثلثات', 'SAS', 'ضلع-زاوية-ضلع', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-25',
		estimatedTime: '10-15 دقيقة',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['تقايس', 'مثلث', 'SAS', 'ضلع', 'زاوية', 'حالة ثالثة'],
		thumbnail: '🔺',
		translations: {
			fr: {
				name: 'Triangles isométriques – Cas SAS',
				description: 'Exercice interactif sur les triangles isométriques selon le cas Côté-Angle-Côté. 10 essais avec dessin de deux triangles.'
			},
			en: {
				name: 'Congruent Triangles – SAS Case',
				description: 'Interactive exercise on triangle congruence using Side-Angle-Side. 10 attempts with drawing of two triangles.'
			}
		}
	},
	{
		id: 'ex-009',
		section: 'تقايس المثلثات',
		sectionIcon: '📐🔺',
		name: 'تقايس المثلثات القائمة – الحالة الأولى (HA)',
		description: 'تمرين تفاعلي حول تقايس المثلثات القائمة حسب الحالة الأولى (الوتر وزاوية حادة). 10 محاولات مع نقاط، يدعم العربية والفرنسية والإنجليزية.',
		difficulty: 'medium',
		class: 'الثامنة أساسي',
		cardColor: '#9c27b0',
		cardColorDark: '#ce93d8',
		link: 'تقايس المثلثات القائمة - الحالة الأولى.html',
		version: '1.0',
		tags: ['تقايس', 'مثلثات قائمة', 'الوتر', 'زاوية حادة', 'HA', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-26',
		estimatedTime: '6-10 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['تقايس', 'مثلث قائم', 'حالة أولى', 'الوتر', 'زاوية حادة', 'HA'],
		thumbnail: '📐',
		translations: {
			fr: {
				name: 'Triangles rectangles isométriques – Cas HA',
				description: 'Exercice interactif sur les triangles rectangles isométriques selon le cas Hypoténuse-Angle aigu. 10 essais avec points.'
			},
			en: {
				name: 'Congruent Right Triangles – HA Case',
				description: 'Interactive exercise on right triangle congruence using Hypotenuse-Acute Angle. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-010',
		section: 'تقايس المثلثات',
		sectionIcon: '🔺',
		name: 'تقايس المثلثات القائمة – الحالة الثانية',
		description: 'تمرين تفاعلي حول تقايس المثلثات القائمة حسب الحالة الثانية (الوتر وضلع قائم – HL). 10 محاولات مع رسم مثلثين.',
		difficulty: 'hard',
		class: 'الثامنة أساسي',
		cardColor: '#b34130',
		cardColorDark: '#f87171',
		link: 'تقايس المثلثات القائمة - الحالة الثانية.html',
		version: '1.0',
		tags: ['تقايس', 'مثلثات قائمة', 'HL', 'الوتر', 'ضلع قائم', 'هندسة'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-26',
		estimatedTime: '10-15 دقيقة',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['تقايس', 'مثلث قائم', 'HL', 'الوتر', 'ضلع قائم', 'حالة ثانية'],
		thumbnail: '🔺',
		translations: {
			fr: {
				name: 'Triangles rectangles isométriques – Cas HL',
				description: 'Exercice interactif sur les triangles rectangles isométriques selon le cas Hypoténuse-Côté. 10 essais avec dessin de deux triangles.'
			},
			en: {
				name: 'Congruent Right Triangles – HL Case',
				description: 'Interactive exercise on right triangle congruence using Hypotenuse-Leg. 10 attempts with drawing of two triangles.'
			}
		}
	},
	{
		id: 'ex-011',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'المدى',
		description: 'تمرين تفاعلي حول إيجاد المدى (أكبر قيمة – أصغر قيمة) من مجموعة أعداد. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#8b5cf6',
		cardColorDark: '#a78bfa',
		link: 'الاحصاء - المدى.html',
		version: '1.0',
		tags: ['إحصاء', 'مدى', 'قيم', 'أعداد'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-26',
		estimatedTime: '4-6 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مدى', 'قيمة كبرى', 'قيمة صغرى', 'إحصاء', 'أعداد'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'L\'étendue',
				description: 'Exercice interactif pour trouver l\'étendue (plus grande valeur - plus petite valeur) d\'une série de nombres. 10 essais avec points.'
			},
			en: {
				name: 'Range',
				description: 'Interactive exercise to find the range (largest value - smallest value) of a set of numbers. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-012',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'المعدل الحسابي (الوسط الموزون)',
		description: 'تمرين تفاعلي لحساب المعدل الحسابي من جدول قيم وتكرارات باستخدام الصيغة (مجموع xᵢ×fᵢ) ÷ (مجموع fᵢ). 10 محاولات مع نقاط.',
		difficulty: 'medium',
		class: 'السابعة أساسي',
		cardColor: '#059669',
		cardColorDark: '#34d399',
		link: 'الاحصاء - المعدل الحسابي.html',
		version: '2.0',
		tags: ['إحصاء', 'معدل', 'وسط موزون', 'تكرارات', 'جدول', 'xᵢ×fᵢ'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-26',
		updatedDate: '2026-04-27',
		estimatedTime: '6-10 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['معدل حسابي', 'وسط موزون', 'جدول تكرارات', 'تكرار', 'إحصاء'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'Moyenne pondérée',
				description: 'Exercice interactif pour calculer la moyenne pondérée à partir d\'un tableau de valeurs et effectifs. Formule : (Σ xᵢ×fᵢ) ÷ (Σ fᵢ). 10 essais avec points.'
			},
			en: {
				name: 'Weighted Mean',
				description: 'Interactive exercise to calculate the weighted mean from a frequency table. Formula: (Σ xᵢ×fᵢ) ÷ (Σ fᵢ). 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-013',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'المنوال',
		description: 'تمرين تفاعلي لتحديد المنوال (القيمة الأكثر تكراراً) من مجموعة بيانات مع جدول قيم ومدخلات. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#f59e0b',
		cardColorDark: '#fbbf24',
		link: 'الاحصاء - المنوال.html',
		version: '1.0',
		tags: ['إحصاء', 'منوال', 'تكرار', 'قيم', 'أعداد'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2025-04-27',
		estimatedTime: '4-6 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['منوال', 'قيمة متكررة', 'تكرار', 'إحصاء', 'أعداد'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'Le mode',
				description: 'Exercice interactif pour déterminer le mode (valeur la plus fréquente) d\'une série statistique. 10 essais avec points.'
			},
			en: {
				name: 'Mode',
				description: 'Interactive exercise to find the mode (most frequent value) of a data set. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-014',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'شامل: مدى – وسط – منوال',
		description: 'تمرين شامل يجمع بين حساب المدى والوسط الحسابي والمنوال من سلسلة بيانات واحدة. 10 محاولات مع نقاط.',
		difficulty: 'medium',
		class: 'السابعة أساسي',
		cardColor: '#f59e0b',
		cardColorDark: '#fbbf24',
		link: 'الاحصاء - تمرين شامل 1.html',
		version: '1.0',
		tags: ['إحصاء', 'مدى', 'وسط', 'منوال', 'شامل'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-27',
		estimatedTime: '8-12 دقيقة',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مدى', 'وسط حسابي', 'منوال', 'إحصاء', 'شامل', 'سلسلة خام'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'Complet : étendue – moyenne – mode',
				description: 'Exercice complet combinant le calcul de l\'étendue, de la moyenne et du mode à partir d\'une même série de données. 10 essais avec points.'
			},
			en: {
				name: 'Combined: Range – Mean – Mode',
				description: 'Comprehensive exercise combining range, mean, and mode calculation from a single data set. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-015',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'المخطط الدائري',
		description: 'تمرين تفاعلي لتحويل النسب المئوية إلى أعداد من مخطط دائري مع جدول. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#e67e22',
		cardColorDark: '#f0a050',
		link: 'الاحصاء - المخطط الدائري.html',
		version: '1.0',
		tags: ['إحصاء', 'مخطط دائري', 'نسب مئوية', 'تحويل', 'جدول'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-27',
		estimatedTime: '6-10 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مخطط دائري', 'نسبة مئوية', 'تحويل', 'إحصاء', 'جدول', 'رسم بياني'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'Diagramme circulaire',
				description: 'Exercice interactif pour convertir des pourcentages en effectifs à partir d\'un diagramme circulaire. 10 essais avec points.'
			},
			en: {
				name: 'Pie Chart',
				description: 'Interactive exercise to convert percentages to frequencies from a pie chart. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-016',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'المخطط الدائري 2',
		description: 'تمرين تفاعلي لتحويل النسب المئوية من مخطط دائري إلى جدول تكرارات. 10 محاولات مع نقاط، ',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#d97706',
		cardColorDark: '#f59e0b',
		link: 'الاحصاء - المخطط الدائري 2.html',
		version: '1.0',
		tags: ['إحصاء', 'مخطط دائري', 'تكرارات', 'نسب مئوية', 'جدول'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-27',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مخطط دائري', 'تكرار', 'نسبة مئوية', 'جدول إحصائي', 'تحويل'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'Diagramme circulaire 2',
				description: 'Exercice interactif pour transformer les pourcentages d\'un diagramme circulaire en tableau d\'effectifs. 10 essais avec points.'
			},
			en: {
				name: 'Pie Chart 2',
				description: 'Interactive exercise to convert percentages from a pie chart into a frequency table. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-017',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'مخطط العصيات',
		description: 'تمرين تفاعلي لتحويل النسب المئوية من مخطط العصيات إلى جدول تكرارات. 10 محاولات مع نقاط، ',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#0ea5e9',
		cardColorDark: '#38bdf8',
		link: 'الاحصاء - مخطط العصيات.html',
		version: '1.0',
		tags: ['إحصاء', 'مخطط عصيات', 'تكرارات', 'نسب مئوية', 'جدول'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-27',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مخطط عصيات', 'تكرار', 'نسبة مئوية', 'جدول إحصائي', 'تحويل'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'Diagramme en bâtons',
				description: 'Exercice interactif pour convertir les pourcentages d\'un diagramme en bâtons en tableau d\'effectifs. 10 essais avec points.'
			},
			en: {
				name: 'Bar Chart',
				description: 'Interactive exercise to convert percentages from a bar chart into a frequency table. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-018',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'شامل 2: مخططات – مدى – وسط – منوال',
		description: 'تمرين شامل يجمع بين قراءة المخططات (عصيات أو دائري) وحساب المدى والوسط والمنوال من جدول التكرارات. ',
		difficulty: 'medium',
		class: 'السابعة أساسي',
		cardColor: '#8b5cf6',
		cardColorDark: '#a78bfa',
		link: 'الاحصاء - تمرين شامل 2.html',
		version: '1.0',
		tags: ['إحصاء', 'مخططات', 'مدى', 'وسط', 'منوال', 'شامل', 'تكرارات'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-27',
		estimatedTime: '10-15 دقيقة',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مخطط عصيات', 'مخطط دائري', 'مدى', 'وسط حسابي', 'منوال', 'إحصاء', 'شامل', 'تكرار'],
		thumbnail: '📊',
		translations: {
			fr: {
				name: 'Complet 2 : diagrammes – étendue – moyenne – mode',
				description: 'Exercice complet combinant lecture de diagrammes (bâtons ou circulaire) et calcul de l\'étendue, moyenne et mode à partir du tableau d\'effectifs.'
			},
			en: {
				name: 'Combined 2: Charts – Range – Mean – Mode',
				description: 'Comprehensive exercise combining reading charts (bar or pie) and calculating range, mean, and mode from a frequency table.'
			}
		}
	},
	{
		id: 'ex-019',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'المخطط الدائري 3',
		description: 'تمرين تفاعلي لحساب زاوية القطاع من التكرار والمجموع الكلي باستخدام القانون (التكرار ÷ المجموع) × 360°. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#7c3aed',
		cardColorDark: '#a78bfa',
		link: 'الاحصاء - المخطط الدائري 3.html',
		version: '1.0',
		tags: ['إحصاء', 'مخطط دائري', 'زاوية القطاع', 'تكرار', 'زوايا'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-27',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['زاوية القطاع', 'مخطط دائري', 'تكرار', 'قانون الزاوية', 'إحصاء'],
		thumbnail: '📐📊',
		translations: {
			fr: {
				name: 'Diagramme circulaire 3 – Angle du secteur',
				description: 'Exercice interactif pour calculer l\'angle du secteur à partir de l\'effectif et du total. Loi : (effectif ÷ total) × 360°. 10 essais avec points.'
			},
			en: {
				name: 'Pie Chart 3 – Sector Angle',
				description: 'Interactive exercise to calculate sector angle from frequency and total. Formula: (frequency ÷ total) × 360°. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-020',
		section: 'الإحصاء',
		sectionIcon: '📊',
		name: 'الاحتمال التجريبي',
		description: 'تمرين تفاعلي لحساب الاحتمال التجريبي من جدول تكراري باستخدام القانون (تكرار ÷ كلي × 100). 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#0ea5e9',
		cardColorDark: '#38bdf8',
		link: 'الاحصاء - الاحتمال.html',
		version: '1.0',
		tags: ['إحصاء', 'احتمال', 'تجريبي', 'تكرار', 'نسبة مئوية', 'جدول تكراري'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-28',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['احتمال تجريبي', 'تكرار', 'نسبة مئوية', 'جدول تكراري', 'إحصاء', 'قرص دوار'],
		thumbnail: '🎲',
		translations: {
			fr: {
				name: 'Probabilité expérimentale',
				description: 'Exercice interactif pour calculer la probabilité expérimentale à partir d\'un tableau d\'effectifs. Loi : (effectif ÷ total) × 100. 10 essais avec points.'
			},
			en: {
				name: 'Experimental Probability',
				description: 'Interactive exercise to calculate experimental probability from a frequency table. Formula: (frequency ÷ total) × 100. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-021',
		section: 'الإحصاء',
		sectionIcon: '📊🎲',
		name: 'شامل 3: مخططات – مدى – وسط – منوال – احتمال',
		description: 'تمرين شامل يجمع بين قراءة المخططات (أعمدة أو دائري) وحساب المدى والمعدل الحسابي والمنوال والاحتمال التجريبي خطوة بخطوة. 10 محاولات مع نقاط.',
		difficulty: 'hard',
		class: 'السابعة أساسي',
		cardColor: '#d946ef',
		cardColorDark: '#f0abfc',
		link: 'الاحصاء - تمرين شامل 3.html',
		version: '1.0',
		tags: ['إحصاء', 'مخططات', 'مدى', 'وسط', 'منوال', 'احتمال', 'تجريبي', 'شامل', 'تكرارات'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-28',
		estimatedTime: '12-18 دقيقة',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مخطط عصيات', 'مخطط دائري', 'مدى', 'وسط موزون', 'منوال', 'احتمال تجريبي', 'إحصاء', 'شامل', 'تكرار', 'قانون الاحتمال'],
		thumbnail: '📊🎲',
		translations: {
			fr: {
				name: 'Complet 3 : diagrammes – étendue – moyenne – mode – probabilité',
				description: 'Exercice complet combinant lecture de diagrammes (barres ou circulaire), calcul de l\'étendue, moyenne, mode et probabilité expérimentale étape par étape. 10 essais avec points.'
			},
			en: {
				name: 'Combined 3: Charts – Range – Mean – Mode – Probability',
				description: 'Comprehensive exercise combining reading charts (bar or pie), calculating range, mean, mode, and experimental probability step by step. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-022',
		section: 'Équations',                    // ✅ فرنسي
		sectionIcon: '⚖️',
		name: 'Équations du premier degré',
		description: 'Exercice interactif pour résoudre des équations du premier degré à une inconnue. 10 essais avec points.',
		difficulty: 'medium',
		class: '1ère année secondaire',          // ✅ فرنسي
		cardColor: '#3b82f6',
		cardColorDark: '#60a5fa',
		link: 'exercice-equations.html',
		version: '1.0',
		tags: ['معادلات', 'درجة أولى', 'جبر', 'مجهول'],
		mainLanguage: 'Français',
		availableTranslations: ['Français', 'العربية', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-28',
		estimatedTime: '6-10 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الثانوية',
		keywords: ['équation', 'premier degré', 'inconnue', 'algèbre'],
		thumbnail: '⚖️',
		translations: {
			ar: {
				name: 'معادلات الدرجة الأولى',
				description: 'تمرين تفاعلي لحل معادلات من الدرجة الأولى بمجهول واحد. 10 محاولات مع نقاط.'
			},
			en: {
				name: 'First-Degree Equations',
				description: 'Interactive exercise to solve first-degree equations with one unknown. 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-023',
		section: 'رباعيات الأضلاع',
		sectionIcon: '🔷',
		name: 'رباعيات الأضلاع – قواعد عامة',
		description: 'تمرين تفاعلي مبسط جداً لاستنتاج الزوايا والأضلاع الناقصة في رباعي الأضلاع باستخدام القواعد العامة (مجموع الزوايا 360°، المحيط، خواص متوازي الأضلاع). 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#8b5cf6',
		cardColorDark: '#a78bfa',
		link: 'رباعيات الأضلاع - قواعد عامة.html',
		version: '1.0',
		tags: ['رباعيات', 'زوايا', 'محيط', 'متوازي أضلاع', 'قواعد', 'مبسط'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-28',
		estimatedTime: '6-10 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['رباعي الأضلاع', 'مجموع الزوايا', 'محيط', 'متوازي أضلاع', 'ضلع', 'زاوية'],
		thumbnail: '🔷',
		translations: {
			fr: {
				name: 'Quadrilatères – Règles générales',
				description: 'Exercice interactif très simplifié pour déduire les angles et côtés manquants dans un quadrilatère (somme des angles 360°, périmètre, parallélogramme). 10 essais avec points.'
			},
			en: {
				name: 'Quadrilaterals – General Rules',
				description: 'Very simplified interactive exercise to find missing angles and sides in quadrilaterals (angle sum 360°, perimeter, parallelogram properties). 10 attempts with points.'
			}
		}
	},
	{
		id: 'ex-024',
		section: 'رباعيات الأضلاع',
		sectionIcon: '🔷',
		name: 'رباعيات الأضلاع – قواعد عامة 2',
		description: 'تمرين تفاعلي مبسط جدًا لاستنتاج نوع الرباعي (مستطيل، مربع، معين، متوازي أضلاع) خطوة بخطوة انطلاقًا من مشكلات عملية. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#0891b2',
		cardColorDark: '#22d3ee',
		link: 'رباعيات الأضلاع - قواعد عامة 2.html',
		version: '1.0',
		tags: ['رباعيات', 'تصنيف', 'مستطيل', 'مربع', 'معين', 'متوازي أضلاع', 'قواعد', 'مبسط'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-04-29',
		estimatedTime: '6-10 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['رباعي الأضلاع', 'تصنيف', 'مستطيل', 'مربع', 'معين', 'متوازي أضلاع', 'قاعدة', 'سياق حقيقي'],
		thumbnail: '🔷',
		translations: {
			fr: {
				name: 'Quadrilatères – Règles générales 2',
				description: 'Exercice interactif très simplifié pour identifier le type de quadrilatère (rectangle, carré, losange, parallélogramme) étape par étape à partir de situations concrètes. 10 essais avec points.'
			},
			en: {
				name: 'Quadrilaterals – General Rules 2',
				description: 'Very simplified interactive exercise to identify quadrilateral type (rectangle, square, rhombus, parallelogram) step by step from real-life contexts. 10 attempts with points.'
			}
		}
	},
	{
    id: 'ex-025',
    section: 'رباعيات الأضلاع',
    sectionIcon: '🧩',
    name: 'رباعيات الأضلاع – قواعد عامة 3',
    description: 'تمرين تفاعلي مبسط لتحليل الأشكال المركبة (مثل مستطيل مع مربع) خطوة بخطوة لاستنتاج نوع الرباعي.  10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#0891b2',
    cardColorDark: '#22d3ee',
    link: 'رباعيات الأضلاع - قواعد عامة 3.html',
    version: '1.0',
    tags: ['رباعيات', 'أشكال مركبة', 'تحليل', 'مستطيل', 'مربع', 'مبسط'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-29',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['رباعي الأضلاع', 'شكل مركب', 'تحليل', 'مستطيل', 'مربع', 'قاعدة', 'تبسيط'],
    thumbnail: '🧩',
    translations: {
        fr: {
            name: 'Quadrilatères – Règles générales 3',
            description: 'Exercice interactif très simplifié pour analyser des figures composées (ex: rectangle + carré) étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'Quadrilaterals – General Rules 3',
            description: 'Very simplified interactive exercise to analyze composite shapes (e.g., rectangle + square) step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-026', 
    section: 'الأحجام',
    sectionIcon: '🧊',
    name: 'الأحجام – الموشور القائم',
    description: 'تمرين متطور: يتغير الشكل (مثلث/مستطيل) والسؤال في كل محاولة. يحسب التلميذ الحجم أو المساحة أو الارتفاع خطوة بخطوة. 10 محاولات.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#1f8a4c',
    cardColorDark: '#4ade80',
    link: 'الأحجام - الموشور القائم.html',
    version: '2.0',
    tags: ['أحجام', 'موشور قائم', 'مساحة', 'حجم', 'قاعدة مثلثة', 'قاعدة مستطيلة'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-29',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['موشور قائم', 'حجم', 'مساحة جانبية', 'مساحة جملية', 'ارتفاع', 'محيط القاعدة'],
    thumbnail: '🧊',
    translations: {
        fr: {
            name: 'Volume – Prisme droit (aléatoire)',
            description: 'Exercice évolué : forme et question changent à chaque essai. Calcul du volume, aire ou hauteur étape par étape. 10 essais.'
        },
        en: {
            name: 'Volume – Right Prism (random)',
            description: 'Advanced exercise: shape and question change each attempt. Calculate volume, area, or height step by step. 10 attempts.'
        }
    }
},
{
    id: 'ex-027',
    section: 'الأحجام',
    sectionIcon: '🧊',
    name: 'الأحجام – الأسطوانة الدائرية القائمة',
    description: 'تمرين متطور: يتغير السؤال في كل محاولة. يحسب التلميذ الحجم أو المساحة أو الارتفاع أو الشعاع خطوة بخطوة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#0d9488',
    cardColorDark: '#2dd4bf',
    link: 'الأحجام - الاسطوانة الدائرية القائمة.html',
    version: '1.0',
    tags: ['أحجام', 'اسطوانة', 'مساحة', 'حجم', 'شعاع', 'ارتفاع'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-29',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['اسطوانة', 'حجم', 'مساحة جانبية', 'مساحة جملية', 'ارتفاع', 'شعاع', 'قاعدة دائرية', 'π'],
    thumbnail: '🧊',
    translations: {
        fr: {
            name: 'Volume – Cylindre droit (aléatoire)',
            description: 'Exercice évolué : question change à chaque essai. Calcul du volume, aire ou hauteur étape par étape. 10 essais.'
        },
        en: {
            name: 'Volume – Right Cylinder (random)',
            description: 'Advanced exercise: question changes each attempt. Calculate volume, area, or height step by step. 10 attempts.'
        }
    }
},
{
    id: 'ex-028',
    section: 'الأحجام',
    sectionIcon: '🧊',
    name: 'الأحجام – تمرين شامل (موشور + أسطوانة)',
    description: 'تمرين شامل ومبسط لحساب حجم الخشب في صندوق موشور قائم به ثقب أسطواني. خطوات مفصلة مع رسم ثلاثي الأبعاد. 10 محاولات مع نقاط.',
    difficulty: 'medium',
    class: 'السابعة أساسي',
    cardColor: '#b45309',
    cardColorDark: '#f59e0b',
    link: 'الأحجام - تمرين شامل.html',
    version: '1.0',
    tags: ['أحجام', 'موشور قائم', 'أسطوانة', 'شامل', 'حجم الخشب', 'مركب'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-29',
    estimatedTime: '8-14 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['حجم', 'موشور', 'أسطوانة', 'شكل مركب', 'خشب', 'π', 'مساحة قاعدة', 'ارتفاع'],
    thumbnail: '🧊🕳️',
    translations: {
        fr: {
            name: 'Volumes – Exercice complet (Prisme + Cylindre)',
            description: 'Exercice complet et simplifié pour calculer le volume de bois d\'un prisme droit avec un trou cylindrique. Étapes détaillées avec dessin 3D. 10 essais avec points.'
        },
        en: {
            name: 'Volumes – Combined Exercise (Prism + Cylinder)',
            description: 'Comprehensive simplified exercise to calculate wood volume of a right prism with a cylindrical hole. Detailed steps with 3D drawing. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-029',
    section: 'Équations',
    sectionIcon: '⚖️',
    name: 'Équations – facteur commun (simple)',
    description: 'Résoudre une équation avec facteur commun du type a(bx+c)=d(ex+f) étape par étape.',
    difficulty: 'easy',
    class: '1ère année secondaire',
    cardColor: '#0ea5e9',
    cardColorDark: '#38bdf8',
    link: 'exercice-equations 2.html',
    version: '1.0',
    tags: ['معادلات', 'أقواس', 'تبسيط', 'نشر', 'تجميع', 'جبر'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-29',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['équation', 'parenthèses', 'développer', 'réduire', 'premier degré', 'simple'],
    thumbnail: '⚖️',
    translations: {
        ar: {
            name: 'معادلات بأقواس (مبسطة)',
            description: 'تمرين تفاعلي لحل معادلة بالأقواس خطوة بخطوة، '
        },
        en: {
            name: 'Equations with Parentheses (simplified)',
            description: 'Interactive exercise to solve equations with common factor step by step.'
        }
    }
},
{
    id: 'ex-030',
    section: 'Équations',
    sectionIcon: '⚖️',
    name: 'Équations avec fractions simples',
    description: 'Résoudre une équation avec fractions du type (ax+b)/c = (dx+e)/f étape par étape (8 étapes).',
    difficulty: 'easy',
    class: '1ère année secondaire',
    cardColor: '#0ea5e9',
    cardColorDark: '#38bdf8',
    link: 'exercice-equations 3.html',
    version: '1.0',
    tags: ['معادلات', 'كسور', 'تبسيط', 'PPCM', 'نشر', 'جبر'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-30',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['équation', 'fractions', 'PPCM', 'dénominateur', 'premier degré', 'simple'],
    thumbnail: '⚖️',
    translations: {
        ar: {
            name: 'معادلات ذات كسور بسيطة',
            description: 'تمرين تفاعلي لحل معادلة ذات كسور خطوة بخطوة (8 خطوات)، '
        },
        en: {
            name: 'Equations with Simple Fractions',
            description: 'Interactive exercise to solve fraction equations step by step (8 steps).'
        }
    }
},
{
    id: 'ex-031',
    section: 'Équations',
    sectionIcon: '⚖️',
    name: 'Équations avec racines carrées',
    description: 'Résoudre une équation du premier degré avec racines carrées – 8 étapes détaillées. 10 essais avec points.',
    difficulty: 'medium',
    class: '1ère année secondaire',
    cardColor: '#0d9488',
    cardColorDark: '#2dd4bf',
    link: 'exercice-equations 4.html',
    version: '1.0',
    tags: ['معادلات', 'جذور تربيعية', 'تبسيط', 'جبر', 'خطوات'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-30',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['équation', 'racine carrée', 'simplification', 'premier degré', 'radical'],
    thumbnail: '⚖️',
    translations: {
        ar: {
            name: 'معادلات ذات جذور تربيعية',
            description: 'تمرين تفاعلي لحل معادلة من الدرجة الأولى تحتوي على جذور تربيعية – 8 خطوات. 10 محاولات مع نقاط.'
        },
        en: {
            name: 'Equations with Square Roots',
            description: 'Interactive exercise to solve first-degree equations with square roots – 8 detailed steps. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-032',
    section: 'Équations',
    sectionIcon: '⚖️',
    name: 'Équations – Problèmes concrets',
    description: 'Mets le problème en équation (choix aléatoire parmi 4 types) puis résous. 10 essais avec points.',
    difficulty: 'medium',
    class: '1ère année secondaire',
    cardColor: '#0d9488',
    cardColorDark: '#2dd4bf',
    link: 'exercice-equations complete.html',
    version: '1.0',
    tags: ['معادلات', 'مسائل', 'واقعية', 'جبر', 'مشكل', 'خطوات'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-30',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['équation', 'problème concret', 'premier degré', 'mise en équation'],
    thumbnail: '⚖️',
    translations: {
        ar: {
            name: 'المعادلات – مسائل واقعية',
            description: 'ضع المسألة في معادلة (اختيار عشوائي من 4 أنواع) ثم حلها. 10 محاولات مع نقاط.'
        },
        en: {
            name: 'Equations – Real-life Problems',
            description: 'Write the equation from the problem (randomly chosen among 4 types) then solve it. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-033',
    section: 'Équations',
    sectionIcon: '⚖️',
    name: 'Équations – Mise en équation (problèmes)',
    description: 'Traduire un problème concret en équation du premier degré. Trois types de problèmes (location, âges, cinéma). 10 essais avec points.',
    difficulty: 'easy',
    class: '1ère année secondaire',
    cardColor: '#ec4899',
    cardColorDark: '#f472b6',
    link: 'exercice-equations 5.html',
    version: '1.0',
    tags: ['معادلات', 'مسائل', 'واقعية', 'تحويل', 'جبر', 'مجهول'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-04-30',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['équation', 'problème concret', 'mise en équation', 'premier degré'],
    thumbnail: '⚖️',
    translations: {
        ar: {
            name: 'صياغة المعادلات – مسائل',
            description: 'ترجمة مسألة واقعية إلى معادلة من الدرجة الأولى. ثلاثة أنواع من المسائل. 10 محاولات مع نقاط.'
        },
        en: {
            name: 'Setting Up Equations – Problems',
            description: 'Translate a real-life problem into a first-degree equation. Three problem types. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-034',
    section: 'الجبر',
    sectionIcon: '➕➖',
    name: 'المقارنة في ℚ',
    description: 'تمرين تفاعلي لمقارنة عددين كسريين خطوة بخطوة حسب القاعدة (نفس المقام، نفس البسط، إشارتان مختلفتان، أو جداءات). 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'الثامنة أساسي',
    cardColor: '#8b5cf6',
    cardColorDark: '#a78bfa',
    link: 'الجبر - المقارنة في Q.html',
    version: '1.0',
    tags: ['جبر', 'مقارنة', 'أعداد كسرية', 'ℚ', 'قواعد', 'جداءات', 'تبسيط'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-01',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['مقارنة', 'كسر', 'عدد كسري', 'نفس المقام', 'نفس البسط', 'جداء', 'ℚ'],
    thumbnail: '⚖️',
    translations: {
        fr: {
            name: 'Comparaison dans ℚ',
            description: 'Exercice interactif pour comparer deux nombres rationnels étape par étape selon la règle. 10 essais avec points.'
        },
        en: {
            name: 'Comparing in ℚ',
            description: 'Interactive exercise to compare two rational numbers step by step using the appropriate rule. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-035',
    section: 'المتراجحات',
    sectionIcon: '📉',
    name: 'المتراجحات في ℝ',
    description: 'تمرين تفاعلي لحل متراجحات من الدرجة الأولى بمجهول واحد خطوة بخطوة. يتناول نقل الحدود والقسمة على معامل x مع مراعاة انعكاس الإشارة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'التاسعة أساسي',
    cardColor: '#8b5cf6',
    cardColorDark: '#a78bfa',
    link: 'المعادلات - المتراجحات في R.html',
    version: '1.0',
    tags: ['متراجحات', 'درجة أولى', 'جبر', 'مجهول', 'مجال', 'أكبر', 'أصغر'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-01',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['متراجحة', 'حل', 'مجال', 'مجموعة الحلول', 'ℝ', 'معامل', 'إشارة'],
    thumbnail: '⚖️',
    translations: {
        fr: {
            name: 'Inéquations dans ℝ',
            description: 'Exercice interactif pour résoudre des inéquations du premier degré étape par étape. Transposition, division en tenant compte du signe du coefficient. 10 essais avec points.'
        },
        en: {
            name: 'Inequalities in ℝ',
            description: 'Interactive exercise to solve first-degree inequalities step by step. Includes moving terms, dividing by the coefficient, and sign reversal. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-036',
    section: 'الجبر',
    sectionIcon: '➕➖',
    name: 'العبارات الحرفية',
    description: 'تمرين تفاعلي لتبسيط العبارات الحرفية (جمع وطرح الحدود المتشابهة) خطوة بخطوة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#7c3aed',
    cardColorDark: '#a78bfa',
    link: 'الجبر - العبارات الحرفية.html',
    version: '1.0',
    tags: ['جبر', 'عبارات حرفية', 'تبسيط', 'حدود متشابهة', 'خطوات'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-01',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['عبارة حرفية', 'تبسيط', 'حدود متشابهة', 'جمع', 'طرح', 'متغير a'],
    thumbnail: '➕➖',
    translations: {
        fr: {
            name: 'Expressions littérales',
            description: 'Exercice interactif pour simplifier des expressions littérales pas à pas. 10 essais avec points.'
        },
        en: {
            name: 'Literal Expressions',
            description: 'Interactive exercise to simplify literal expressions step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-037',
    section: 'الجبر',
    sectionIcon: '➕➖',
    name: 'العبارات الحرفية 2',
    description: 'تمرين تفاعلي لنشر واختزال العبارات الحرفية (نشر الأقواس ثم جمع الحدود المتشابهة) خطوة بخطوة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#7e22ce',
    cardColorDark: '#a78bfa',
    link: 'الجبر - العبارات الحرفية 2.html',
    version: '1.0',
    tags: ['جبر', 'عبارات حرفية', 'نشر', 'اختزال', 'أقواس', 'خطوات'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-01',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['نشر', 'اختزال', 'عبارة حرفية', 'أقواس', 'تبسيط', 'حدود متشابهة', 'متغير a'],
    thumbnail: '➕➖',
    translations: {
        fr: {
            name: 'Expressions littérales 2',
            description: 'Exercice interactif pour développer et réduire des expressions littérales pas à pas. 10 essais avec points.'
        },
        en: {
            name: 'Literal Expressions 2',
            description: 'Interactive exercise to expand and simplify literal expressions step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-038',
    section: 'الجبر',
    sectionIcon: '➕➖',
    name: 'العبارات الحرفية 3',
    description: 'تمرين تفاعلي لاختزال عبارة حرفية إلى جداء عوامل باستعمال القاسم المشترك الأكبر خطوة بخطوة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#7c3aed',
    cardColorDark: '#a78bfa',
    link: 'الجبر - العبارات الحرفية 3.html',
    version: '1.0',
    tags: ['جبر', 'عبارات حرفية', 'اختزال', 'جداء عوامل', 'قاسم مشترك', 'تبسيط'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-02',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['اختزال', 'جداء عوامل', 'عامل مشترك', 'قاسم مشترك أكبر', 'عبارة حرفية', 'جبر'],
    thumbnail: '🧩',
    translations: {
        fr: {
            name: 'Expressions littérales 3',
            description: 'Exercice interactif pour factoriser une expression littérale en produit de facteurs en utilisant le PGCD, étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'Literal Expressions 3',
            description: 'Interactive exercise to factor a linear expression into a product using the GCD, step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-039',
    section: 'الجبر',
    sectionIcon: '🧩',
    name: 'توحيد المقامات',
    description: 'تمرين تفاعلي لتعلم توحيد مقامات عددين كسريين خطوة بخطوة حسب كل حالة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#0891b2',
    cardColorDark: '#22d3ee',
    link: 'الجبر - توحيد المقامات.html',
    version: '2.0',
    tags: ['جبر', 'كسور', 'توحيد المقامات', 'مضاعف مشترك', 'تبسيط', 'خطوات'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-02',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['توحيد المقامات', 'كسر', 'مضاعف مشترك أصغر', 'تبسيط', 'بسط', 'مقام', 'جبر'],
    thumbnail: '🧩',
    translations: {
        fr: {
            name: 'Unification des dénominateurs',
            description: 'Exercice interactif pour apprendre à unifier les dénominateurs de deux fractions étape par étape selon chaque cas. 10 essais avec points.'
        },
        en: {
            name: 'Unifying Denominators',
            description: 'Interactive exercise to learn unifying denominators of two fractions step by step according to each case. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-040',
    section: 'الجبر',
    sectionIcon: '🧩',
    name: 'المضاعف المشترك الأصغر',
    description: 'تمرين تفاعلي لإيجاد المضاعف المشترك الأصغر لعددين بطريقتين: كتابة المضاعفات والتفكيك إلى عوامل أولية، خطوة بخطوة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#0891b2',
    cardColorDark: '#22d3ee',
    link: 'الجبر - المضاعف المشترك الأصغر.html',
    version: '1.0',
    tags: ['جبر', 'المضاعف المشترك الأصغر', 'مضاعفات', 'عوامل أولية', 'LCM', 'قاسم مشترك أكبر'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-03',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['المضاعف المشترك الأصغر', 'LCM', 'مضاعفات', 'تفكيك', 'عوامل أولية', 'قاسم مشترك أكبر', 'سابعة أساسي'],
    thumbnail: '🔢',
    translations: {
        fr: {
            name: 'Plus Petit Commun Multiple (PPCM)',
            description: 'Exercice interactif pour trouver le PPCM de deux nombres par deux méthodes : multiples et facteurs premiers, étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'Least Common Multiple (LCM)',
            description: 'Interactive exercise to find the LCM of two numbers using two methods: multiples and prime factorization, step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-041',
    section: 'الجبر',
    sectionIcon: '➕➖',
    name: 'الجمع والطرح في Z',
    description: 'تمرين تفاعلي لجمع وطرح أعداد موجبة وسالبة خطوة بخطوة باستعمال قاعدة الإشارات. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#0d9488',
    cardColorDark: '#2dd4bf',
    link: 'الجبر - الجمع والطرح في Z.html',
    version: '1.0',
    tags: ['جمع', 'طرح', 'أعداد صحيحة', 'Z', 'قاعدة الإشارات', 'جبر', 'خطوات', 'مبسط'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-04',
    estimatedTime: '5-8 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['جمع', 'طرح', 'Z', 'إشارات', 'موجبة', 'سالب', 'سابعة أساسي', 'قاعدة الإشارات'],
    thumbnail: '➕➖',
    translations: {
        fr: {
            name: 'Addition et soustraction dans Z',
            description: 'Exercice interactif pour additionner et soustraire des nombres positifs et négatifs étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'Addition & Subtraction in Z',
            description: 'Interactive exercise to add and subtract positive and negative numbers step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-042',
    section: 'الجبر',
    sectionIcon: '✖️',
    name: 'الضرب في Z',
    description: 'تمرين تفاعلي لضرب أعداد صحيحة موجبة وسالبة خطوة بخطوة مع تطبيق قاعدة إشارات الضرب. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#6366f1',
    cardColorDark: '#818cf8',
    link: 'الجبر - الضرب في Z.html',
    version: '1.0',
    tags: ['ضرب', 'أعداد صحيحة', 'Z', 'قاعدة الإشارات', 'جبر', 'خطوات', 'مبسط'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-05',
    estimatedTime: '5-8 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['ضرب', 'أعداد صحيحة', 'Z', 'موجب', 'سالب', 'قاعدة الإشارات', 'سابعة أساسي', 'جبر'],
    thumbnail: '✖️',
    translations: {
        fr: {
            name: 'Multiplication dans Z',
            description: 'Exercice interactif pour multiplier des nombres entiers positifs et négatifs étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'Multiplication in Z',
            description: 'Interactive exercise to multiply positive and negative integers step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-043',
    section: 'الجبر',
    sectionIcon: '➗',
    name: 'القسمة في Z',
    description: 'تمرين تفاعلي لقسمة أعداد صحيحة موجبة وسالبة خطوة بخطوة مع تطبيق قاعدة إشارات القسمة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#d97706',
    cardColorDark: '#fbbf24',
    link: 'الجبر - القسمة في Z.html',
    version: '1.0',
    tags: ['قسمة', 'أعداد صحيحة', 'Z', 'قاعدة الإشارات', 'جبر', 'خطوات', 'مبسط'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-05',
    estimatedTime: '5-8 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['قسمة', 'أعداد صحيحة', 'Z', 'موجب', 'سالب', 'قاعدة الإشارات', 'سابعة أساسي', 'جبر'],
    thumbnail: '➗',
    translations: {
        fr: {
            name: 'Division dans Z',
            description: 'Exercice interactif pour diviser des nombres entiers positifs et négatifs étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'Division in Z',
            description: 'Interactive exercise to divide positive and negative integers step by step. 10 attempts with points.'
        }
    }
},
	{
		id: 'ex-044',
		section: 'الجبر',
		sectionIcon: '⚖️',
		name: 'المقارنة في Z',
		description: 'تمرين تفاعلي لمقارنة عددين صحيحين خطوة بخطوة مع تحليل الإشارات والقيم المطلقة وتطبيق القواعد. 10 محاولات مع نقاط.',
		difficulty: 'easy',
		class: 'السابعة أساسي',
		cardColor: '#2563eb',
		cardColorDark: '#60a5fa',
		link: 'الجبر - المقارنة في Z.html',
		version: '1.0',
		tags: ['مقارنة', 'أعداد صحيحة', 'Z', 'قاعدة الإشارات', 'جبر', 'خطوات', 'مبسط'],
		mainLanguage: 'العربية',
		availableTranslations: ['العربية', 'Français', 'English'],
		author: 'فريق الرياضيات',
		dateAdded: '2026-05-05',
		estimatedTime: '5-8 دقائق',
		questionCount: 10,
		curriculum: 'المرحلة الإعدادية',
		keywords: ['مقارنة', 'أعداد صحيحة', 'Z', 'موجب', 'سالب', 'صفر', 'قيمة مطلقة', 'سابعة أساسي', 'جبر'],
		thumbnail: '⚖️',
		translations: {
			fr: {
				name: 'Comparaison dans Z',
				description: 'Exercice interactif pour comparer deux entiers relatifs étape par étape en analysant les signes et les valeurs absolues. 10 essais avec points.'
			},
			en: {
				name: 'Comparison in Z',
				description: 'Interactive exercise to compare two integers step by step using sign analysis and absolute values. 10 attempts with points.'
			}
		}
	},
	{
    id: 'ex-045',
    section: 'الجبر',
    sectionIcon: '➕➖',
    name: 'الجمع والطرح في Q',
    description: 'تمرين تفاعلي لجمع وطرح أعداد كسرية موجبة وسالبة خطوة بخطوة مع توحيد المقامات والاختزال. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#14b8a6',
    cardColorDark: '#2dd4bf',
    link: 'الجبر - الجمع والطرح في Q.html',
    version: '1.0',
    tags: ['جمع', 'طرح', 'كسور', 'أعداد كسرية', 'Q', 'توحيد المقامات', 'جبر', 'خطوات', 'مبسط'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-05',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['جمع', 'طرح', 'كسر', 'عدد كسري', 'توحيد المقامات', 'قاسم مشترك', 'اختزال', 'سابعة أساسي', 'جبر'],
    thumbnail: '➕➖',
    translations: {
        fr: {
            name: 'Addition et soustraction dans ℚ',
            description: 'Exercice interactif pour additionner et soustraire des fractions positives et négatives pas à pas, avec unification des dénominateurs et simplification. 10 essais avec points.'
        },
        en: {
            name: 'Addition & Subtraction in ℚ',
            description: 'Interactive exercise to add and subtract positive and negative fractions step by step, including unifying denominators and simplifying. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-046',
    section: 'الإحصاء',
    sectionIcon: '📈',
    name: 'التناسب الطردي',
    description: 'تمرين تفاعلي لاكتشاف معامل التناسب وإكمال جدول تناسب طردي خطوة بخطوة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'السابعة أساسي',
    cardColor: '#0ea5e9',
    cardColorDark: '#38bdf8',
    link: 'الاحصاء - التناسب الطردي.html',
    version: '1.0',
    tags: ['تناسب طردي', 'معامل التناسب', 'جدول', 'نسبة', 'إحصاء'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-06',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['تناسب طردي', 'معامل التناسب', 'جدول تناسب', 'قانون y=ax', 'سابعة أساسي'],
    thumbnail: '⚖️',
    translations: {
        fr: {
            name: 'Proportionnalité directe',
            description: 'Exercice interactif pour trouver le coefficient de proportionnalité et compléter un tableau. 10 essais avec points.'
        },
        en: {
            name: 'Direct Proportionality',
            description: 'Interactive exercise to find the constant of proportionality and complete a table. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-047',
    section: 'الإحصاء',
    sectionIcon: '📈',
    name: 'التناسب الطردي بأعداد كسرية',
    description: 'تمرين تفاعلي لاكتشاف معامل التناسب (كسر) وإكمال جدول تناسب طردي بأعداد كسرية خطوة بخطوة. موجه لتلاميذ الثامنة أساسي. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'الثامنة أساسي',
    cardColor: '#0ea5e9',
    cardColorDark: '#38bdf8',
    link: 'الاحصاء - التناسب الطردي 2.html',
    version: '1.0',
    tags: ['تناسب طردي', 'أعداد كسرية', 'جدول', 'معامل التناسب', 'كسر', 'ثامنة أساسي'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-06',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['تناسب طردي', 'كسر', 'معامل التناسب', 'عدد كسري', 'جدول تناسب', 'y=ax', 'ثامنة أساسي'],
    thumbnail: '📈',
    translations: {
        fr: {
            name: 'Proportionnalité directe avec fractions',
            description: 'Exercice interactif pour trouver le coefficient de proportionnalité (fraction) et compléter un tableau de nombres rationnels, étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'Direct Proportionality with Fractions',
            description: 'Interactive exercise to find the constant of proportionality (fraction) and complete a table of rational numbers step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-048',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'الوسيط (الموسط)',
    description: 'تمرين تفاعلي مبسط لحساب الوسيط (الموسط) من سلسلة إحصائية: ترتيب القيم، تحديد فردي/زوجي، تطبيق قاعدة الرتبة، واستخراج الوسيط خطوة بخطوة. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'الثامنة أساسي',
    cardColor: '#f59e0b',
    cardColorDark: '#fbbf24',
    link: 'الاحصاء - الموسط.html',
    version: '1.0',
    tags: ['إحصاء', 'وسيط', 'موسط', 'ترتيب', 'قاعدة', 'أعداد', 'فردي', 'زوجي'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-06',
    estimatedTime: '6-10 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['وسيط', 'موسط', 'ترتيب تصاعدي', 'رتبة', 'فردي', 'زوجي', 'إحصاء', 'ثامنة أساسي'],
    thumbnail: '📊',
    translations: {
        fr: {
            name: 'La médiane',
            description: 'Exercice interactif simplifié pour calculer la médiane d’une série statistique : trier les valeurs, déterminer pair/impair, appliquer la règle du rang et extraire la médiane étape par étape. 10 essais avec points.'
        },
        en: {
            name: 'The Median',
            description: 'Simplified interactive exercise to calculate the median of a data set: sort values, determine odd/even, apply the rank rule, and extract the median step by step. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-049',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'الموسط 2 (الفئات)',
    description: 'تمرين تفاعلي مبسط لتحديد الوسيط في سلسلة إحصائية ذات فئات خطوة بخطوة. يتناول التكرارات المتجمعة، الرتبة، فئة الوسيط ومركزها. مناسب للتلاميذ الضعفاء في التاسعة أساسي. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'التاسعة أساسي',
    cardColor: '#6366f1',
    cardColorDark: '#818cf8',
    link: 'الاحصاء - الموسط 2.html',
    version: '2.0',
    tags: ['إحصاء', 'وسيط', 'فئات', 'تكرارات متجمعة', 'رتبة', 'فئة الوسيط', 'مركز فئة', 'CF'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-06',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['وسيط', 'موسط', 'فئات', 'تكرار متجمع', 'CF', 'رتبة الوسيط', 'مركز الفئة', 'إحصاء', 'تاسعة أساسي'],
    thumbnail: '📊',
    translations: {
        fr: {
            name: 'Médiane 2 (classes)',
            description: 'Exercice interactif simplifié pour déterminer la médiane dans une série groupée par classes, étape par étape. Effectifs cumulés, rang, classe médiane et centre. Adapté aux élèves en difficulté de 9ème année. 10 essais avec points.'
        },
        en: {
            name: 'Median 2 (Grouped Data)',
            description: 'Simplified interactive exercise to find the median in a grouped frequency distribution step by step. Cumulative frequencies, rank, median class and midpoint. Suitable for struggling 9th grade students. 10 attempts with points.'
        }
    }
},
{
  "id": "ex-050",
  "section": "الإحصاء",
  "sectionIcon": "📊",
  "name": "التكرار التراكمي",
  "description": "تمرين تفاعلي لحساب التكرار التراكمي الصاعد والنازل من جدول التكرارات. 10 محاولات مع نقاط.",
  "difficulty": "easy",
  "class": "الثامنة أساسي",
  "cardColor": "#3b82f6",
  "cardColorDark": "#60a5fa",
  "link": "الاحصاء - التكرار التراكمي.html",
  "version": "1.0",
  "tags": ["إحصاء", "تكرار تراكمي", "صاعد", "نازل", "جدول تكرارات"],
  "mainLanguage": "العربية",
  "availableTranslations": ["العربية", "Français", "English"],
  "author": "فريق الرياضيات",
  "dateAdded": "2026-05-06",
  "estimatedTime": "6-10 دقائق",
  "questionCount": 10,
  "curriculum": "المرحلة الإعدادية",
  "keywords": ["تكرار تراكمي", "صاعد", "نازل", "Cumulatif", "إحصاء", "ثامنة أساسي"],
  "thumbnail": "📊",
  "translations": {
    "fr": {
      "name": "Fréquence cumulée",
      "description": "Calcul des fréquences cumulées croissante et décroissante à partir d'un tableau d'effectifs. 10 essais avec points."
    },
    "en": {
      "name": "Cumulative Frequency",
      "description": "Calculate ascending and descending cumulative frequencies from a frequency table. 10 attempts with points."
    }
  }
},
{
  "id": "ex-051",
  "section": "الإحصاء",
  "sectionIcon": "📊",
  "name": "التكرار التراكمي 2 (فئات)",
  "description": "تمرين تفاعلي لحساب التكرار التراكمي الصاعد والنازل في جداول فئات مع تنويع الأسئلة (أربع أنماط). 10 محاولات مع نقاط.",
  "difficulty": "medium",
  "class": "الثامنة أساسي",
  "cardColor": "#7c3aed",
  "cardColorDark": "#a78bfa",
  "link": "الاحصاء - التكرار التراكمي 2.html",
  "version": "1.0",
  "tags": ["إحصاء", "تكرار تراكمي", "صاعد", "نازل", "فئات", "جداول", "CFA", "CFD"],
  "mainLanguage": "العربية",
  "availableTranslations": ["العربية", "Français", "English"],
  "author": "فريق الرياضيات",
  "dateAdded": "2026-05-06",
  "estimatedTime": "8-12 دقائق",
  "questionCount": 10,
  "curriculum": "المرحلة الإعدادية",
  "keywords": ["تكرار تراكمي صاعد", "تكرار تراكمي نازل", "CFA", "CFD", "فئات", "جدول تكرارات", "إحصاء", "ثامنة أساسي"],
  "thumbnail": "📊",
  "translations": {
    "fr": {
      "name": "Fréquence cumulée 2 (classes)",
      "description": "Exercice interactif pour calculer les fréquences cumulées croissante et décroissante dans des tableaux de classes avec divers types de questions. 10 essais avec points."
    },
    "en": {
      "name": "Cumulative Frequency 2 (Grouped Data)",
      "description": "Interactive exercise to calculate ascending and descending cumulative frequencies in grouped frequency tables with various question types. 10 attempts with points."
    }
  }
},
{
    "id": "ex-052",
    "section": "الإحصاء",
    "sectionIcon": "📊",
    "name": "المدى 2 (الفئات)",
    "description": "تمرين تفاعلي مبسط لتحديد المدى من جدول فئات خطوة بخطوة. يتناول الفئة الأولى، الفئة الأخيرة، وحساب المدى أو استخراج حد مجهول. موجه لتلاميذ الثامنة أساسي. 10 محاولات مع نقاط.",
    "difficulty": "easy",
    "class": "الثامنة أساسي",
    "cardColor": "#0d9488",
    "cardColorDark": "#2dd4bf",
    "link": "الاحصاء - المدى 2.html",
    "version": "1.0",
    "tags": ["إحصاء", "مدى", "فئات", "جدول", "فئة أولى", "فئة أخيرة", "حد أدنى", "حد أعلى"],
    "mainLanguage": "العربية",
    "availableTranslations": ["العربية", "Français", "English"],
    "author": "فريق الرياضيات",
    "dateAdded": "2026-05-06",
    "estimatedTime": "6-10 دقائق",
    "questionCount": 10,
    "curriculum": "المرحلة الإعدادية",
    "keywords": ["مدى", "فئات", "فئة أولى", "فئة أخيرة", "حد أدنى", "حد أعلى", "إحصاء", "ثامنة أساسي"],
    "thumbnail": "📊",
    "translations": {
        "fr": {
            "name": "Étendue 2 (classes)",
            "description": "Exercice interactif simplifié pour déterminer l’étendue à partir d’un tableau de classes, étape par étape. Comprend la première classe, la dernière classe, et le calcul de l’étendue ou d’une borne manquante. Adapté aux élèves de 8ème année. 10 essais avec points."
        },
        "en": {
            "name": "Range 2 (Grouped Data)",
            "description": "Simplified interactive exercise to find the range from a grouped frequency table step by step. Includes first class, last class, and calculation of the range or a missing bound. Suitable for 8th grade students. 10 attempts with points."
        }
    }
},
{
	"id": "ex-053",
	"section": "الإحصاء",
	"sectionIcon": "📊",
	"name": "التواتر التراكمي 2 (فئات)",
	"description": "تمرين تفاعلي مبسّط جداً لحساب التواتر التراكمي الصاعد والنازل في جداول فئات خطوة بخطوة. 10 محاولات مع نقاط، مناسب للتلاميذ الضعفاء في الثامنة أساسي.",
	"difficulty": "easy",
	"class": "الثامنة أساسي",
	"cardColor": "#0d9488",
	"cardColorDark": "#2dd4bf",
	"link": "الاحصاء - التواتر التراكمي 2.html",
	"version": "1.0",
	"tags": ["إحصاء", "تواتر تراكمي", "صاعد", "نازل", "نسب مئوية", "فئات", "جداول", "CRA", "CRD"],
	"mainLanguage": "العربية",
	"availableTranslations": ["العربية", "Français", "English"],
	"author": "فريق الرياضيات",
	"dateAdded": "2026-05-06",
	"estimatedTime": "8-12 دقائق",
	"questionCount": 10,
	"curriculum": "المرحلة الإعدادية",
	"keywords": ["تواتر تراكمي", "صاعد", "نازل", "نسبة مئوية", "CRA", "CRD", "إحصاء", "ثامنة أساسي", "فئات"],
	"thumbnail": "📊",
	"translations": {
		"fr": {
			"name": "Fréquence cumulée relative 2 (classes)",
			"description": "Exercice interactif très simplifié pour calculer les fréquences relatives cumulées croissante et décroissante dans des tableaux de classes, étape par étape. 10 essais avec points, adapté aux élèves en difficulté de 8ème année."
		},
		"en": {
			"name": "Cumulative Relative Frequency 2 (Grouped Data)",
			"description": "Very simplified interactive exercise to calculate ascending and descending cumulative relative frequencies in class interval tables step by step. 10 attempts with points, suitable for struggling 8th grade students."
		}
	}
},{
    id: 'ex-054',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'المنوال 2 (الفئات)',
    description: 'تمرين تفاعلي مبسط لتحديد الفئة المنوالية واستخراج المنوال في جداول فئات خطوة بخطوة. يتناول أكبر تكرار، المعطيات (L، h، التكرارات)، حساب d₁ و d₂، وتطبيق القانون (Mode = L + [d₁/(d₁+d₂)] × h). موجه لتلاميذ الثامنة أساسي. 10 محاولات مع نقاط.',
    difficulty: 'medium',
    class: 'الثامنة أساسي',
    cardColor: '#8b5cf6',
    cardColorDark: '#a78bfa',
    link: 'الاحصاء - المنوال 2.html',
    version: '1.0',
    tags: ['إحصاء', 'منوال', 'فئات', 'فئة منوالية', 'قانون المنوال', 'd₁', 'd₂', 'تكرار أكبر'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-06',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['منوال', 'فئة منوالية', 'قانون المنوال', 'L + [d₁/(d₁+d₂)] × h', 'd₁', 'd₂', 'تكرار', 'جدول فئات', 'إحصاء', 'ثامنة أساسي'],
    thumbnail: '📊',
    translations: {
        fr: {
            name: 'Mode 2 (classes)',
            description: 'Exercice interactif simplifié pour déterminer la classe modale et calculer le mode dans un tableau de classes, étape par étape. Aborde le plus grand effectif, les données (L, h, effectifs), le calcul de d₁ et d₂, et l\'application de la formule (Mode = L + [d₁/(d₁+d₂)] × h). Adapté aux élèves de 8ème année. 10 essais avec points.'
        },
        en: {
            name: 'Mode 2 (Grouped Data)',
            description: 'Simplified interactive exercise to identify the modal class and compute the mode in grouped frequency tables, step by step. Covers the highest frequency, required data (L, h, frequencies), calculation of d₁ and d₂, and application of the formula (Mode = L + [d₁/(d₁+d₂)] × h). Suitable for 8th grade students. 10 attempts with points.'
        }
    }
},
{
  "id": "ex-055",
  "section": "الإحصاء",
  "sectionIcon": "📊",
  "name": "التواتر (النسبة المئوية)",
  "description": "تمرين تفاعلي مبسط جداً لحساب التواتر (fᵢ%) من التكرارات والعكس، مع ثلاثة أنماط متنوعة: حساب التواترات، استنتاج التكرارات، والمعلومات الناقصة. خطوات مفصلة ومرحلية تناسب التلاميذ الضعفاء في الثامنة أساسي. 10 محاولات مع نقاط.",
  "difficulty": "easy",
  "class": "الثامنة أساسي",
  "cardColor": "#0284c7",
  "cardColorDark": "#38bdf8",
  "link": "الاحصاء - التواتر.html",
  "version": "1.0",
  "tags": ["إحصاء", "تواتر", "نسبة مئوية", "تكرار", "fᵢ%", "جداول", "فئات", "استنتاج", "ثامنة أساسي"],
  "mainLanguage": "العربية",
  "availableTranslations": ["العربية", "Français", "English"],
  "author": "فريق الرياضيات",
  "dateAdded": "2026-05-06",
  "estimatedTime": "6-10 دقائق",
  "questionCount": 10,
  "curriculum": "المرحلة الإعدادية",
  "keywords": ["تواتر", "fᵢ%", "تكرار", "نسبة مئوية", "إحصاء", "جدول", "فئات", "قانون التواتر", "ثامنة أساسي"],
  "thumbnail": "📊",
  "translations": {
    "fr": {
      "name": "Fréquence relative (pourcentage)",
      "description": "Exercice interactif très simplifié pour calculer la fréquence relative (fᵢ%) à partir des effectifs et inversement, avec trois modes variés. Étapes détaillées et progressives, adapté aux élèves en difficulté de 8ème année. 10 essais avec points."
    },
    "en": {
      "name": "Relative Frequency (Percentage)",
      "description": "Very simplified interactive exercise to calculate relative frequency (fᵢ%) from frequencies and vice versa, with three varied modes. Detailed step‑by‑step guidance, suitable for struggling 8th‑grade students. 10 attempts with points."
    }
  }
},
{
    id: 'ex-056',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'مركز الفئة',
    description: 'تمرين تفاعلي مبسط لحساب مركز فئة من جدول فئات خطوة بخطوة مع تنويع الأسئلة. موجه لتلاميذ الثامنة أساسي. 10 محاولات مع نقاط.',
    difficulty: 'easy',
    class: 'الثامنة أساسي',
    cardColor: '#0d9488',
    cardColorDark: '#2dd4bf',
    link: 'الاحصاء - مركز الفئة.html',
    version: '1.0',
    tags: ['إحصاء', 'مركز الفئة', 'فئات', 'حدود', 'منوال', 'قانون المركز'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-06',
    estimatedTime: '8-12 دقائق',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['مركز الفئة', 'حد أدنى', 'حد أعلى', 'قانون المركز', 'فئة منوالية', 'إحصاء', 'ثامنة أساسي'],
    thumbnail: '🎯',
    translations: {
        fr: {
            name: 'Centre de classe',
            description: 'Exercice interactif simplifié pour calculer le centre d’une classe à partir d’un tableau de classes, avec différents types de questions. Adapté aux élèves de 8ème année. 10 essais avec points.'
        },
        en: {
            name: 'Class Midpoint',
            description: 'Simplified interactive exercise to calculate the midpoint of a class from a grouped frequency table, with varied question types. Suitable for 8th grade students. 10 attempts with points.'
        }
    }
},
{
    "id": "ex-057",
    "section": "الإحصاء",
    "sectionIcon": "📊",
    "name": "المعدل (المتوسط الحسابي) – جداول وفئات",
    "description": "تمرين تفاعلي مبسط جداً لحساب المعدل (المتوسط الحسابي) من جدول تكرارات عادي وجدول فئات، خطوة بخطوة. يتناول حساب المركز، الجداءات، المجاميع، والتكرار الجملي. 10 محاولات مع نقاط، مناسب للتلاميذ الضعفاء في الثامنة أساسي.",
    "difficulty": "easy",
    "class": "الثامنة أساسي",
    "cardColor": "#7c3aed",
    "cardColorDark": "#a78bfa",
    "link": "الاحصاء - المعدل.html",
    "version": "1.0",
    "tags": ["إحصاء", "معدل", "متوسط", "فئات", "مركز الفئة", "جدول تكرارات", "ثامنة أساسي"],
    "mainLanguage": "العربية",
    "availableTranslations": ["العربية", "Français", "English"],
    "author": "فريق الرياضيات",
    "dateAdded": "2026-05-06",
    "estimatedTime": "8-12 دقيقة",
    "questionCount": 10,
    "curriculum": "المرحلة الإعدادية",
    "keywords": ["معدل", "متوسط حسابي", "مركز فئة", "جدول تكرارات", "تكرار جملي", "جداء", "إحصاء", "ثامنة أساسي"],
    "thumbnail": "📊",
    "translations": {
        "fr": {
            "name": "La moyenne (moyenne arithmétique) – tableaux simples et groupés",
            "description": "Exercice interactif très simplifié pour calculer la moyenne à partir d’un tableau d’effectifs simple et d’un tableau de classes, étape par étape. Comprend le centre, les produits, les sommes et l’effectif total. 10 essais avec points, adapté aux élèves en difficulté de 8ème année."
        },
        "en": {
            "name": "Mean (Arithmetic Average) – Simple and Grouped Tables",
            "description": "Very simplified interactive exercise to calculate the mean from a simple frequency table and a grouped frequency table, step by step. Covers midpoint, products, sums, and total frequency. 10 attempts with points, suitable for struggling 8th grade students."
        }
    }
},
{
    id: 'ex-058',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'الاحتمال 2 (فئات عددية)',
    description: 'تمرين تفاعلي مبسط لحساب الاحتمال من جدول فئات خطوة بخطوة. يشمل حساب احتمال فئة، احتمال متمم، واحتمال اتحاد فئتين. 10 محاولات مع نقاط.',
    difficulty: 'medium',
    class: 'التاسعة أساسي',
    cardColor: '#0ea5e9',
    cardColorDark: '#38bdf8',
    link: 'الاحصاء - الاحتمال 2.html',
    version: '1.0',
    tags: ['إحصاء', 'احتمال', 'فئات', 'تكرار', 'نسبة مئوية', 'جدول', 'اتحاد', 'متمم'],
    mainLanguage: 'العربية',
    availableTranslations: ['العربية', 'Français', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-06',
    estimatedTime: '8-12 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الإعدادية',
    keywords: ['احتمال', 'فئات', 'تكرار', 'نسبة مئوية', 'جدول', 'اتحاد', 'متمم', 'إحصاء', 'قانون الاحتمال'],
    thumbnail: '🎲',
    translations: {
        fr: {
            name: 'Probabilité 2 (classes)',
            description: 'Exercice interactif simplifié pour calculer une probabilité à partir d\'un tableau de classes, étape par étape. Inclut probabilité simple, événement complémentaire et union de deux classes. 10 essais avec points.'
        },
        en: {
            name: 'Probability 2 (Class Intervals)',
            description: 'Simplified interactive exercise to calculate probability from a grouped frequency table step by step. Covers single probability, complementary event, and union of two classes. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-059',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'Variance',
    description: 'Exercice interactif très simplifié pour calculer la variance à partir d’un tableau d’effectifs, étape par étape. Comprend le calcul de la moyenne, les écarts, leurs carrés, la multiplication par les effectifs, et la somme/division finale. 10 essais avec points.',
    difficulty: 'hard',
    class: '2ème année secondaire',
    cardColor: '#be123c',
    cardColorDark: '#fb7185',
    link: 'الاحصاء - التباين.html',
    version: '1.0',
    tags: ['Statistiques', 'Variance', 'écart', 'carré', 'moyenne', 'effectifs', 'tableau'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-12',
    estimatedTime: '10-15 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['variance', 'écart', 'moyenne', 'carré', 'effectif', 'tableau statistique', 'formule de la variance', '2ème secondaire'],
    thumbnail: '📊',
    translations: {
        ar: {
            name: 'التباين',
            description: 'تمرين تفاعلي مبسط جداً لحساب التباين من جدول التكرارات خطوة بخطوة. يشمل حساب المعدل، الانحرافات، التربيع، الضرب في التكرارات، والجمع والقسمة النهائية. 10 محاولات مع نقاط.'
        },
        en: {
            name: 'Variance',
            description: 'Very simplified interactive exercise to calculate variance from a frequency table step by step. Includes mean calculation, deviations, squaring, multiplying by frequencies, and final summation/division. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-060',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'Variance 2 (classes)',
    description: 'Exercice interactif très simplifié pour calculer la variance à partir d\'un tableau de classes, étape par étape. Comprend le calcul des centres, la moyenne, les écarts, leurs carrés, la multiplication par les effectifs et la division finale. Deux modes : centres donnés ou à trouver. 10 essais avec points.',
    difficulty: 'hard',
    class: '2ème année secondaire',
    cardColor: '#be123c',
    cardColorDark: '#fb7185',
    link: 'الاحصاء - التباين 2.html',
    version: '1.0',
    tags: ['Statistiques', 'Variance', 'classes', 'centre de classe', 'écart', 'carré', 'moyenne', 'effectifs', 'tableau', '2ème secondaire'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-12',
    estimatedTime: '12-18 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['variance', 'classes', 'centre de classe', 'écart', 'moyenne', 'carré', 'effectif', 'tableau statistique', 'formule de la variance', '2ème secondaire'],
    thumbnail: '📊',
    translations: {
        ar: {
            name: 'التباين 2 (فئات)',
            description: 'تمرين تفاعلي مبسط جداً لحساب التباين من جدول فئات إحصائية خطوة بخطوة. يتناول حساب مراكز الفئات، المعدل، الانحرافات، التربيع، الضرب في التكرارات، والجمع والقسمة النهائية. نمطان: مراكز معطاة أو استخراج المراكز أولاً. 10 محاولات مع نقاط.'
        },
        en: {
            name: 'Variance 2 (Grouped Data)',
            description: 'Very simplified interactive exercise to calculate variance from a grouped frequency table step by step. Covers class midpoints, mean, deviations, squaring, multiplying by frequencies, and final summation/division. Two modes: given midpoints or find them first. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-061',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'Écart-type',
    description: 'Exercice interactif très simplifié pour calculer l\'écart-type à partir d\'un tableau d\'effectifs, étape par étape. Couvre la moyenne, les écarts, les carrés, la multiplication par les effectifs, la variance puis la racine carrée. Quatre modes variés, adapté aux élèves de 2ème année secondaire. 10 essais avec points.',
    difficulty: 'hard',
    class: '2ème année secondaire',
    cardColor: '#db2777',
    cardColorDark: '#f472b6',
    link: 'الاحصاء - الانحراف المعياري.html',
    version: '1.0',
    tags: ['Statistiques', 'Écart-type', 'Variance', 'racine carrée', 'σ', 'sigma', 'effectifs', 'tableau', 'étapes', '2ème secondaire'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-12',
    estimatedTime: '10-15 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['écart-type', 'σ', 'variance', 'racine', 'moyenne', 'écarts', 'carré', 'effectif', 'formule de l\'écart-type', '2ème secondaire'],
    thumbnail: '📊',
    translations: {
        ar: {
            name: 'الانحراف المعياري',
            description: 'تمرين تفاعلي مبسط جداً لحساب الانحراف المعياري من جدول التكرارات خطوة بخطوة. يغطي حساب المعدل، الانحرافات، التربيع، الضرب في التكرارات، التباين، ثم الجذر التربيعي للوصول إلى σ. أربعة أنماط متنوعة، مع إرشادات مفصلة، مناسب لتلاميذ الثانية ثانوي. 10 محاولات مع نقاط.'
        },
        en: {
            name: 'Standard Deviation',
            description: 'Very simplified interactive exercise to calculate the standard deviation from a frequency table step by step. Covers mean, deviations, squaring, multiplying by frequencies, variance, then square root to obtain σ. Four varied modes, suitable for 2nd year secondary students. 10 attempts with points.'
        }
    }
},
{
    id: 'ex-062',
    section: 'الإحصاء',
    sectionIcon: '📊',
    name: 'Écart-type 2 (classes)',
    description: 'Exercice interactif très simplifié pour calculer l\'écart-type à partir d\'un tableau de classes, étape par étape. Couvre le calcul des centres, la moyenne, les écarts, les carrés, la multiplication par les effectifs, la variance puis la racine carrée. Deux modes : centres donnés ou à trouver, avec questions variées, adapté aux élèves de 2ème année secondaire. 10 essais avec points.',
    difficulty: 'hard',
    class: '2ème année secondaire',
    cardColor: '#c026d3',
    cardColorDark: '#e879f9',
    link: 'الاحصاء - الانحراف المعياري 2.html',
    version: '1.0',
    tags: ['Statistiques', 'Écart-type', 'classes', 'centre de classe', 'σ', 'sigma', 'racine carrée', 'effectifs', 'tableau', 'étapes', '2ème secondaire'],
    mainLanguage: 'Français',
    availableTranslations: ['Français', 'العربية', 'English'],
    author: 'فريق الرياضيات',
    dateAdded: '2026-05-12',
    estimatedTime: '12-18 دقيقة',
    questionCount: 10,
    curriculum: 'المرحلة الثانوية',
    keywords: ['écart-type', 'σ', 'variance', 'classes', 'centre de classe', 'écarts', 'carré', 'effectif', 'racine', 'formule de l\'écart-type', '2ème secondaire'],
    thumbnail: '📊',
    translations: {
        ar: {
            name: 'الانحراف المعياري 2 (فئات)',
            description: 'تمرين تفاعلي مبسط جداً لحساب الانحراف المعياري من جدول فئات إحصائية خطوة بخطوة. يغطي حساب مراكز الفئات، المعدل، الانحرافات، التربيع، الضرب في التكرارات، التباين، ثم الجذر التربيعي للوصول إلى σ. نمطان: مراكز معطاة أو استخراج المراكز أولاً، مع تنويع الأسئلة، مناسب لتلاميذ الثانية ثانوي. 10 محاولات مع نقاط.'
        },
        en: {
            name: 'Standard Deviation 2 (Grouped Data)',
            description: 'Very simplified interactive exercise to calculate the standard deviation from a grouped frequency table step by step. Covers class midpoints, mean, deviations, squaring, multiplying by frequencies, variance, then square root to obtain σ. Two modes: given midpoints or find them first, with varied questions, suitable for 2nd year secondary students. 10 attempts with points.'
        }
    }
}
];

// ══════════ جداول ترجمة الأقسام والصفوف ══════════
const sectionTranslations = {
	ar: {
		'الزوايا': 'الزوايا',
		'تقايس المثلثات': 'تقايس المثلثات',
		'التوازي': 'التوازي',
		'الإحصاء': 'الإحصاء',
		'Équations': 'المعادلات',
		'رباعيات الأضلاع': 'رباعيات الأضلاع',
        'الأحجام': 'الأحجام',
        'الجبر': 'الجبر',
        'المتراجحات': 'المتراجحات'
	},
	fr: {
		'الزوايا': 'Les angles',
		'تقايس المثلثات': 'Triangles isométriques',
		'التوازي': 'Parallélisme',
		'الإحصاء': 'Statistiques',
		'Équations': 'Équations',
		'رباعيات الأضلاع': 'Quadrilatères',
        'الأحجام': 'Volumes',
        'الجبر': 'Algèbre',
        'المتراجحات': 'Inéquations'
	},
	en: {
		'الزوايا': 'Angles',
		'تقايس المثلثات': 'Triangle Congruence',
		'التوازي': 'Parallel Lines',
		'الإحصاء': 'Statistics',
		'Équations': 'Equations',
		'رباعيات الأضلاع': 'Quadrilaterals',
        'الأحجام': 'Volumes',
        'الجبر': 'Algebra',
        'المتراجحات': 'Inequalities'
	}
};

const classTranslations = {
    ar: {
        'السابعة أساسي': 'السابعة أساسي',
        'الثامنة أساسي': 'الثامنة أساسي',
        'التاسعة أساسي': 'التاسعة أساسي',
        '1ère année secondaire': 'الأولى ثانوي',
        '2ème année secondaire': 'الثانية ثانوي'
    },
    fr: {
        'السابعة أساسي': '7ème année',
        'الثامنة أساسي': '8ème année',
        'التاسعة أساسي': '9ème année',
        '1ère année secondaire': '1ère année secondaire',
        '2ème année secondaire': '2ème année secondaire'
    },
    en: {
        'السابعة أساسي': '7th Grade',
        'الثامنة أساسي': '8th Grade',
        'التاسعة أساسي': '9th Grade',
        '1ère année secondaire': 'First Year Secondary',
        '2ème année secondaire': 'Second Year Secondary'
    }
};

// تصدير للمتصفح
if (typeof window !== 'undefined') {
	window.exercises = exercises;
	window.sectionTranslations = sectionTranslations;
	window.classTranslations = classTranslations;
}