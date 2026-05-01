const WHATSAPP_NUMBER = "966532743474";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========== السخانات (36 صنف) - بدون مكونات ==========
const sakhanatProducts = [
    { id: 1, name: "عريكة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "عريكة نجدية أصيلة بالتمر والسمن البلدي، تُعد من أشهر الأكلات الشعبية في منطقة نجد، تقدم في المناسبات والأعياد" },
    { id: 2, name: "عصيدة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "عصيدة سعودية بالعسل والسمن البلدي، أكلة تراثية شهيرة تقدم مع القهوة العربية" },
    { id: 3, name: "مشغوثة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المشغوثة أكلة شعبية بالتمر، تشتهر في المناطق الجنوبية من المملكة" },
    { id: 4, name: "جريش أبيض", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "الجريش الأبيض باللبن واللحم، أكلة نجدية أصيلة تطبخ في القدر الفخاري" },
    { id: 5, name: "جريش أحمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "الجريش الأحمر بالصلصة، يتميز بلونه الأحمر ونكهته اللذيذة" },
    { id: 6, name: "عصيدة بالتمر حساوية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "عصيدة حساوية بالتمر، تشتهر في المنطقة الشرقية بشكل خاص" },
    { id: 7, name: "مرسه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المرسه باللبن والتمر، أكلة جنوبية مفضلة في فصل الشتاء" },
    { id: 8, name: "فته تمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "فته التمر بالخبز والسمن، وجبة سعودية تقليدية غنية" },
    { id: 9, name: "مفتوت سمن وحليب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المفتوت بالسمن والحليب المركز، أكلة شهية تقدم في المناسبات" },
    { id: 10, name: "مرقوق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المرقوق باللحم والخضار، أكلة شعبية من منطقة القصيم" },
    { id: 11, name: "مطازيز (القرصان)", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "المطازيز باللبن، أكلة شعبية معروفة في نجد" },
    { id: 12, name: "الميقعه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "الميقعة أكلة جنوبية سعودية أصيلة" },
    { id: 13, name: "المليحيه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المليحيه باللبن، أكلة بسيطة ولذيذة" },
    { id: 14, name: "مفلق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "المفلق بالأرز واللحم، أكلة مشهورة في المناسبات" },
    { id: 15, name: "مفروكه بالسمن والعسل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المفروكة بالسمن والعسل، أكلة حلوة تقدم في الفطور" },
    { id: 16, name: "مراصيع بالعسل والسمن", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المراصيع بالعسل، أكلة جنوبية شهية" },
    { id: 17, name: "مراصيع بالخضار", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "المراصيع بالخضار المشكلة، وجبة صحية ومتكاملة" },
    { id: 18, name: "كبسة دجاج", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "الكبسة بالدجاج والبهارات، أشهر الأكلات السعودية على مستوى الخليج" },
    { id: 19, name: "كبسة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "كبسة اللحم الغنم، وجبة رئيسية في المناسبات الكبيرة" },
    { id: 20, name: "مضغوط", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "المضغوط الحجازي، أكلة تهامة الشهيرة بالأرز واللحم" },
    { id: 21, name: "برياني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "البرياني بالدجاج، طبق هندي شهير انتشر في السعودية" },
    { id: 22, name: "كشري", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "الكشري المصري، وجبة شعبية متكاملة" },
    { id: 23, name: "سليق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "السليق بالحليب، أكلة حجازية شهيرة" },
    { id: 24, name: "مندي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المندي باللحم على الفحم، أكلة يمنية أصيلة" },
    { id: 25, name: "معدوس", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المعدوس بالعدس والأرز، وجبة غنية بالبروتين" },
    { id: 26, name: "مكرونة باشميل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "مكرونة بالباشميل، طبق إيطالي شهير" },
    { id: 27, name: "مكرونة كانالوني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "كانالوني بالجبنة، طبق إيطالي فاخر" },
    { id: 28, name: "مكرونة لازانيا", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "لازانيا باللحم، من أشهر الأطباق الإيطالية" },
    { id: 29, name: "مكرونة سباغيتي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "سباغيتي بالصلصة، طبق إيطالي كلاسيكي" },
    { id: 30, name: "كبة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "الكبة المقلية، أكلة شامية شهيرة" },
    { id: 31, name: "يخنة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "يخنة اللحم بالخضار، وجبة دافئة ومغذية" },
    { id: 32, name: "ورق عنب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "ورق العنب المحشي، أكلة شامية وعربية مشهورة" },
    { id: 33, name: "كبيبيا حائلية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "الكبيبيا الحائلية، أكلة تراثية من منطقة حائل" },
    { id: 34, name: "حنيني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "الحنيني بالتمر، حلوى سعودية شهيرة" },
    { id: 35, name: "أم علي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "حلى أم علي، حلوى مصرية شهيرة بالحليب والمكسرات" },
    { id: 36, name: "لقيمات", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "اللقيمات الذهبية بالعسل، حلوى شعبية في رمضان" }
];

// ========== الصحون (17 صنف) - بدون مكونات ==========
const sohonProducts = [
    { id: 101, name: "مله خبز جنوبي", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المله الخبز الجنوبي، أكلة جنوبية سعودية شهيرة تقدم مع اللبن والعسل" },
    { id: 102, name: "بنت الصحن", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "بنت الصحن الحجازية، حلوى تقليدية من منطقة الحجاز" },
    { id: 103, name: "فطائر محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "فطائر محشية بالجبنة أو اللحم، مقبلات شهية" },
    { id: 104, name: "خلية نحل", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "خلية النحل بالجبنة، حلوى شرقية لذيذة" },
    { id: 105, name: "كور التمر المحشيه بالطحينه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "كرات التمر المحشية بالطحينية، حلوى صحية ولذيذة" },
    { id: 106, name: "تمريه جنوبيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "التمرية الجنوبية، حلوى تقليدية من جنوب السعودية" },
    { id: 107, name: "بسبوسة (سادة)", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "البسبوسة بالسميد، حلوى عربية مشهورة" },
    { id: 108, name: "بسبوسة بالقشطة", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "البسبوسة المحشوة بالقشطة، حلوى فاخرة للمناسبات" },
    { id: 109, name: "لبنيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "اللبنية باللبن والعسل، حلوى خفيفة ومغذية" },
    { id: 110, name: "معمول", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المعمول بالتمر، حلوى العيد التقليدية" },
    { id: 111, name: "قطايف محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "القطايف المحشية، حلوى رمضانية شهيرة" },
    { id: 112, name: "أصابع زينب", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "أصابع زينب بالقشطة، حلوى شرقية مقرمشة" },
    { id: 113, name: "الغريبية", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "الغريبية، كعكة تقليدية تقدم مع القهوة" },
    { id: 114, name: "كيكة الدخن بالتمر", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "كيكة الدخن بالتمر، حلوى صحية غنية بالألياف" },
    { id: 115, name: "شعثه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "الشعثة، حلوى شعبية سعودية بالتمر" },
    { id: 116, name: "ميني مله محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "ميني مله محشية بالجبنة، مقبلات خفيفة ولذيذة" },
    { id: 117, name: "رز بالحليب", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "رز بالحليب، حلوى تقليدية بنكهة الفانيليا والقرفة" },
    { id: 118, name: "قشد ملکی", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "القشد الملكي، حلوى فاخرة بالعسل والفستق" }
];

// ========== الخدمات (6 خدمات) - بدون مكونات ==========
const servicesProducts = [
    { id: 201, name: "✨ الخيمة الفضية الفاخرة ✨", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop", "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=400&h=300&fit=crop"], description: "خيمة فاخرة للمناسبات الكبرى مع ديكورات فضية وإضاءة مميزة، تتسع لـ 300 شخص، تشمل بوفيه مفتوح وفريق خدمة مدرب ومشروبات ترحيبية ومكيفات" },
    { id: 202, name: "خدمة الضيافة الملكية", type: "service", category: "خدمات الضيافة", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop"], description: "خدمة ضيافة متكاملة مع قهوة عربية وتمر فاخر ومكسرات وحلويات شرقية، يقدمها فريق مدرب بملابس رسمية" },
    { id: 203, name: "بوفيه مفتوح فاخر", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=400&h=300&fit=crop"], description: "بوفيه مفتوح بأكثر من 20 صنفاً من المأكولات العالمية والعربية، يشمل مشاوي وسلطات ومقبلات وشوربات وأرز وحلويات" },
    { id: 204, name: "تنظيم مناسبات متكامل", type: "service", category: "خدمات المناسبات", mainImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"], description: "تنظيم كامل للمناسبات (أعراس - حفلات - مؤتمرات) يشمل تخطيط وديكورات وإضاءة وكوشة وبوفيه وتصوير واستقبال ضيوف" },
    { id: 205, name: "وايت طعام متنقل", type: "service", category: "خدمات الطعام", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop"], description: "وايت طعام متنقل يخدم المناسبات البرية والمخيمات، مجهز بالكامل مع طاهٍ محترف وقائمة طعام حسب الطلب" },
    { id: 206, name: "مأدبة عشاء فاخرة", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop"], description: "مأدبة عشاء على الطريقة العربية الأصيلة، تشمل منسف وكبسة وجريش ومندي ومشاوي ومقبلات وحلويات" }
];

const products = [...sakhanatProducts, ...sohonProducts, ...servicesProducts];

// ========== دوال العرض والتعامل (نفس السابق) ==========
function displayProductsByType(type) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const filtered = products.filter(p => p.type === type);
    grid.innerHTML = "";
    filtered.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <img class="product-image" src="${product.mainImage}" onclick="showDetails(${product.id})">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <button class="btn-details" onclick="showDetails(${product.id})">📖 تفاصيل</button>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="changeQuantity(${product.id},-1)">−</button>
                    <span class="quantity-value" id="qty_${product.id}">1</span>
                    <button class="quantity-btn" onclick="changeQuantity(${product.id},1)">+</button>
                </div>
                <button class="btn-add" onclick="addToCart(${product.id})">➕ أضف للسلة</button>
            </div>
        `;
    });
    updateCartDisplay();
}

function changeQuantity(id, delta) {
    const span = document.getElementById(`qty_${id}`);
    if (!span) return;
    let val = parseInt(span.innerText) + delta;
    if (val < 1) val = 1;
    if (val > 50) val = 50;
    span.innerText = val;
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const qtySpan = document.getElementById(`qty_${id}`);
    const qty = qtySpan ? parseInt(qtySpan.innerText) : 1;
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id: product.id, name: product.name, qty: qty });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert(`✅ تمت إضافة ${product.name} × ${qty}`);
    if (qtySpan) qtySpan.innerText = "1";
}

function updateCartDisplay() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    const cartCount = document.getElementById("cartCountNav");
    if (cartCount) cartCount.innerText = total;
    
    const container = document.getElementById("cartItemsList");
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">🛒 السلة فارغة<br>📦 أضف بعض المنتجات</div>';
        document.getElementById("cartTotal").innerHTML = "";
        return;
    }
    
    let html = "";
    cart.forEach(i => {
        html += `<div class="cart-item"><div><div class="cart-item-name">${i.name}</div><div class="cart-item-qty">الكمية: ${i.qty}</div></div><button class="btn-remove" onclick="removeFromCart(${i.id})">حذف</button></div>`;
    });
    container.innerHTML = html;
    document.getElementById("cartTotal").innerHTML = `📦 إجمالي القطع: ${total}`;
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function sendOrder() {
    if (cart.length === 0) {
        alert("⚠️ السلة فارغة! أضف بعض المنتجات أولاً");
        return;
    }
    let msg = "🌴 مرحباً! أريد طلب من نخلة وتمرة 🌴\n━━━━━━━━━━━━━━━━━━\n📋 طلبي:\n\n";
    cart.forEach(i => msg += `• ${i.name} × ${i.qty}\n`);
    msg += "\n━━━━━━━━━━━━━━━━━━\n👤 معلومات التوصيل:\nالاسم: \nالعنوان: \nرقم الجوال: \n\n※ ※ ※ ※ ※ ※ ※ ※ ※ ※\nتم الطلب عبر متجر نخلة وتمرة";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function showDetails(id) {
    const p = products.find(p => p.id === id);
    if (!p) return;
    const modal = document.getElementById("detailsModal");
    const details = document.getElementById("modalDetails");
    let gallery = `<img class="main-image" id="mainModalImage" src="${p.mainImage}"><div class="image-gallery">`;
    p.images.forEach(img => gallery += `<img class="gallery-img" src="${img}" onclick="changeModalImage('${img}')">`);
    gallery += `</div>`;
    details.innerHTML = `${gallery}<h2 style="color:#2e7d32">${p.name}</h2><div class="details-description"><strong>📝 التفاصيل:</strong><br>${p.description}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})">➕ أضف للسلة</button></div>`;
    modal.style.display = "block";
}

function changeModalQty(delta) {
    const span = document.getElementById("modalQty");
    let val = parseInt(span.innerText) + delta;
    if (val < 1) val = 1;
    span.innerText = val;
}

function addFromModal(id) {
    const p = products.find(p => p.id === id);
    const qty = parseInt(document.getElementById("modalQty").innerText);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id: p.id, name: p.name, qty: qty });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    closeModal();
    alert(`✅ تمت إضافة ${p.name} × ${qty}`);
}

function changeModalImage(src) {
    const main = document.getElementById("mainModalImage");
    if (main) main.src = src;
}

function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar) sidebar.classList.toggle("open");
    if (overlay) overlay.classList.toggle("show");
    updateCartDisplay();
}

function closeModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target === document.getElementById("detailsModal")) closeModal();
    if (e.target === document.getElementById("cartOverlay")) toggleCart();
};

updateCartDisplay();
