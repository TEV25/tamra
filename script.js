// ========================================
// قائمة المنتجات الكاملة
// 12 وجبة + 8 حلويات + 6 خدمات = 26 منتج
// ========================================
const products = [
    // ========== الوجبات الشعبية (12 وجبة) ==========
    { 
        id: 1, 
        name: "الجريش الملكي", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop"
        ],
        description: "✨ الجريش الملكي أكلة سعودية أصيلة تطبخ على الطريقة النجدية القديمة في القدر الفخاري لمدة طويلة حتى يصبح طرياً ولذيذاً. يقدم مع السمن البلدي والبصل المحمر.",
        ingredients: "🥘 المكونات: 4 كيلو جريش ناعم + 2 كيلو عريكه + دبس تمر طبيعي + سمن بلدي فاخر + لحم ضأن طازج + مكسرات محمصة للتزيين + بصل محمر"
    },
    { 
        id: 2, 
        name: "الكبسة الحساوية", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"
        ],
        description: "✨ الكبسة الحساوية أشهر الأكلات السعودية على مستوى الخليج، تطبخ بالأرز البسمتي والبهارات المشكلة والدجاج الطازج. تقدم مع الصلصة الحارة والسلطة.",
        ingredients: "🥘 المكونات: دجاجة كاملة طازجة + أرز بسمتي هندي + مكسرات متنوعة (لوز - كاجو - صنوبر) + زبيب + بهارات كبسة خاصة + لوز للتزيين + صوص حار"
    },
    { 
        id: 3, 
        name: "المندي الحضرمي", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop"
        ],
        description: "✨ المندي الحضرمي الأصيل، لحم ضأن مندي على الفحم بطريقة حضرمية تقليدية. ينضج اللحم في تنور الطين مع الأرز والتوابل العطرية.",
        ingredients: "🥘 المكونات: ضأن كامل (حوالي 10 كيلو) + أرز مندي خاص + فحم للتبخير + صلصة حارة يمنية + سلطة فرط + لبن زبادي + توابل خاصة"
    },
    { 
        id: 4, 
        name: "المضغوط الحجازي", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"
        ],
        description: "✨ المضغوط الحجازي أكلة تهامة الشهيرة، تطبخ بالأرز المصري واللحم والتوابل الحجازية العطرية. سميت بالمضغوط لطهيها في قدر محكم الغلق.",
        ingredients: "🥘 المكونات: لحم غنم طازج + أرز مصري فاخر + هيل مطحون + قرفة صينية + كزبرة خضراء + لومي أسود + زبدة بلدي"
    },
    { 
        id: 5, 
        name: "العصيدة النجدية", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"
        ],
        description: "✨ العصيدة النجدية أكلة شعبية تراثية تصنع من دقيق القمح والسمن البلدي والعسل. تقدم في المناسبات والأعياد.",
        ingredients: "🥘 المكونات: دقيق قمح كامل + سمن بلدي + عسل سدر طبيعي + سكر + ماء ورد + هيل مطحون"
    },
    { 
        id: 6, 
        name: "المرقوق", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"
        ],
        description: "✨ المرقوق أكلة شعبية من منطقة نجد، عبارة عن عجين يرق رقاً خفيفاً ويقطع ويطبخ مع اللحم والخضار.",
        ingredients: "🥘 المكونات: دقيق + لحم ضأن + جزر + كوسا + بطاطس + بصل + طماطم + بهارات مشكلة"
    },
    { 
        id: 7, 
        name: "القرصان", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"
        ],
        description: "✨ القرصان أكلة شعبية سعودية تصنع من العجين المفروك واللبن الرائب واللحم المفروم.",
        ingredients: "🥘 المكونات: دقيق قمح + لبن رائب + لحم مفروم + بصل + بهارات + سمن"
    },
    { 
        id: 8, 
        name: "الثريد", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"
        ],
        description: "✨ الثريد أكلة عربية أصيلة ذكرت في الأحاديث النبوية، عبارة عن خبز مفروك بلحم الضأن والخضار.",
        ingredients: "🥘 المكونات: خبز بر طازج + لحم ضأن + مرق لحم + بصل + جزر + كوسا + بهارات"
    },
    { 
        id: 9, 
        name: "الحنيذ", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"
        ],
        description: "✨ الحنيذ اليمني الشهير، لحم ضأن يطهى في تنور الطين لمدة طويلة مع التوابل حتى يصبح طرياً جداً.",
        ingredients: "🥘 المكونات: ضأن كامل + بهارات حنيذ خاصة + زبدة + ثوم + زنجبيل + كركم"
    },
    { 
        id: 10, 
        name: "الصيادية", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"
        ],
        description: "✨ الصيادية أكلة ساحلية تتكون من السمك والأرز والبصل المحمر والصنوبر.",
        ingredients: "🥘 المكونات: سمك فيلية طازج + أرز بسمتي + بصل كثير + صنوبر + كزبرة + ليمون"
    },
    { 
        id: 11, 
        name: "كبسة العروق", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"
        ],
        description: "✨ كبسة العروق أكلة بدوية فاخرة تطبخ في قدور كبيرة في المناسبات والأعياد.",
        ingredients: "🥘 المكونات: لبعان (جمل صغير) + أرز كبسة + مكسرات + تمر + حليب + بهارات بدوية"
    },
    { 
        id: 12, 
        name: "المنسف الأردني", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"
        ],
        description: "✨ المنسف الأردني أكلة عربية أصيلة تصنع من لحم الضأن واللبن الجميد والأرز واللوز.",
        ingredients: "🥘 المكونات: لحم ضأن + جميد (لبن مجفف) + أرز بسمتي + لوز + صنوبر + خبز شراك"
    },

    // ========== الحلويات (8 حلويات) ==========
    { 
        id: 13, 
        name: "الكنافة النابلسية", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ الكنافة النابلسية الأصلية، كنافة ناعمة بالجبنة العربية وبحشوة القشطة الطازجة، تقدم مع القطر والفستق الحلبي.",
        ingredients: "🥘 المكونات: جبنة عكاوي + قشطة بلدي + فستق حلبي + قطر ثقيل + ماء ورد + زبدة"
    },
    { 
        id: 14, 
        name: "اللقيمات العسليه", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ اللقيمات العسلية الذهبية المقرمشة من الخارج والهشة من الداخل، مغموسة بالعسل الطبيعي ومزينة بالسمسم والفستق.",
        ingredients: "🥘 المكونات: دقيق أبيض + خميرة فورية + حليب طازج + عسل سدر طبيعي + سمسم محمص + فستق مطحون"
    },
    { 
        id: 15, 
        name: "أم علي", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ حلى أم علي المصري الأصيل، طبقات من العجينة المحمصة مع الحليب والفواكه المجففة والمكسرات.",
        ingredients: "🥘 المكونات: عجينة فيلو + حليب مكثف محلى + فستق + جوز + زبيب + لوز + جوز هند + قرفة"
    },
    { 
        id: 16, 
        name: "المعمول بالتمر", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"
        ],
        description: "✨ معمول ناعم محشو بالتمر الفاخر، يقدم في الأعياد والمناسبات مع القهوة العربية.",
        ingredients: "🥘 المكونات: سميد ناعم + سمن بلدي + تمر مجدول + هيل مطحون + ماء ورد + سكر بودرة"
    },
    { 
        id: 17, 
        name: "بلح الشام", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ بلح الشام المقرمش المحشو بالكريمة أو القشطة، مغطى بالقطر الثقيل والفستق.",
        ingredients: "🥘 المكونات: دقيق + ماء + زبدة + بيض + كريمة باتيسيير + فستق حلبي + قطر"
    },
    { 
        id: 18, 
        name: "الزلابية", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"
        ],
        description: "✨ الزلابية (العوامة) المصرية المقرمشة، تقدم مغموسة بالعسل أو القطر ومزينة بالسمسم.",
        ingredients: "🥘 المكونات: دقيق + زبادي + بيكنج بودر + عسل نحل + سمسم + قرفة"
    },
    { 
        id: 19, 
        name: "المهلبية", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ المهلبية اللبنانية الناعمة، حلوى باردة كريمية بنكهة ماء الورد والفستق والورد.",
        ingredients: "🥘 المكونات: حليب طازج + نشا + سكر + ماء ورد + فستق مجروش + ورد مجفف"
    },
    { 
        id: 20, 
        name: "حلاوة الجبن", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"
        ],
        description: "✨ حلاوة الجبن الشامية، خيوط الجبن الحلو مع الفستق والقطر، تقدم مع القهوة العربية.",
        ingredients: "🥘 المكونات: جبنة موزاريلا حلوة + سميد + فستق حلبي + قطر + ماء ورد + زبدة"
    },

    // ========== الخدمات (6 خدمات) ==========
    { 
        id: 21, 
        name: "✨ الخيمة الفضية الفاخرة ✨", 
        type: "service", 
        category: "خدمات الولائم",
        mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"
        ],
        description: "🎪 الخيمة الفضية - تجربة فاخرة للمناسبات الكبرى والأعراس. خيمة ملكية بتصميم فريد وإضاءة فضية ساحرة.",
        ingredients: "✨ تشمل الخدمة: خيمة فاخرة تتسع لـ 300 شخص + ديكورات فضية وإضاءة ليد + بوفيه مفتوح من أشهى المأكولات + فريق خدمة مدرب بالكامل + مشروبات ترحيبية وقهوة عربية + مكيفات مركزية + مسرح صوتيات + شاشات عرض عملاقة"
    },
    { 
        id: 22, 
        name: "خدمة الضيافة الملكية", 
        type: "service", 
        category: "خدمات الضيافة",
        mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop"
        ],
        description: "☕ خدمة الضيافة الملكية - نقدم لكم أرقى خدمات الضيافة في المناسبات والاجتماعات.",
        ingredients: "✨ تشمل الخدمة: قهوة عربية بالهيل والزعفران + تمر فاخر (مجدول - سكري) + مكسرات مشكلة (كاجو - لوز - فستق) + حلويات شرقية (معمول - كنافة - لقيمات) + كب كيك وكعك + عصائر طازجة طبيعية + فريق تقديم بملابس رسمية + أدوات ضيافة فضية"
    },
    { 
        id: 23, 
        name: "بوفيه مفتوح", 
        type: "service", 
        category: "خدمات الولائم",
        mainImage: "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop"
        ],
        description: "🍽️ بوفيه مفتوح فاخر يناسب جميع الأذواق، مثالي للمناسبات الكبيرة.",
        ingredients: "✨ تشمل الخدمة: أكثر من 20 صنفاً من المأكولات العالمية والعربية + مشاوي طازجة + سلطات متنوعة + مقبلات + شوربات + أرز بجميع أنواعه + لحوم وأسماك + خضار سوتيه + حلويات شرقية وغربية + فواكه طازجة"
    },
    { 
        id: 24, 
        name: "تنظيم مناسبات", 
        type: "service", 
        category: "خدمات المناسبات",
        mainImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop"
        ],
        description: "🎉 خدمات تنظيم المناسبات بكافة أنواعها (أعراس - حفلات - اجتماعات - مؤتمرات).",
        ingredients: "✨ تشمل الخدمة: تخطيط وتنسيق المناسبة + ديكورات حسب الطلب + إضاءة مهنية + كوشة أعراس + بوفيه + موسيقى هادئة + تصوير فوتوغرافي وفيديو + دعوات إلكترونية + هدايا تذكارية + استقبال ضيوف"
    },
    { 
        id: 25, 
        name: "وايت طعام متنقل", 
        type: "service", 
        category: "خدمات الطعام",
        mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"
        ],
        description: "🚐 خدمة وايت طعام متنقل يجوب جميع أنحاء المنطقة، لتقديم أشهى المأكولات في المناسبات البرية.",
        ingredients: "✨ تشمل الخدمة: وايت مجهز بالكامل + طاهٍ محترف + قائمة طعام حسب الطلب (كبسة - جريش - مندي - مشاوي) + قهوة وتمور + فريق خدمة + أواني طهي فخارية + توصيل مجاني"
    },
    { 
        id: 26, 
        name: "مأدبة عشاء فاخرة", 
        type: "service", 
        category: "خدمات الولائم",
        mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop"
        ],
        description: "🍲 مأدبة عشاء فاخرة على الطريقة العربية الأصيلة، مثالية للوفود والضيوف المميزين.",
        ingredients: "✨ تشمل المأدبة: منسف عربي على السفرة + كبسة ضأن + جريش + مندي + مشاوي مشكلة (لحم - دجاج) + أرز بأنواعه + سلطات ومقبلات متنوعة + حلويات شرقية وغربية + فواكه موسمية + قهوة وتمر"
    }
];

