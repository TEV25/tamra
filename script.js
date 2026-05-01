// رقم الواتساب
const WHATSAPP_NUMBER = "966532743474";

// السلة
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========================================
// قائمة السخانات (36 صنف)
// ========================================
const sakhanatProducts = [
    { id: 1, name: "عريكة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "عريكة نجدية أصيلة بالتمر والسمن البلدي", ingredients: "دقيق + سمن بلدي + تمر + هيل + ماء ورد" },
    { id: 2, name: "عصيدة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "عصيدة سعودية بالعسل والسمن البلدي", ingredients: "دقيق قمح + سمن + عسل + سكر + هيل" },
    { id: 3, name: "مشغوثة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "المشغوثة أكلة شعبية بالتمر والدقيق", ingredients: "دقيق + تمر + سمن + هيل + قرفة" },
    { id: 4, name: "جريش أبيض", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "الجريش الأبيض باللبن واللحم", ingredients: "جريش ناعم + لبن + لحم ضأن + سمن + هيل" },
    { id: 5, name: "جريش أحمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "الجريش الأحمر بالصلصة واللحم", ingredients: "جريش + صلصة طماطم + لحم + بهارات + بصل" },
    { id: 6, name: "عصيدة بالتمر حساوية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "عصيدة حساوية بالتمر والسمن", ingredients: "دقيق + تمر مجدول + سمن + هيل + زبدة" },
    { id: 7, name: "مرسه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "المرسه أكلة شعبية باللبن والتمر", ingredients: "دقيق + لبن + تمر + سمن + هيل" },
    { id: 8, name: "فته تمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit/crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit/crop"], description: "فته التمر بالخبز والسمن", ingredients: "خبز + تمر + سمن + هيل + قرفة" },
    { id: 9, name: "مفتوت سمن وحليب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit/crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit/crop"], description: "المفتوت بالسمن والحليب المركز", ingredients: "خبز + سمن بلدي + حليب مركز + سكر + فستق" },
    { id: 10, name: "مرقوق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "المرقوق باللحم والخضار", ingredients: "عجين + لحم ضأن + جزر + كوسا + بطاطس" },
    { id: 11, name: "مطازيز (القرصان)", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "المطازيز باللبن واللحم المفروم", ingredients: "عجين + لبن رائب + لحم مفروم + بصل + بهارات" },
    { id: 12, name: "الميقعه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "الميقعة أكلة جنوبية سعودية", ingredients: "دقيق + لبن + تمر + سمن + هيل" },
    { id: 13, name: "المليحيه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "المليحيه باللبن والملح", ingredients: "دقيق + لبن + ملح + سمن + ماء" },
    { id: 14, name: "مفلق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "المفلق بالأرز واللحم", ingredients: "أرز + لحم + بصل + بهارات + مكسرات" },
    { id: 15, name: "مفروكه بالسمن والعسل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "المفروكة بالسمن والعسل", ingredients: "خبز + سمن بلدي + عسل + سمسم + فستق" },
    { id: 16, name: "مراصيع بالعسل والسمن", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "المراصيع بالعسل والسمن البلدي", ingredients: "دقيق + عسل + سمن + حليب + بيض" },
    { id: 17, name: "مراصيع بالخضار", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "المراصيع بالخضار المشكلة", ingredients: "دقيق + كوسا + جزر + بصل + بيض" },
    { id: 18, name: "كبسة دجاج", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "الكبسة بالدجاج والبهارات", ingredients: "دجاج + أرز بسمتي + لوز + زبيب + بهارات" },
    { id: 19, name: "كبسة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "كبسة اللحم الغنم", ingredients: "لحم غنم + أرز + مكسرات + بهارات كبسة" },
    { id: 20, name: "مضغوط", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "المضغوط الحجازي بالأرز واللحم", ingredients: "لحم + أرز مصري + هيل + قرفة + كزبرة" },
    { id: 21, name: "برياني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "البرياني الهندي بالدجاج", ingredients: "دجاج + أرز بسمتي + زبادي + زعفران + مكسرات" },
    { id: 22, name: "كشري", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "الكشري المصري بالعدس والمكرونة", ingredients: "عدس + أرز + مكرونة + صلصة طماطم + خل" },
    { id: 23, name: "سليق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "السليق بالحليب والدجاج", ingredients: "أرز + حليب + دجاج + زبدة + ملح" },
    { id: 24, name: "مندي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "المندي باللحم على الفحم", ingredients: "لحم ضأن + أرز مندي + فحم + بهارات" },
    { id: 25, name: "معدوس", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "المعدوس بالعدس والأرز", ingredients: "عدس + أرز + بصل + طماطم + كزبرة" },
    { id: 26, name: "مكرونة باشميل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "مكرونة بالباشميل واللحم المفروم", ingredients: "مكرونة + بشاميل + لحم مفروم + جبن" },
    { id: 27, name: "مكرونة كانالوني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "كانالوني بالجبنة واللحم", ingredients: "كانالوني + جبنة + لحم + صلصة + بيشاميل" },
    { id: 28, name: "مكرونة لازانيا", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "لازانيا باللحم المفروم والجبن", ingredients: "لازانيا + لحم مفروم + جبن موزاريلا + صلصة" },
    { id: 29, name: "مكرونة سباغيتي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "سباغيتي بالصلصة واللحم", ingredients: "سباغيتي + صلصة طماطم + لحم مفروم + جبن بارميزان" },
    { id: 30, name: "كبة (دجاج - لحم - خضار)", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "الكبة المقلية بالبرغل واللحم", ingredients: "برغل + لحم مفروم + بصل + صنوبر + بهارات" },
    { id: 31, name: "يخنة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "يخنة اللحم بالخضار", ingredients: "لحم + بطاطس + جزر + بازلاء + صلصة" },
    { id: 32, name: "ورق عنب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "ورق العنب المحشي بالأرز واللحم", ingredients: "ورق عنب + أرز + لحم مفروم + بقدونس + عصير ليمون" },
    { id: 33, name: "كبيبيا حائلية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "الكبيبيا الحائلية باللحم والحمص", ingredients: "لحم + حمص + برغل + بصل + بهارات" },
    { id: 34, name: "حنيني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "الحنيني بالتمر والهيل", ingredients: "تمر + دقيق + سمن + هيل + قرفة" },
    { id: 35, name: "أم علي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "حلى أم علي بالحليب والفواكه المجففة", ingredients: "عجينة فيلو + حليب مكثف + مكسرات + زبيب" },
    { id: 36, name: "لقيمات", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "اللقيمات الذهبية بالعسل", ingredients: "دقيق + خميرة + حليب + عسل + سمسم" }
];

// ========================================
// قائمة الصحون (17 صنف)
// ========================================
const sohonProducts = [
    { id: 101, name: "مله خبز جنوبي", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "المله الخبز الجنوبي باللبن والعسل", ingredients: "خبز جنوبي + لبن + عسل + سمن + هيل" },
    { id: 102, name: "بنت الصحن", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "بنت الصحن الحجازية بالعسل والسمن", ingredients: "دقيق + سمن + عسل + هيل + سمسم" },
    { id: 103, name: "فطائر محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "فطائر محشية بالجبنة أو اللحم أو السبانخ", ingredients: "عجين + جبنة أو لحم + زيتون + زعتر" },
    { id: 104, name: "خلية نحل", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "خلية النحل بالجبنة والعسل", ingredients: "عجين + جبنة + عسل + سمسم + زبدة" },
    { id: 105, name: "كور التمر المحشيه بالطحينه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "كرات التمر المحشية بالطحينية", ingredients: "تمر + طحينية + سمسم + فستق + جوز هند" },
    { id: 106, name: "تمريه جنوبيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "التمرية الجنوبية بالدقيق والتمر", ingredients: "دقيق + تمر + سمن + هيل + يانسون" },
    { id: 107, name: "بسبوسة (سادة)", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "البسبوسة بالسميد والقطر", ingredients: "سميد + زبادي + جوز هند + قطر + لوز" },
    { id: 108, name: "بسبوسة بالقشطة", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "البسبوسة المحشوة بالقشطة", ingredients: "سميد + قشطة + جوز هند + قطر + فستق" },
    { id: 109, name: "لبنيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "اللبنية باللبن والعسل", ingredients: "لبن + عسل + مكسرات + جوز هند + قرفة" },
    { id: 110, name: "معمول", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "المعمول بالتمر والفستق", ingredients: "سميد + سمن + تمر + فستق + سكر بودرة" },
    { id: 111, name: "قطايف محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "القطايف المحشية بالجبنة أو القشطة", ingredients: "عجين قطايف + جبنة أو قشطة + فستق + قطر" },
    { id: 112, name: "أصابع زينب", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "أصابع زينب بالقشطة والفستق", ingredients: "عجينة فيلو + قشطة + فستق + قطر + زبدة" },
    { id: 113, name: "الغريبية", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "الغريبية بالزبدة والفستق", ingredients: "دقيق + زبدة + سكر بودرة + فستق + فانيلا" },
    { id: 114, name: "كيكة الدخن بالتمر", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit/crop"], description: "كيكة الدخن المحلاة بالتمر", ingredients: "دخن + تمر + بيض + زبدة + هيل" },
    { id: 115, name: "شعثه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "الشعثة بالدقيق والتمر", ingredients: "دقيق + تمر + سمن + هيل + سمسم" },
    { id: 116, name: "ميني مله محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"], description: "ميني مله محشية بالجبنة والزيتون", ingredients: "خبز ميني + جبنة + زيتون + زعتر + زيت زيتون" },
    { id: 117, name: "رز بالحليب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"], description: "رز بالحليب بالفانيليا والقرفة", ingredients: "أرز مصري + حليب + سكر + فانيليا + قرفة" },
    { id: 118, name: "قشد ملکی", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"], description: "القشد الملكي بالعسل والفستق", ingredients: "قشطة + عسل + فستق + ماء ورد + هيل" }
];

// دمج جميع الخدمات (كما هي من قبل)
const servicesProducts = [
    { id: 201, name: "✨ الخيمة الفضية الفاخرة ✨", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop"], description: "خيمة فاخرة للمناسبات الكبرى مع ديكورات فضية", ingredients: "خيمة 300 شخص + ديكورات فضية + بوفيه مفتوح + فريق خدمة" },
    { id: 202, name: "خدمة الضيافة الملكية", type: "service", category: "خدمات الضيافة", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"], description: "خدمة ضيافة متكاملة مع قهوة وتمور وحلويات", ingredients: "قهوة عربية + تمر فاخر + مكسرات + حلويات شرقية" },
    { id: 203, name: "بوفيه مفتوح فاخر", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop"], description: "بوفيه مفتوح بأكثر من 20 صنفاً", ingredients: "مشاوي + سلطات + مقبلات + شوربات + أرز + لحوم" },
    { id: 204, name: "تنظيم مناسبات متكامل", type: "service", category: "خدمات المناسبات", mainImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop"], description: "تنظيم كامل للمناسبات", ingredients: "تخطيط + ديكورات + إضاءة + كوشة + بوفيه" },
    { id: 205, name: "وايت طعام متنقل", type: "service", category: "خدمات الطعام", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"], description: "وايت طعام متنقل للمناسبات البرية", ingredients: "وايت مجهز + طاهٍ + قائمة طعام + قهوة" },
    { id: 206, name: "مأدبة عشاء فاخرة", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop"], description: "مأدبة عشاء على الطريقة العربية", ingredients: "منسف + كبسة + جريش + مندي + مشاوي" }
];

// دمج جميع المنتجات
const products = [...sakhanatProducts, ...sohonProducts, ...servicesProducts];

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
// باقي الدوال (نفس السابق)
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
    
    if (qtySpan) qtySpan.innerText = "1";
    
    const btn = event.target;
    btn.style.transform = "scale(0.95)";
    setTimeout(() => { btn.style.transform = "scale(1)"; }, 200);
    
    alert(`✅ تمت إضافة ${product.name} × ${qty} إلى السلة`);
}

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

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

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

function showDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById("detailsModal");
    const modalDetails = document.getElementById("modalDetails");
    
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
        <h2 style="color: #2e7d32;">${product.name}</h2>
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

window.onclick = function(event) {
    const modal = document.getElementById("detailsModal");
    if (event.target === modal) closeModal();
    
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar && sidebar.classList.contains("open") && event.target === overlay) {
        toggleCart();
    }
}

// تحديث السلة عند التحميل
updateCartDisplay();
