// ========================================
// قائمة المنتجات الكاملة
// ========================================
const products = [
    // الوجبات الشعبية
    { id: 1, name: "الجريش الملكي", type: "food", category: "الوجبات الشعبية",
      mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop",
      images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"],
      description: "الجريش الملكي أكلة سعودية أصيلة على الطريقة النجدية",
      ingredients: "جريش + عريكه + دبس تمر + سمن بلدي + لحم ضأن" },
    { id: 2, name: "الكبسة الحساوية", type: "food", category: "الوجبات الشعبية",// ========================================
// قائمة المنتجات الكاملة
// ========================================
const products = [
    // ========== الوجبات الشعبية ==========
    { 
        id: 1, 
        name: "الجريش الملكي", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
        ],
        description: "الجريش الملكي أكلة سعودية أصيلة تطبخ على الطريقة النجدية القديمة",
        ingredients: "4 جريش + 2 عريكه + دبس تمر + سمن بلدي + لحم ضأن + مكسرات للتزيين"
    },
    { 
        id: 2, 
        name: "الكبسة الحساوية", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
        ],
        description: "كبسة دجاج على الطريقة الحساوية بالأرز البسمتي والبهارات المشكلة",
        ingredients: "دجاجة كاملة + أرز بسمتي + مكسرات + زبيب + بهارات كبسة + لوز للتزيين"
    },
    { 
        id: 3, 
        name: "المندي الحضرمي", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
        ],
        description: "مندي لضأن على الفحم بطريقة حضرمية أصيلة",
        ingredients: "ضأن كامل + أرز مندي + فحم للتبخير + صلصة حارة + سلطة فرط"
    },
    { 
        id: 4, 
        name: "المضغوط الحجازي", 
        type: "food", 
        category: "الوجبات الشعبية",
        mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
        ],
        description: "المضغوط الحجازي بالأرز واللحم والبهارات الخاصة",
        ingredients: "لحم غنم + أرز مصري + هيل + قرفة + كزبرة + لومي أسود"
    },
    
    // ========== الحلويات ==========
    { 
        id: 5, 
        name: "الكنافة النابلسية", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=400&h=300&fit=crop"
        ],
        description: "كنافة ناعمة بالجبنة العربية وبحشوة القشطة",
        ingredients: "جبنة عكاوي + قشطة + فستق حلبي + قطر + ورد"
    },
    { 
        id: 6, 
        name: "اللقيمات العسليه", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
        ],
        description: "لقيمات ذهبية مقرمشة مغموسة بالعسل الطبيعي",
        ingredients: "دقيق أبيض + خميرة + حليب + عسل سدر + سمسم + فستق"
    },
    { 
        id: 7, 
        name: "أم علي", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=400&h=300&fit=crop"
        ],
        description: "حلى أم علي المصري الأصيل بالعجينة والفواكه المجففة",
        ingredients: "عجينة فيلو + حليب مكثف + مكسرات + زبيب + جوز هند"
    },
    { 
        id: 8, 
        name: "المعمول بالتمر", 
        type: "sweets", 
        category: "الحلويات",
        mainImage: "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1587314168485-7b295a5a78c5?w=400&h=300&fit=crop"
        ],
        description: "معمول ناعم محشو بالتمر الفاخر",
        ingredients: "سميد + سمن + تمر + هيل + ماء ورد"
    },
    
    // ========== الخدمات ==========
    { 
        id: 9, 
        name: "✨ الخيمة الفضية ✨", 
        type: "service", 
        category: "خدمات الولائم",
        mainImage: "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1519167758481-8cb5505c6e48?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1464366400600-7168b4af5105?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
        ],
        description: "خدمة الخيمة الفضية - تجربة فاخرة للمناسبات الكبرى تشمل:",
        ingredients: "خيمة فاخرة تتسع لـ 300 شخص + ديكورات فضية وإضاءة مميزة + بوفيه مفتوح + فريق خدمة مدرب + مشروبات ترحيبية + مكيفات"
    },
    { 
        id: 10, 
        name: "خدمة الضيافة الملكية", 
        type: "service", 
        category: "خدمات الضيافة",
        mainImage: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
        ],
        description: "خدمة ضيافة متكاملة للمناسبات الخاصة",
        ingredients: "قهوة عربية بالهيل + تمر فاخر + مكسرات مشكلة + حلويات شرقية + معمول + كب كيك + عصائر طازجة + فريق تقديم"
    }
];

// ========================================
// السلة - التخزين المحلي
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
            <div class="product-price">💰 حسب الطلب</div>
            <button class="btn-details" onclick="showDetails(${product.id})">📖 تفاصيل أكثر</button>
            <input type="number" class="product-quantity" id="qty_${product.id}" value="1" min="1" max="50">
            <button class="btn-add" onclick="addToCart(${product.id})">➕ أضف للسلة</button>
        `;
        grid.appendChild(card);
    });
    
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
    
    // بناء معرض الصور
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
        <h2 style="color: #2e7d32;">${product.name}</h2>
        <div class="product-price" style="font-size: 1.3em; display: inline-block;">💰 حسب الطلب - يرجى التواصل</div>
        <div class="details-description">
            <strong>📝 الوصف:</strong><br>
            ${product.description}
        </div>
        <div class="details-ingredients">
            <strong>🥘 المكونات والتفاصيل:</strong><br>
            ${product.ingredients}
        </div>
        <div style="display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap;">
            <input type="number" id="modal_qty" value="1" min="1" max="50" style="padding: 10px; width: 100px; border-radius: 8px; border: 2px solid #e0e0e0;">
            <button onclick="addToCartFromModal(${product.id})" class="btn-add" style="flex: 1;">➕ أضف للسلة</button>
        </div>
    `;
    
    modal.style.display = "block";
}

