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
        'الأحجام': 'الأحجام'   
	},
	fr: {
		'الزوايا': 'Les angles',
		'تقايس المثلثات': 'Triangles isométriques',
		'التوازي': 'Parallélisme',
		'الإحصاء': 'Statistiques',
		'Équations': 'Équations',
		'رباعيات الأضلاع': 'Quadrilatères',
        'الأحجام': 'Volumes'   
	},
	en: {
		'الزوايا': 'Angles',
		'تقايس المثلثات': 'Triangle Congruence',
		'التوازي': 'Parallel Lines',
		'الإحصاء': 'Statistics',
		'Équations': 'Equations',
		'رباعيات الأضلاع': 'Quadrilaterals',
        'الأحجام': 'Volumes'   
	}
};

const classTranslations = {
	ar: {
		'السابعة أساسي': 'السابعة أساسي',
		'الثامنة أساسي': 'الثامنة أساسي',
		'1ère année secondaire': 'الأولى ثانوي' // ← إضافة ترجمة الصف الجديد
	},
	fr: {
		'السابعة أساسي': '7ème année',
		'الثامنة أساسي': '8ème année',
		'1ère année secondaire': '1ère année secondaire' // ← مطابق للأصل
	},
	en: {
		'السابعة أساسي': '7th Grade',
		'الثامنة أساسي': '8th Grade',
		'1ère année secondaire': '10th Grade / First Year Secondary' // ← إضافة
	}
};

// تصدير للمتصفح
if (typeof window !== 'undefined') {
	window.exercises = exercises;
	window.sectionTranslations = sectionTranslations;
	window.classTranslations = classTranslations;
}