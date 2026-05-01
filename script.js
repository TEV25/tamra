// رقم الواتساب
const WHATSAPP_NUMBER = "966532743474";

// السلة
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========================================
// قائمة المنتجات الكاملة (12 وجبة + 8 حلويات + 6 خدمات)
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
        description: "✨ الجريش الملكي أكلة سعودية أصيلة تطبخ على الطريقة النجدية القديمة في القدر الفخاري لمدة طويلة حتى يصبح طرياً ولذيذاً. يقدم مع السمن البلدي والبصل المحمر والمكسرات.",
        ingredients: "🥘 المكونات: 4 كيلو جريش ناعم + 2 كيلو عريكه + دبس تمر طبيعي + سمن بلدي فاخر + لحم ضأن طازج + مكسرات محمصة للتزيين + بصل محمر + هيل مطحون"
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
        description: "✨ الكبسة الحساوية أشهر الأكلات السعودية على مستوى الخليج، تطبخ بالأرز البسمتي والبهارات المشكلة والدجاج الطازج. تقدم مع الصلصة الحارة والسلطة الخضراء.",
        ingredients: "🥘 المكونات: دجاجة كاملة طازجة + أرز بسمتي هندي + مكسرات متنوعة (لوز - كاجو - صنوبر) + زبيب + بهارات كبسة خاصة + لوز للتزيين + صوص حار + سلطة خضراء"
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
        description: "✨ المندي الحضرمي الأصيل، لحم ضأن مندي على الفحم بطريقة حضرمية تقليدية. ينضج اللحم في تنور الطين مع الأرز والتوابل العطرية لمدة طويلة.",
        ingredients: "🥘 المكونات: ضأن كامل (حوالي 10 كيلو) + أرز مندي خاص + فحم للتبخير + صلصة حارة يمنية + سلطة فرط + لبن زبادي + توابل خاصة (هيل - كزبرة - كمون)"
    },
    { 
        id: 4, 
        name: "المضغوط الحجازي", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"
        ],
        description: "✨ المضغوط الحجازي أكلة تهامة الشهيرة، تطبخ بالأرز المصري واللحم والتوابل الحجازية العطرية. سميت بالمضغوط لطهيها في قدر محكم الغلق.",
        ingredients: "🥘 المكونات: لحم غنم طازج + أرز مصري فاخر + هيل مطحون + قرفة صينية + كزبرة خضراء + لومي أسود + زبدة بلدي + بصل محمر"
    },
    { 
        id: 5, 
        name: "العصيدة النجدية", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop"
        ],
        description: "✨ العصيدة النجدية أكلة شعبية تراثية تصنع من دقيق القمح والسمن البلدي والعسل. تقدم في المناسبات والأعياد مع القهوة العربية.",
        ingredients: "🥘 المكونات: دقيق قمح كامل + سمن بلدي فاخر + عسل سدر طبيعي + سكر + ماء ورد + هيل مطحون + قرفة"
    },
    { 
        id: 6, 
        name: "المرقوق", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"
        ],
        description: "✨ المرقوق أكلة شعبية من منطقة نجد، عبارة عن عجين يرق رقاً خفيفاً ويقطع ويطبخ مع اللحم والخضار المشكلة.",
        ingredients: "🥘 المكونات: دقيق قمح + لحم ضأن + جزر + كوسا + بطاطس + بصل + طماطم + بهارات مشكلة + كزبرة"
    },
    { 
        id: 7, 
        name: "القرصان", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"
        ],
        description: "✨ القرصان أكلة شعبية سعودية تصنع من العجين المفروك واللبن الرائب واللحم المفروم بالبهارات.",
        ingredients: "🥘 المكونات: دقيق قمح + لبن رائب طازج + لحم مفروم ناعم + بصل مفروم + بهارات مشكلة + سمن بلدي"
    },
    { 
        id: 8, 
        name: "الثريد", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"
        ],
        description: "✨ الثريد أكلة عربية أصيلة ذكرت في الأحاديث النبوية، عبارة عن خبز بر مفروك بلحم الضأن والخضار والمرق الغني.",
        ingredients: "🥘 المكونات: خبز بر طازج + لحم ضأن + مرق لحم غني + بصل + جزر + كوسا + بهارات + بقدونس"
    },
    { 
        id: 9, 
        name: "الحنيذ", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"
        ],
        description: "✨ الحنيذ اليمني الشهير، لحم ضأن يطهى في تنور الطين لمدة طويلة مع التوابل حتى يصبح طرياً جداً ويتفتت.",
        ingredients: "🥘 المكونات: ضأن كامل + بهارات حنيذ خاصة + زبدة بلدي + ثوم مهروس + زنجبيل طازج + كركم + هيل"
    },
    { 
        id: 10, 
        name: "الصيادية", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"
        ],
        description: "✨ الصيادية أكلة ساحلية تتكون من السمك والأرز والبصل المحمر والصنوبر والبهارات الخاصة.",
        ingredients: "🥘 المكونات: سمك فيلية طازج (هامور أو ناجل) + أرز بسمتي + بصل كثير + صنوبر محمص + كزبرة خضراء + ليمون أسود + كركم"
    },
    { 
        id: 11, 
        name: "كبسة العروق", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop"
        ],
        description: "✨ كبسة العروق أكلة بدوية فاخرة تطبخ في قدور كبيرة في المناسبات والأعياد، لحم البعير الصغير مع الأرز والمكسرات.",
        ingredients: "🥘 المكونات: لبعان (جمل صغير) + أرز كبسة خاص + مكسرات مشكلة + تمر طبيعي + حليب طازج + بهارات بدوية + زبدة"
    },
    { 
        id: 12, 
        name: "المنسف", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"
        ],
        description: "✨ المنسف الأردني، أكلة عربية أصيلة تصنع من لحم الضأن واللبن الجميد والأرز واللوز والصنوبر، تقدم مع خبز الشراك.",
        ingredients: "🥘 المكونات: لحم ضأن طازج + جميد (لبن مجفف) + أرز بسمتي هندي + لوز مقشر + صنوبر محمص + خبز شراك + سمن بلدي"
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
        description: "✨ الكنافة النابلسية الأصلية، كنافة ناعمة بالجبنة العربية وبحشوة القشطة الطازجة، تقدم مع القطر الثقيل والفستق الحلبي.",
        ingredients: "🥘 المكونات: جبنة عكاوي طازجة + قشطة بلدي + فستق حلبي مجروش + قطر ثقيل + ماء ورد + زبدة مذابة + هيل مطحون"
    },
    { 
        id: 14, 
        name: "اللقيمات العسليه", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"
        ],
        description: "✨ اللقيمات العسلية الذهبية المقرمشة من الخارج والهشة من الداخل، مغموسة بالعسل الطبيعي ومزينة بالسمسم والفستق المطحون.",
        ingredients: "🥘 المكونات: دقيق أبيض فاخر + خميرة فورية + حليب طازج + عسل سدر طبيعي + سمسم محمص + فستق مطحون + زيت نباتي + سكر"
    },
    { 
        id: 15, 
        name: "أم علي", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"
        ],
        description: "✨ حلى أم علي المصري الأصيل، طبقات من العجينة المحمصة مع الحليب المركز والفواكه المجففة والمكسرات المشكلة، تخبز في الفرن حتى تكتسب لوناً ذهبياً.",
        ingredients: "🥘 المكونات: عجينة فيلو + حليب مكثف محلى + فستق حلبي + جوز كامل + زبيب + لوز مقشر + جوز هند مبشور + قرفة مطحونة"
    },
    { 
        id: 16, 
        name: "المعمول بالتمر", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ معمول ناعم محشو بالتمر الفاخر، يقدم في الأعياد والمناسبات مع القهوة العربية، مزين بالفستق والسكر البودرة.",
        ingredients: "🥘 المكونات: سميد ناعم + سمن بلدي فاخر + تمر مجدول منزوع النوى + هيل مطحون + ماء ورد + سكر بودرة للتزيين + فستق مجروش"
    },
    { 
        id: 17, 
        name: "بلح الشام", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"
        ],
        description: "✨ بلح الشام المقرمش المحشو بالكريمة أو القشطة، مغطى بالقطر الثقيل والفستق الحلبي المجروش.",
        ingredients: "🥘 المكونات: دقيق أبيض + ماء + زبدة بلدي + بيض طازج + كريمة باتيسيير + فستق حلبي + قطر ثقيل + ماء ورد"
    },
    { 
        id: 18, 
        name: "الزلابية", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ الزلابية (العوامة) المصرية المقرمشة، تقدم مغموسة بالعسل أو القطر ومزينة بالسمسم والجوز.",
        ingredients: "🥘 المكونات: دقيق أبيض + زبادي طبيعي + بيكنج بودر + عسل نحل طبيعي + سمسم محمص + جوز مجروش + قرفة مطحونة"
    },
    { 
        id: 19, 
        name: "المهلبية", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"
        ],
        description: "✨ المهلبية اللبنانية الناعمة، حلوى باردة كريمية بنكهة ماء الورد والفستق والورد المجفف، تقدم باردة في الصيف.",
        ingredients: "🥘 المكونات: حليب طازج كامل الدسم + نشا ذرة + سكر ناعم + ماء ورد + فستق مجروش + ورد مجفف للتزيين"
    },
    { 
        id: 20, 
        name: "حلاوة الجبن", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"
        ],
        description: "✨ حلاوة الجبن الشامية، خيوط الجبن الحلو مع الفستق الحلبي والقطر، تقدم ساخنة مع القهوة العربية.",
        ingredients: "🥘 المكونات: جبنة موزاريلا حلوة + سميد ناعم + فستق حلبي مجروش + قطر ثقيل + ماء ورد + زبدة"
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
        description: "🎪 الخيمة الفضية - تجربة فاخرة للمناسبات الكبرى والأعراس. خيمة ملكية بتصميم فريد وإضاءة فضية ساحرة وأرضيات مفروشة بالسجاد الفاخر.",
        ingredients: "✨ تشمل الخدمة: خيمة فاخرة تتسع لـ 300 شخص + ديكورات فضية وإضاءة ليد + بوفيه مفتوح من أشهى المأكولات + فريق خدمة مدرب بالكامل + مشروبات ترحيبية وقهوة عربية + مكيفات مركزية + مسرح صوتيات محترف + شاشات عرض عملاقة + كوشة أعراس"
    },
    { 
        id: 22, 
        name: "خدمة الضيافة الملكية", 
        type: "service", 
        category: "خدمات الضيافة",
        mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop"
        ],
        description: "☕ خدمة الضيافة الملكية - نقدم لكم أرقى خدمات الضيافة في المناسبات والاجتماعات والافتتاحيات، بأسلوب راقٍ وفريق مدرب.",
        ingredients: "✨ تشمل الخدمة: قهوة عربية بالهيل والزعفران + تمر فاخر (مجدول - سكري - عجوة) + مكسرات مشكلة (كاجو - لوز - فستق - جوز) + حلويات شرقية فاخرة (معمول - كنافة - لقيمات) + كب كيك وكعك متنوع + عصائر طازجة طبيعية + فريق تقديم بملابس رسمية + أدوات ضيافة فضية كريستال + بخور عود"
    },
    { 
        id: 23, 
        name: "بوفيه مفتوح فاخر", 
        type: "service", 
        category: "خدمات الولائم",
        mainImage: "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"
        ],
        description: "🍽️ بوفيه مفتوح فاخر يناسب جميع الأذواق، مثالي للمناسبات الكبيرة والأعراس والاجتماعات، بأكثر من 20 صنفاً عالمياً وعربياً.",
        ingredients: "✨ تشمل الخدمة: أكثر من 20 صنفاً من المأكولات العالمية والعربية + مشاوي طازجة (لحم - دجاج - كباب) + سلطات متنوعة طازجة + مقبلات باردة وساخنة + شوربات (عدس - خضار - كريمة) + أرز بجميع أنواعه (كبسة - برياني - أبيض) + لحوم وأسماك طازجة + خضار سوتيه + حلويات شرقية وغربية + فواكه طازجة موسمية"
    },
    { 
        id: 24, 
        name: "تنظيم مناسبات متكامل", 
        type: "service", 
        category: "خدمات المناسبات",
        mainImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop"
        ],
        description: "🎉 خدمات تنظيم المناسبات بكافة أنواعها (أعراس - حفلات - اجتماعات - مؤتمرات - أعياد ميلاد). نخطط وننفذ كل شيء حسب رغبتك.",
        ingredients: "✨ تشمل الخدمة: تخطيط وتنسيق المناسبة كاملة + ديكورات حسب الطلب (ورد - بالونات - أقمشة) + إضاءة مهنية احترافية + كوشة أعراس فاخرة + بوفيه كامل حسب الطلب + موسيقى هادئة وعزف حي + تصوير فوتوغرافي وفيديو + دعوات إلكترونية وورقية + هدايا تذكارية للضيوف + استقبال ضيوف منظم + جوائز وسحوبات"
    },
    { 
        id: 25, 
        name: "وايت طعام متنقل", 
        type: "service", 
        category: "خدمات الطعام",
        mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop"
        ],
        description: "🚐 خدمة وايت طعام متنقل يجوب جميع أنحاء المنطقة، لتقديم أشهى المأكولات في المناسبات البرية والمخيمات والرحلات.",
        ingredients: "✨ تشمل الخدمة: وايت مجهز بالكامل (مطبخ متكامل) + طاهٍ محترف + قائمة طعام حسب الطلب (كبسة - جريش - مندي - مشاوي) + قهوة وتمور ترحيبية + فريق خدمة مدرب + أواني طهي فخارية أصيلة + توصيل مجاني للمنطقة + أدوات مائدة فاخرة"
    },
    { 
        id: 26, 
        name: "مأدبة عشاء فاخرة", 
        type: "service", 
        category: "خدمات الولائم",
        mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop",
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"
        ],
        description: "🍲 مأدبة عشاء فاخرة على الطريقة العربية الأصيلة، مثالية للوفود والضيوف المميزين والمناسبات الرسمية. نقدم أشهى المأكولات بأفضل صورة.",
        ingredients: "✨ تشمل المأدبة: منسف عربي على السفرة + كبسة ضأن فاخرة + جريش ملكي + مندي حضرمي + مشاوي مشكلة (لحم - دجاج - كباب) + أرز بأنواعه المتعددة + سلطات ومقبلات متنوعة (6 أنواع) + شوربات ساخنة + حلويات شرقية وغربية (كنافة - أم علي - لقيمات) + فواكه موسمية طازجة + قهوة وتمر ختاماً + أدوات مائدة كريستال"
    }
];

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
            <button class="btn-details" onclick="showDetails(${product.id})">📖 تفاصيل أكثر</button>
            <div class="quantity-selector">
                <button class="quantity-btn" onclick="changeQuantity(${product.id}, -1)">−</button>
                <span class="quantity-value" id="qty_${product.id}">1</span>
                <button class="quantity-btn" onclick="changeQuantity(${product.id}, 1)">+</button>
            </div>
            <button class="btn-add" onclick="addToCart(${product.id})">➕ أضف إلى السلة</button>
        `;
        grid.appendChild(card);
    });
    
    updateCartDisplay();
}

// ========================================
// تغيير الكمية
// ========================================
function changeQuantity(productId, delta) {
    const qtySpan = document.getElementById(`qty_${productId}`);
    if (!qtySpan) return;
    let currentQty = parseInt(qtySpan.innerText);
    let newQty = currentQty + delta;
    if (newQty < 1) newQty = 1;
    if (newQty > 50) newQty = 50;
    qtySpan.innerText = newQty;
}

// ========================================
// إضافة إلى السلة
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtySpan = document.getElementById(`qty_${productId}`);
    let qty = qtySpan ? parseInt(qtySpan.innerText) : 1;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            qty: qty
        });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    
    // إعادة تعيين الكمية
    if (qtySpan) qtySpan.innerText = "1";
    
    // تأثير وميض للزر
    const btn = event.target;
    btn.style.transform = "scale(0.95)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 200);
    
    alert(`✅ تمت إضافة ${product.name} × ${qty} إلى السلة`);
}

// ========================================
// تحديث عرض السلة
// ========================================
function updateCartDisplay() {
    const cartCount = document.getElementById("cartCountNav");
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCount.innerText = totalItems;
    }
    
    const cartItemsDiv = document.getElementById("cartItemsList");
    if (cartItemsDiv) {
        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '<div class="empty-cart">🛒 السلة فارغة<br>أضف بعض المنتجات</div>';
            const cartTotalDiv = document.getElementById("cartTotal");
            if (cartTotalDiv) cartTotalDiv.innerHTML = "";
            return;
        }
        
        let itemsHtml = "";
        cart.forEach(item => {
            itemsHtml += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-qty">الكمية: ${item.qty}</div>
                    </div>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">حذف</button>
                </div>
            `;
        });
        cartItemsDiv.innerHTML = itemsHtml;
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        const cartTotalDiv = document.getElementById("cartTotal");
        if (cartTotalDiv) cartTotalDiv.innerHTML = `📦 إجمالي القطع: ${totalItems}`;
    }
}

