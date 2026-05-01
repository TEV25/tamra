const WHATSAPP_NUMBER = "966532743474";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========== السخانات (36 صنف) ==========
const sakhanatProducts = [
    { id: 1, name: "عريكة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "عريكة نجدية أصيلة بالتمر والسمن البلدي", ingredients: "دقيق + سمن بلدي + تمر + هيل" },
    { id: 2, name: "عصيدة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "عصيدة سعودية بالعسل والسمن البلدي", ingredients: "دقيق + سمن + عسل + هيل" },
    { id: 3, name: "مشغوثة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المشغوثة أكلة شعبية بالتمر", ingredients: "دقيق + تمر + سمن + هيل" },
    { id: 4, name: "جريش أبيض", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "الجريش الأبيض باللبن واللحم", ingredients: "جريش + لبن + لحم + سمن" },
    { id: 5, name: "جريش أحمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "الجريش الأحمر بالصلصة", ingredients: "جريش + صلصة + لحم + بصل" },
    { id: 6, name: "مرقوق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المرقوق باللحم والخضار", ingredients: "عجين + لحم + جزر + كوسا" },
    { id: 7, name: "مطازيز", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المطازيز باللبن", ingredients: "عجين + لبن + لحم مفروم" },
    { id: 8, name: "مفلق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "المفلق بالأرز واللحم", ingredients: "أرز + لحم + بصل + بهارات" },
    { id: 9, name: "كبسة دجاج", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "الكبسة بالدجاج والبهارات", ingredients: "دجاج + أرز + لوز + بهارات" },
    { id: 10, name: "كبسة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "كبسة اللحم الغنم", ingredients: "لحم + أرز + مكسرات" },
    { id: 11, name: "مضغوط", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "المضغوط الحجازي", ingredients: "لحم + أرز + هيل + قرفة" },
    { id: 12, name: "برياني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "البرياني بالدجاج", ingredients: "دجاج + أرز + زبادي + زعفران" },
    { id: 13, name: "مندي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المندي باللحم على الفحم", ingredients: "لحم + أرز + فحم + بهارات" },
    { id: 14, name: "كشري", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "الكشري المصري", ingredients: "عدس + أرز + مكرونة + صلصة" },
    { id: 15, name: "مكرونة باشميل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "مكرونة بالباشميل", ingredients: "مكرونة + بشاميل + لحم مفروم" },
    { id: 16, name: "لازانيا", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "لازانيا باللحم", ingredients: "لازانيا + لحم مفروم + جبن" },
    { id: 17, name: "كبة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "الكبة المقلية", ingredients: "برغل + لحم + بصل + صنوبر" },
    { id: 18, name: "يخنة لحم", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "يخنة اللحم بالخضار", ingredients: "لحم + بطاطس + جزر + بازلاء" },
    { id: 19, name: "ورق عنب", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "ورق العنب المحشي", ingredients: "ورق عنب + أرز + لحم مفروم" },
    { id: 20, name: "حنيني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "الحنيني بالتمر", ingredients: "تمر + دقيق + سمن + هيل" },
    { id: 21, name: "أم علي", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "حلى أم علي", ingredients: "عجينة + حليب مكثف + مكسرات" },
    { id: 22, name: "لقيمات", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "اللقيمات بالعسل", ingredients: "دقيق + خميرة + عسل + سمسم" },
    { id: 23, name: "مراصيع بالعسل", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "المراصيع بالعسل", ingredients: "دقيق + عسل + سمن + حليب" },
    { id: 24, name: "مفروكه", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المفروكة بالسمن", ingredients: "خبز + سمن + عسل" },
    { id: 25, name: "سليق", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "السليق بالحليب", ingredients: "أرز + حليب + دجاج + زبدة" }
];

// ========== الصحون (17 صنف) ==========
const sohonProducts = [
    { id: 101, name: "مله خبز جنوبي", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المله الجنوبي باللبن والعسل", ingredients: "خبز جنوبي + لبن + عسل" },
    { id: 102, name: "بنت الصحن", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "بنت الصحن الحجازية", ingredients: "دقيق + سمن + عسل + هيل" },
    { id: 103, name: "فطائر محشيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "فطائر محشية بالجبنة", ingredients: "عجين + جبنة + زيتون" },
    { id: 104, name: "خلية نحل", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "خلية النحل بالجبنة", ingredients: "عجين + جبنة + عسل" },
    { id: 105, name: "بسبوسة", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "البسبوسة بالسميد", ingredients: "سميد + زبادي + جوز هند" },
    { id: 106, name: "معمول", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المعمول بالتمر", ingredients: "سميد + تمر + فستق" },
    { id: 107, name: "قطايف", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "القطايف المحشية", ingredients: "عجين قطايف + جبنة أو قشطة" },
    { id: 108, name: "غريبة", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "الغريبية", ingredients: "دقيق + زبدة + فستق" },
    { id: 109, name: "كيكة الدخن", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "كيكة الدخن بالتمر", ingredients: "دخن + تمر + بيض" },
    { id: 110, name: "شعثه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "الشعثة", ingredients: "دقيق + تمر + سمن" },
    { id: 111, name: "قشد ملکی", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "القشد الملكي", ingredients: "قشطة + عسل + فستق" },
    { id: 112, name: "كور التمر", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "كرات التمر بالطحينية", ingredients: "تمر + طحينية + سمسم" },
    { id: 113, name: "تمريه جنوبيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "التمرية الجنوبية", ingredients: "دقيق + تمر + سمن" },
    { id: 114, name: "لبنيه", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "اللبنية", ingredients: "لبن + عسل + مكسرات" },
    { id: 115, name: "أصابع زينب", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "أصابع زينب", ingredients: "فيلو + قشطة + فستق" },
    { id: 116, name: "ميني مله", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "ميني مله محشية", ingredients: "خبز ميني + جبنة + زيتون" },
    { id: 117, name: "رز بالحليب", type: "sohon", category: "الصحون", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "رز بالحليب", ingredients: "أرز + حليب + سكر + قرفة" }
];

// ========== الخدمات (6 خدمات) ==========
const servicesProducts = [
    { id: 201, name: "✨ الخيمة الفضية ✨", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop"], description: "خيمة فاخرة للمناسبات", ingredients: "خيمة + ديكورات + بوفيه + فريق خدمة" },
    { id: 202, name: "خدمة الضيافة الملكية", type: "service", category: "خدمات الضيافة", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop"], description: "ضيافة متكاملة", ingredients: "قهوة + تمر + مكسرات + حلويات" },
    { id: 203, name: "بوفيه مفتوح", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=400&h=300&fit=crop"], description: "بوفيه مفتوح", ingredients: "مشاوي + سلطات + مقبلات + أرز" },
    { id: 204, name: "تنظيم مناسبات", type: "service", category: "خدمات المناسبات", mainImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"], description: "تنظيم مناسبات", ingredients: "تخطيط + ديكورات + إضاءة + كوشة" },
    { id: 205, name: "وايت طعام", type: "service", category: "خدمات الطعام", mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop"], description: "وايت طعام متنقل", ingredients: "وايت مجهز + طاهٍ + قائمة طعام" },
    { id: 206, name: "مأدبة عشاء", type: "service", category: "خدمات الولائم", mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop"], description: "مأدبة عشاء", ingredients: "منسف + كبسة + جريش + مندي" }
];

const products = [...sakhanatProducts, ...sohonProducts, ...servicesProducts];

// ========== دوال العرض والتعامل ==========
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
    details.innerHTML = `${gallery}<h2 style="color:#2e7d32">${p.name}</h2><div class="details-description"><strong>📝 الوصف:</strong><br>${p.description}</div><div class="details-ingredients"><strong>🥘 المكونات:</strong><br>${p.ingredients}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})">➕ أضف للسلة</button></div>`;
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