// ========================================
// السلة (تخزين مؤقت للواتساب)
// ========================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========================================
// عرض المنتجات حسب النوع
// ========================================
function displayProductsByType(type) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    
    const filtered = products.filter(p => p.type === type);
    
    grid.innerHTML = "";
    
    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            <img class="product-image" src="${product.mainImage}" alt="${product.name}" onclick="showDetails(${product.id})">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-category">${product.category}</div>
            <div class="product-price">💰 حسب الطلب - واتساب</div>
            <button class="btn-details" onclick="showDetails(${product.id})">📖 تفاصيل أكثر</button>
            <input type="number" class="product-quantity" id="qty_${product.id}" value="1" min="1" max="50">
            <button class="btn-add" onclick="addToCartAndSend(${product.id})">➕ أضف واطلب عبر واتساب</button>
        `;
        grid.appendChild(card);
    });
    
    updateCartSummary();
}

// ========================================
// إضافة للسلة وإرسال واتساب مباشر
// ========================================
function addToCartAndSend(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const qtyInput = document.getElementById(`qty_${productId}`);
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty < 1) qty = 1;
    if (qty > 50) qty = 50;
    
    // بناء رسالة الواتساب
    let message = "🌴 *مرحباً! أريد طلب من مطبخ نخلة وتمرة* 🌴\n\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "*📋 طلبي:*\n\n";
    message += `• ${product.name} × ${qty}\n\n`;
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "*💎 ملاحظة:* المنتج حسب الطلب\n";
    message += "يرجى التواصل لتحديد السعر والتفاصيل\n\n";
    message += "*👤 معلومات التوصيل:*\n";
    message += "الاسم: \n";
    message += "العنوان: \n";
    message += "رقم الجوال: \n\n";
    message += "※ ※ ※ ※ ※ ※ ※ ※ ※ ※\n";
    message += "_تم الطلب عبر متجر نخلة وتمرة_";
    
    const phoneNumber = "966500000000";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}

// ========================================
// إضافة عدة منتجات للسلة (للاستخدام المستقبلي)
// ========================================
function addToCartMultiple(productId, productName, productType) {
    const qtyInput = document.getElementById(`qty_${productId}`);
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty < 1) qty = 1;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            id: productId,
            name: productName,
            qty: qty,
            type: productType
        });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartSummary();
}

// ========================================
// عرض التفاصيل في نافذة منبثقة
// ========================================
function showDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById("detailsModal");
    const modalDetails = document.getElementById("modalDetails");
    
    let galleryHtml = `
        <img class="main-image" id="mainModalImage" src="${product.mainImage}" alt="${product.name}">
        <div class="image-gallery">
    `;
    
    product.images.forEach((img, index) => {
        galleryHtml += `<img class="gallery-img" src="${img}" alt="صورة ${index+1}" onclick="changeMainImage('${img}')">`;
    });
    galleryHtml += `</div>`;
    
    modalDetails.innerHTML = `
        ${galleryHtml}
        <h2 style="color: #2e7d32; font-size: 1.8em;">${product.name}</h2>
        <div class="product-price" style="font-size: 1.2em; display: inline-block;">💰 حسب الطلب - يرجى التواصل</div>
        <div class="details-description">
            <strong style="font-size: 1.1em;">📝 الوصف:</strong><br>
            ${product.description}
        </div>
        <div class="details-ingredients">
            <strong style="font-size: 1.1em;">🥘 المكونات والتفاصيل:</strong><br>
            ${product.ingredients}
        </div>
        <div style="display: flex; gap: 12px; margin-top: 25px; flex-wrap: wrap;">
            <input type="number" id="modal_qty" value="1" min="1" max="50" style="padding: 12px; width: 100px; border-radius: 12px; border: 2px solid #e0e0e0; font-size: 1em;">
            <button onclick="addToCartFromModal(${product.id})" class="btn-add" style="flex: 1; padding: 12px;">➕ أضف واطلب عبر واتساب</button>
        </div>
    `;
    
    modal.style.display = "block";
}

// ========================================
// إضافة من المودال
// ========================================
function addToCartFromModal(productId) {
    const qtyInput = document.getElementById("modal_qty");
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty < 1) qty = 1;
    
    const product = products.find(p => p.id === productId);
    
    let message = "🌴 *مرحباً! أريد طلب من مطبخ نخلة وتمرة* 🌴\n\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "*📋 طلبي:*\n\n";
    message += `• ${product.name} × ${qty}\n\n`;
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "*💎 ملاحظة:* المنتج حسب الطلب\n";
    message += "يرجى التواصل لتحديد السعر والتفاصيل\n\n";
    message += "*👤 معلومات التوصيل:*\n";
    message += "الاسم: \n";
    message += "العنوان: \n";
    message += "رقم الجوال: \n\n";
    message += "※ ※ ※ ※ ※ ※ ※ ※ ※ ※\n";
    message += "_تم الطلب عبر متجر نخلة وتمرة_";
    
    const phoneNumber = "966500000000";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
    closeModal();
}

// ========================================
// تغيير الصورة الرئيسية
// ========================================
function changeMainImage(imgSrc) {
    const mainImage = document.getElementById("mainModalImage");
    if (mainImage) {
        mainImage.src = imgSrc;
    }
}

// ========================================
// إغلاق المودال
// ========================================
function closeModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// ========================================
// إرسال الطلب (للسلة)
// ========================================
function sendOrder() {
    if (cart.length === 0) {
        alert("⚠️ الرجاء إضافة منتجات إلى السلة أولاً");
        return;
    }
    
    let message = "🌴 *مرحباً! أريد طلب من مطبخ نخلة وتمرة* 🌴\n\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "*📋 طلبي:*\n\n";
    
    cart.forEach(item => {
        message += `• ${item.name} × ${item.qty}\n`;
    });
    
    message += "\n━━━━━━━━━━━━━━━━━━\n";
    message += "*💎 ملاحظة:* جميع المنتجات والخدمات حسب الطلب\n";
    message += "يرجى التواصل لتحديد السعر والتفاصيل\n\n";
    message += "*👤 معلومات التوصيل:*\n";
    message += "الاسم: \n";
    message += "العنوان: \n";
    message += "رقم الجوال: \n\n";
    message += "※ ※ ※ ※ ※ ※ ※ ※ ※ ※\n";
    message += "_تم الطلب عبر متجر نخلة وتمرة_";
    
    const phoneNumber = "966532743474";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}

// ========================================
// تحديث ملخص السلة
// ========================================
function updateCartSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCountNav = document.getElementById("cartCountNav");
    if (cartCountNav) {
        cartCountNav.innerHTML = totalItems;
    }
}

// ========================================
// إغلاق المودال عند النقر خارجها
// ========================================
window.onclick = function(event) {
    const modal = document.getElementById("detailsModal");
    if (event.target === modal) {
        closeModal();
    }
}

// ========================================
// بدء التشغيل
// ========================================
updateCartSummary();