// ========================================
// حذف من السلة
// ========================================
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

// ========================================
// إرسال الطلب عبر واتساب
// ========================================
function sendOrder() {
    if (cart.length === 0) {
        alert("⚠️ السلة فارغة! أضف بعض المنتجات أولاً");
        return;
    }
    
    let message = "🌴 *مرحباً! أريد طلب من مطبخ نخلة وتمرة* 🌴\n\n";
    message += "━━━━━━━━━━━━━━━━━━\n";
    message += "*📋 طلبي:*\n\n";
    
    cart.forEach(item => {
        message += `• ${item.name} × ${item.qty}\n`;
    });
    
    message += "\n━━━━━━━━━━━━━━━━━━\n";
    message += "*👤 معلومات التوصيل:*\n";
    message += "الاسم: \n";
    message += "العنوان: \n";
    message += "رقم الجوال: \n\n";
    message += "※ ※ ※ ※ ※ ※ ※ ※ ※ ※\n";
    message += "_تم الطلب عبر متجر نخلة وتمرة_";
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// ========================================
// عرض التفاصيل (مودال)
// ========================================
function showDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById("detailsModal");
    const modalDetails = document.getElementById("modalDetails");
    
    // بناء معرض الصور
    let galleryHtml = `
        <img class="main-image" id="mainModalImage" src="${product.mainImage}" alt="${product.name}">
        <div class="image-gallery">
    `;
    product.images.forEach(img => {
        galleryHtml += `<img class="gallery-img" src="${img}" alt="صورة" onclick="changeModalImage('${img}')">`;
    });
    galleryHtml += `</div>`;
    
    modalDetails.innerHTML = `
        ${galleryHtml}
        <h2 style="color: #2e7d32; font-size: 1.8em;">${product.name}</h2>
        <div class="details-description">
            <strong>📝 الوصف:</strong><br>${product.description}
        </div>
        <div class="details-ingredients">
            <strong>🥘 المكونات والتفاصيل:</strong><br>${product.ingredients}
        </div>
        <div class="quantity-selector" style="margin-top: 20px;">
            <button class="quantity-btn" onclick="changeModalQty(-1)">−</button>
            <span class="quantity-value" id="modalQty">1</span>
            <button class="quantity-btn" onclick="changeModalQty(1)">+</button>
            <button class="btn-add" style="margin-right: 15px;" onclick="addFromModal(${product.id})">➕ أضف إلى السلة</button>
        </div>
    `;
    
    modal.style.display = "block";
}

