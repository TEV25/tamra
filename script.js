const WHATSAPP_NUMBER = "966532743474";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========== السخانات (36 صنف) ==========
const sakhanatProducts = [
    { id: 1, name: "عريكة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "عريكة نجدية أصيلة بالتمر والسمن البلدي", ingredients: "دقيق + سمن بلدي + تمر + هيل" },
    { id: 2, name: "عصيدة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "عصيدة سعودية بالعسل والسمن", ingredients: "دقيق + سمن + عسل + هيل" },
    { id: 3, name: "مشغوثة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "المشغوثة أكلة شعبية بالتمر", ingredients: "دقيق + تمر + سمن + هيل" },
    { id: 4, name: "جريش أبيض", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "الجريش الأبيض باللبن واللحم", ingredients: "جريش + لبن + لحم + سمن" },
    { id: 5, name: "جريش أحمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "الجريش الأحمر بالصلصة", ingredients: "جريش + صلصة + لحم + بصل" },
    { id: 6, name: "عصيدة بالتمر حساوية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "عصيدة حساوية بالتمر", ingredients: "دقيق + تمر + سمن + هيل" },
    { id: 7, name: "مرسه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "المرسه باللبن والتمر", ingredients: "دقيق + لبن + تمر + سمن" },
    { id: 8, name: "فته تمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "فته التمر بالخبز والسمن", ingredients: "خبز + تمر + سمن + هيل" },
    { id: 9, name: "مفتوت سمن وحليب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "المفتوت بالسمن والحليب", ingredients: "خبز + سمن + حليب مركز + سكر" },
    { id: 10, name: "مرقوق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "المرقوق باللحم", ingredients: "عجين + لحم + جزر + كوسا" },
    { id: 11, name: "مطازيز (القرصان)", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "المطازيز باللبن", ingredients: "عجين + لبن + لحم مفروم" },
    { id: 12, name: "الميقعه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "الميقعة أكلة جنوبية", ingredients: "دقيق + لبن + تمر + سمن" },
    { id: 13, name: "المليحيه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "المليحيه باللبن", ingredients: "دقيق + لبن + ملح + سمن" },
    { id: 14, name: "مفلق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "المفلق بالأرز واللحم", ingredients: "أرز + لحم + بصل + بهارات" },
    { id: 15, name: "مفروكه بالسمن والعسل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "المفروكة بالسمن", ingredients: "خبز + سمن + عسل + سمسم" },
    { id: 16, name: "مراصيع بالعسل والسمن", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "المراصيع بالعسل", ingredients: "دقيق + عسل + سمن + حليب" },
    { id: 17, name: "مراصيع بالخضار", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "المراصيع بالخضار", ingredients: "دقيق + كوسا + جزر + بصل" },
    { id: 18, name: "كبسة دجاج", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "الكبسة بالدجاج", ingredients: "دجاج + أرز + لوز + بهارات" },
    { id: 19, name: "كبسة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "كبسة اللحم", ingredients: "لحم + أرز + مكسرات" },
    { id: 20, name: "مضغوط", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "المضغوط الحجازي", ingredients: "لحم + أرز + هيل + قرفة" },
    { id: 21, name: "برياني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "البرياني بالدجاج", ingredients: "دجاج + أرز + زبادي + زعفران" },
    { id: 22, name: "كشري", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "الكشري المصري", ingredients: "عدس + أرز + مكرونة + صلصة" },
    { id: 23, name: "سليق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "السليق بالحليب", ingredients: "أرز + حليب + دجاج + زبدة" },
    { id: 24, name: "مندي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "المندي باللحم", ingredients: "لحم + أرز + فحم + بهارات" },
    { id: 25, name: "معدوس", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "المعدوس بالعدس", ingredients: "عدس + أرز + بصل + طماطم" },
    { id: 26, name: "مكرونة باشميل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "مكرونة بالباشميل", ingredients: "مكرونة + بشاميل + لحم مفروم" },
    { id: 27, name: "مكرونة كانالوني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "كانالوني بالجبنة", ingredients: "كانالوني + جبنة + لحم" },
    { id: 28, name: "مكرونة لازانيا", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "لازانيا باللحم", ingredients: "لازانيا + لحم مفروم + جبن" },
    { id: 29, name: "مكرونة سباغيتي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "سباغيتي بالصلصة", ingredients: "سباغيتي + صلصة + لحم" },
    { id: 30, name: "كبة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "الكبة المقلية", ingredients: "برغل + لحم + بصل + صنوبر" },
    { id: 31, name: "يخنة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "يخنة اللحم", ingredients: "لحم + بطاطس + جزر + بازلاء" },
    { id: 32, name: "ورق عنب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "ورق العنب المحشي", ingredients: "ورق عنب + أرز + لحم مفروم" },
    { id: 33, name: "كبيبيا حائلية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "الكبيبيا الحائلية", ingredients: "لحم + حمص + برغل + بصل" },
    { id: 34, name: "حنيني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "الحنيني بالتمر", ingredients: "تمر + دقيق + سمن + هيل" },
    { id: 35, name: "أم علي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "حلى أم علي", ingredients: "عجينة + حليب مكثف + مكسرات" },
    { id: 36, name: "لقيمات", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "اللقيمات بالعسل", ingredients: "دقيق + خميرة + عسل + سمسم" }
];

// ========== الصحون (17 صنف) ==========
const sohonProducts = [
    { id: 101, name: "مله خبز جنوبي", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "المله الجنوبي", ingredients: "خبز جنوبي + لبن + عسل" },
    { id: 102, name: "بنت الصحن", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "بنت الصحن", ingredients: "دقيق + سمن + عسل + هيل" },
    { id: 103, name: "فطائر محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "فطائر محشية", ingredients: "عجين + جبنة أو لحم" },
    { id: 104, name: "خلية نحل", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "خلية النحل", ingredients: "عجين + جبنة + عسل" },
    { id: 105, name: "كور التمر المحشيه بالطحينه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "كرات التمر", ingredients: "تمر + طحينية + سمسم" },
    { id: 106, name: "تمريه جنوبيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "التمرية الجنوبية", ingredients: "دقيق + تمر + سمن" },
    { id: 107, name: "بسبوسة (سادة)", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "البسبوسة", ingredients: "سميد + زبادي + جوز هند" },
    { id: 108, name: "بسبوسة بالقشطة", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "بسبوسة بالقشطة", ingredients: "سميد + قشطة + فستق" },
    { id: 109, name: "لبنيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "اللبنية", ingredients: "لبن + عسل + مكسرات" },
    { id: 110, name: "معمول", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "المعمول", ingredients: "سميد + تمر + فستق" },
    { id: 111, name: "قطايف محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "القطايف", ingredients: "عجين قطايف + جبنة أو قشطة" },
    { id: 112, name: "أصابع زينب", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "أصابع زينب", ingredients: "فيلو + قشطة + فستق" },
    { id: 113, name: "الغريبية", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "الغريبية", ingredients: "دقيق + زبدة + فستق" },
    { id: 114, name: "كيكة الدخن بالتمر", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "كيكة الدخن", ingredients: "دخن + تمر + بيض" },
    { id: 115, name: "شعثه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop"], description: "الشعثة", ingredients: "دقيق + تمر + سمن" },
    { id: 116, name: "ميني مله محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&h=200&fit=crop"], description: "ميني مله محشية", ingredients: "خبز ميني + جبنة + زيتون" },
    { id: 117, name: "قشد ملکی", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop"], description: "القشد الملكي", ingredients: "قشطة + عسل + فستق" }
];

// ========== الخدمات (6 خدمات) ==========
const servicesProducts = [
    { id: 201, name: "✨ الخيمة الفضية الفاخرة ✨", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=300&h=200&fit=crop"], description: "خيمة فاخرة للمناسبات", ingredients: "خيمة + ديكورات + بوفيه + فريق خدمة" },
    { id: 202, name: "خدمة الضيافة الملكية", type: "service", category: "خدمات الضيافة", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=300&h=200&fit=crop"], description: "ضيافة متكاملة", ingredients: "قهوة + تمر + مكسرات + حلويات" },
    { id: 203, name: "بوفيه مفتوح فاخر", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=300&h=200&fit=crop"], description: "بوفيه مفتوح", ingredients: "مشاوي + سلطات + مقبلات + أرز" },
    { id: 204, name: "تنظيم مناسبات متكامل", type: "service", category: "خدمات المناسبات", mainImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop"], description: "تنظيم مناسبات", ingredients: "تخطيط + ديكورات + إضاءة + كوشة" },
    { id: 205, name: "وايت طعام متنقل", type: "service", category: "خدمات الطعام", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=300&h=200&fit=crop"], description: "وايت طعام", ingredients: "وايت مجهز + طاهٍ + قائمة طعام" },
    { id: 206, name: "مأدبة عشاء فاخرة", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=300&h=200&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=300&h=200&fit=crop"], description: "مأدبة عشاء", ingredients: "منسف + كبسة + جريش + مندي" }
];

const products = [...sakhanatProducts, ...sohonProducts, ...servicesProducts];

// ========== دوال العرض والتعامل ==========
function displayProductsByType(type) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const filtered = products.filter(p => p.type === type);
    grid.innerHTML = "";
    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
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
        `;
        grid.appendChild(card);
    });
    updateCartDisplay();
}

function changeQuantity(id, delta) {
    const span = document.getElementById(`qty_${id}`);
    let val = parseInt(span.innerText) + delta;
    if (val < 1) val = 1;
    if (val > 50) val = 50;
    span.innerText = val;
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const qty = parseInt(document.getElementById(`qty_${id}`).innerText);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id: product.id, name: product.name, qty: qty });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert(`✅ تمت إضافة ${product.name} × ${qty}`);
    document.getElementById(`qty_${id}`).innerText = "1";
}

function updateCartDisplay() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById("cartCountNav") && (document.getElementById("cartCountNav").innerText = total);
    const container = document.getElementById("cartItemsList");
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">🛒 السلة فارغة</div>';
        document.getElementById("cartTotal").innerHTML = "";
        return;
    }
    let html = "";
    cart.forEach(i => {
        html += `<div class="cart-item"><div><div class="cart-item-name">${i.name}</div><div>الكمية: ${i.qty}</div></div><button class="btn-remove" onclick="removeFromCart(${i.id})">حذف</button></div>`;
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
    if (cart.length === 0) { alert("⚠️ السلة فارغة"); return; }
    let msg = "🌴 مرحباً! أريد طلب من نخلة وتمرة 🌴\n━━━━━━━━━━━━━━━━━━\n📋 طلبي:\n\n";
    cart.forEach(i => msg += `• ${i.name} × ${i.qty}\n`);
    msg += "\n━━━━━━━━━━━━━━━━━━\n👤 معلومات التوصيل:\nالاسم: \nالعنوان: \nرقم الجوال: \n\nتم الطلب عبر متجر نخلة وتمرة";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function showDetails(id) {
    const p = products.find(p => p.id === id);
    const modal = document.getElementById("detailsModal");
    const details = document.getElementById("modalDetails");
    let gallery = `<img class="main-image" id="mainModalImage" src="${p.mainImage}"><div class="image-gallery">`;
    p.images.forEach(img => gallery += `<img class="gallery-img" src="${img}" onclick="changeModalImage('${img}')">`);
    gallery += `</div>`;
    details.innerHTML = `${gallery}<h2>${p.name}</h2><div class="details-description"><strong>📝 الوصف:</strong><br>${p.description}</div><div class="details-ingredients"><strong>🥘 المكونات:</strong><br>${p.ingredients}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})">➕ أضف للسلة</button></div>`;
    modal.style.display = "block";
}

function changeModalQty(delta) {
    let val = parseInt(document.getElementById("modalQty").innerText) + delta;
    if (val < 1) val = 1;
    document.getElementById("modalQty").innerText = val;
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

function changeModalImage(src) { document.getElementById("mainModalImage").src = src; }
function toggleCart() {
    document.getElementById("cartSidebar").classList.toggle("open");
    document.getElementById("cartOverlay").classList.toggle("show");
    updateCartDisplay();
}
function closeModal() { document.getElementById("detailsModal").style.display = "none"; }
window.onclick = function(e) {
    if (e.target === document.getElementById("detailsModal")) closeModal();
    if (e.target === document.getElementById("cartOverlay")) toggleCart();
}
updateCartDisplay();