// ========================================
// تغيير الصورة الرئيسية في المودال
// ========================================
function changeMainImage(imgSrc) {
    const mainImage = document.getElementById("mainModalImage");
    if (mainImage) {
        mainImage.src = imgSrc;
    }
}

// ========================================
// إضافة من المودال
// ========================================
function addToCartFromModal(productId) {
    const qtyInput = document.getElementById("modal_qty");
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty < 1) qty = 1;
    
    addToCartWithQty(productId, qty);
    closeModal();
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
// إضافة للسلة مع كمية محددة
// ========================================
function addToCartWithQty(productId, qty) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (qty > 50) qty = 50;
    if (qty < 1) qty = 1;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.qty += qty;
        if (existingItem.qty > 99) existingItem.qty = 99;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            qty: qty,
            type: product.type
        });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartSummary();
    displayCartItems();
    
    alert(`✅ تمت إضافة ${product.name} × ${qty}`);
}

// ========================================
// إضافة للسلة
// ========================================
function addToCart(productId) {
    const qtyInput = document.getElementById(`qty_${productId}`);
    let qty = parseInt(qtyInput.value);
    if (isNaN(qty) || qty < 1) qty = 1;
    addToCartWithQty(productId, qty);
}

// ========================================
// تحديث ملخص السلة في الشريط العلوي
// ========================================
function updateCartSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    
    // تحديث في شريط التنقل
    const cartCountNav = document.getElementById("cartCountNav");
    if (cartCountNav) {
        cartCountNav.innerHTML = totalItems;
    }
    
    // تحديث في شريط السلة (إذا كان موجود)
    const summary = document.getElementById("cartSummary");
    if (summary) {
        summary.innerHTML = `🛒 السلة: ${totalItems} منتج`;
    }
}

// ========================================
// عرض عناصر السلة في القائمة الجانبية
// ========================================
function displayCartItems() {
    const container = document.getElementById("cartItemsList");
    const totalContainer = document.getElementById("cartTotal");
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart">✨ السلة فارغة ✨<br>أضف بعض المنتجات</div>';
        if (totalContainer) totalContainer.innerHTML = "";
        return;
    }
    
    let itemsHtml = "";
    
    cart.forEach(item => {
        itemsHtml += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-details">
                        الكمية: ${item.qty}
                    </div>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${item.id})">حذف</button>
            </div>
        `;
    });
    
    container.innerHTML = itemsHtml;
    if (totalContainer) {
        totalContainer.innerHTML = `💎 جميع المنتجات والخدمات حسب الطلب<br>يرجى التواصل للتسعير`;
    }
}

// ========================================
// حذف منتج من السلة
// ========================================
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartSummary();
    displayCartItems();
}

// ========================================
// تفريغ السلة بالكامل
// ========================================
function clearCart() {
    if (cart.length === 0) {
        alert("🛒 السلة فارغة بالفعل!");
        return;
    }
    
    if (confirm("🗑️ هل أنت متأكد من تفريغ السلة بالكامل؟")) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartSummary();
        displayCartItems();
        alert("✅ تم تفريغ السلة");
    }
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
    message += "*💎 ملاحظة:* جميع المنتجات والخدمات حسب الطلب\n";
    message += "يرجى التواصل لتحديد السعر والتفاصيل\n\n";
    message += "*👤 معلومات التوصيل:*\n";
    message += "الاسم: \n";
    message += "العنوان: \n";
    message += "رقم الجوال: \n\n";
    message += "※ ※ ※ ※ ※ ※ ※ ※ ※ ※\n";
    message += "_تم الطلب عبر متجر نخلة وتمرة_";
    
    // رقم واتساب (يمكن تغييره)
    const phoneNumber = "966500000000";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}

// ========================================
// فتح وإغلاق السلة الجانبية
// ========================================
function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    
    if (sidebar) sidebar.classList.toggle("open");
    if (overlay) overlay.classList.toggle("show");
    displayCartItems();
}

// ========================================
// النقر خارج السلة لإغلاقها
// ========================================
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    const isClickInsideCart = sidebar?.contains(event.target);
    const isClickOnCartBtn = event.target.closest('.nav-cart') || event.target.closest('.btn-view-cart') || event.target.closest('.dropbtn');
    
    if (sidebar?.classList.contains('open') && !isClickInsideCart && !isClickOnCartBtn) {
        toggleCart();
    }
});

// ========================================
// تهيئة الصفحة
// ========================================
function init() {
    updateCartSummary();
    
    // إضافة مستمع لأزرار تفريغ السلة إذا كانت موجودة
    const clearBtn = document.querySelector('.btn-clear');
    if (clearBtn) {
        clearBtn.onclick = clearCart;
    }
}

// بدء التشغيل
init();