let currentModalId = null;

function changeModalQty(delta) {
    const qtySpan = document.getElementById("modalQty");
    let current = parseInt(qtySpan.innerText);
    let newQty = current + delta;
    if (newQty < 1) newQty = 1;
    if (newQty > 50) newQty = 50;
    qtySpan.innerText = newQty;
}

function addFromModal(productId) {
    const product = products.find(p => p.id === productId);
    const qtySpan = document.getElementById("modalQty");
    let qty = parseInt(qtySpan.innerText);
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ id: product.id, name: product.name, qty: qty });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    closeModal();
    alert(`✅ تمت إضافة ${product.name} × ${qty} إلى السلة`);
}

function changeModalImage(imgSrc) {
    const mainImg = document.getElementById("mainModalImage");
    if (mainImg) mainImg.src = imgSrc;
}

// ========================================
// فتح وإغلاق السلة والمودال
// ========================================
function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar && overlay) {
        sidebar.classList.toggle("open");
        overlay.classList.toggle("show");
        updateCartDisplay();
    }
}

function closeModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) modal.style.display = "none";
}

// إغلاق المودال عند النقر خارج المحتوى
window.onclick = function(event) {
    const modal = document.getElementById("detailsModal");
    if (event.target === modal) closeModal();
    
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar && sidebar.classList.contains("open") && event.target === overlay) {
        toggleCart();
    }
}

// تحديث السلة عند تحميل الصفحة
updateCartDisplay();
