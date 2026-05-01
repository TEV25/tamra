// ========================================
// رقم الواتساب
// ========================================
const WHATSAPP_NUMBER = "966532743474";

// ========================================
// السلة
// ========================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========================================
// قائمة المنتجات (12 وجبة + 8 حلويات + 6 خدمات)
// ========================================
const products = [
    // الوجبات الشعبية (12)
    { id: 1, name: "الجريش الملكي", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"],
      description: "الجريش الملكي أكلة سعودية أصيلة تطبخ على الطريقة النجدية القديمة في القدر الفخاري",
      ingredients: "4 كيلو جريش ناعم + 2 كيلو عريكه + دبس تمر + سمن بلدي + لحم ضأن + مكسرات" },
    { id: 2, name: "الكبسة الحساوية", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"],
      description: "الكبسة الحساوية أشهر الأكلات السعودية بالأرز البسمتي والبهارات والدجاج الطازج",
      ingredients: "دجاجة كاملة + أرز بسمتي + مكسرات + زبيب + بهارات كبسة + لوز" },
    { id: 3, name: "المندي الحضرمي", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"],
      description: "مندي لضأن على الفحم بطريقة حضرمية أصيلة",
      ingredients: "ضأن كامل + أرز مندي + فحم للتبخير + صلصة حارة" },
    { id: 4, name: "المضغوط الحجازي", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"],
      description: "المضغوط الحجازي بالأرز واللحم والبهارات الخاصة",
      ingredients: "لحم غنم + أرز مصري + هيل + قرفة + كزبرة + لومي أسود" },
    { id: 5, name: "العصيدة النجدية", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"],
      description: "العصيدة النجدية أكلة شعبية تراثية من دقيق القمح والسمن والعسل",
      ingredients: "دقيق قمح + سمن بلدي + عسل سدر + سكر + هيل" },
    { id: 6, name: "المرقوق", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"],
      description: "المرقوق أكلة شعبية من نجد، عجين يرق ويقطع ويطبخ مع اللحم",
      ingredients: "دقيق + لحم ضأن + جزر + كوسا + بطاطس + بصل" },
    { id: 7, name: "القرصان", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"],
      description: "القرصان أكلة شعبية من العجين المفروك واللبن واللحم",
      ingredients: "دقيق + لبن رائب + لحم مفروم + بصل + بهارات" },
    { id: 8, name: "الثريد", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"],
      description: "الثريد أكلة عربية أصيلة، خبز مفروك بلحم الضأن",
      ingredients: "خبز بر + لحم ضأن + مرق + بصل + جزر" },
    { id: 9, name: "الحنيذ", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"],
      description: "الحنيذ اليمني، لحم ضأن يطهى في تنور الطين",
      ingredients: "ضأن + بهارات حنيذ + زبدة + ثوم + زنجبيل" },
    { id: 10, name: "الصيادية", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=350&fit=crop"],
      description: "الصيادية أكلة ساحلية من السمك والأرز والبصل",
      ingredients: "سمك فيلية + أرز بسمتي + بصل + صنوبر + كزبرة" },
    { id: 11, name: "كبسة العروق", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=500&h=350&fit=crop"],
      description: "كبسة العروق أكلة بدوية فاخرة في المناسبات",
      ingredients: "لبعان (جمل) + أرز كبسة + تمر + حليب + بهارات" },
    { id: 12, name: "المنسف", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=350&fit=crop"],
      description: "المنسف الأردني، لحم الضأن مع اللبن الجميد",
      ingredients: "لحم ضأن + جميد + أرز بسمتي + لوز + صنوبر" },

    // الحلويات (8)
    { id: 13, name: "الكنافة النابلسية", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"],
      description: "كنافة ناعمة بالجبنة العربية والقشطة والقطر",
      ingredients: "جبنة عكاوي + قشطة + فستق حلبي + قطر + ورد" },
    { id: 14, name: "اللقيمات العسليه", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"],
      description: "لقيمات ذهبية مقرمشة مغموسة بالعسل",
      ingredients: "دقيق + خميرة + حليب + عسل سدر + سمسم" },
    { id: 15, name: "أم علي", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"],
      description: "حلى أم علي المصري بالعجينة والفواكه المجففة",
      ingredients: "عجينة فيلو + حليب مكثف + مكسرات + زبيب" },
    { id: 16, name: "المعمول بالتمر", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"],
      description: "معمول ناعم محشو بالتمر الفاخر",
      ingredients: "سميد + سمن + تمر + هيل + ماء ورد" },
    { id: 17, name: "بلح الشام", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"],
      description: "بلح الشام المقرمش المحشو بالكريمة",
      ingredients: "دقيق + زبدة + بيض + كريمة + فستق" },
    { id: 18, name: "الزلابية", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"],
      description: "الزلابية المصرية المقرمشة بالعسل",
      ingredients: "دقيق + زبادي + عسل + سمسم + قرفة" },
    { id: 19, name: "المهلبية", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=350&fit=crop"],
      description: "المهلبية اللبنانية الناعمة بماء الورد",
      ingredients: "حليب + نشا + سكر + ماء ورد + فستق" },
    { id: 20, name: "حلاوة الجبن", type: "sweets", category: "الحلويات",
      mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=500&h=350&fit=crop"],
      description: "حلاوة الجبن الشامية بالفستق والقطر",
      ingredients: "جبنة موزاريلا حلوة + سميد + فستق + قطر" },

    // الخدمات (6)
    { id: 21, name: "✨ الخيمة الفضية الفاخرة ✨", type: "service", category: "خدمات الولائم",
      mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop", "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop"],
      description: "خيمة فاخرة للمناسبات الكبرى مع ديكورات فضية وإضاءة مميزة",
      ingredients: "خيمة 300 شخص + ديكورات فضية + بوفيه مفتوح + فريق خدمة + مشروبات ترحيبية + مكيفات" },
    { id: 22, name: "خدمة الضيافة الملكية", type: "service", category: "خدمات الضيافة",
      mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"],
      description: "خدمة ضيافة متكاملة مع قهوة وتمور وحلويات",
      ingredients: "قهوة عربية + تمر فاخر + مكسرات + حلويات شرقية + فريق تقديم" },
    { id: 23, name: "بوفيه مفتوح فاخر", type: "service", category: "خدمات الولائم",
      mainImage: "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=500&h=350&fit=crop"],
      description: "بوفيه مفتوح بأكثر من 20 صنفاً من المأكولات العالمية",
      ingredients: "مشاوي + سلطات + مقبلات + شوربات + أرز + لحوم + أسماك + حلويات" },
    { id: 24, name: "تنظيم مناسبات", type: "service", category: "خدمات المناسبات",
      mainImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop"],
      description: "تنظيم كامل للمناسبات (أعراس - حفلات - مؤتمرات)",
      ingredients: "تخطيط + ديكورات + إضاءة + كوشة + بوفيه + تصوير + استقبال" },
    { id: 25, name: "وايت طعام متنقل", type: "service", category: "خدمات الطعام",
      mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=500&h=350&fit=crop"],
      description: "وايت طعام متنقل للمناسبات البرية",
      ingredients: "وايت مجهز + طاهٍ + قائمة طعام + قهوة + فريق خدمة" },
    { id: 26, name: "مأدبة عشاء فاخرة", type: "service", category: "خدمات الولائم",
      mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop",
      images: ["https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=500&h=350&fit=crop"],
      description: "مأدبة عشاء على الطريقة العربية الأصيلة",
      ingredients: "منسف + كبسة + جريش + مندي + مشاوي + سلطات + حلويات" }
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
    let qty = parseInt(qtySpan.innerText);
    
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
    
    // إعادة تعيين الكمية إلى 1
    qtySpan.innerText = "1";
    
    // رسالة تأكيد
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
            document.getElementById("cartTotal").innerHTML = "";
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
        document.getElementById("cartTotal").innerHTML = `📦 إجمالي القطع: ${totalItems}`;
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
// عرض التفاصيل
// ========================================
function showDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById("detailsModal");
    const modalDetails = document.getElementById("modalDetails");
    
    let galleryHtml = `
        <img class="main-image" id="mainModalImage" src="${product.mainImage}">
        <div class="image-gallery">
    `;
    product.images.forEach(img => {
        galleryHtml += `<img class="gallery-img" src="${img}" onclick="changeMainImage('${img}')">`;
    });
    galleryHtml += `</div>`;
    
    modalDetails.innerHTML = `
        ${galleryHtml}
        <h2 style="color:#2e7d32;">${product.name}</h2>
        <div class="details-description">
            <strong>📝 الوصف:</strong><br>${product.description}
        </div>
        <div class="details-ingredients">
            <strong>🥘 المكونات والتفاصيل:</strong><br>${product.ingredients}
        </div>
        <div class="quantity-selector" style="margin-top:20px">
            <button class="quantity-btn" onclick="changeModalQuantity(-1)">−</button>
            <span class="quantity-value" id="modalQty">1</span>
            <button class="quantity-btn" onclick="changeModalQuantity(1)">+</button>
            <button class="btn-add" style="margin-right:15px" onclick="addFromModal(${product.id})">➕ أضف إلى السلة</button>
        </div>
    `;
    
    modal.style.display = "block";
}

let modalCurrentProductId = null;

function changeModalQuantity(delta) {
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

function changeMainImage(imgSrc) {
    document.getElementById("mainModalImage").src = imgSrc;
}

// ========================================
// فتح/إغلاق السلة
// ========================================
function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
    updateCartDisplay();
}

function closeModal() {
    document.getElementById("detailsModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("detailsModal");
    if (event.target === modal) closeModal();
}

updateCartDisplay();
