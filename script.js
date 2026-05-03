const WHATSAPP_NUMBER = "0539836477";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ========== السخانات (9 أطباق) ==========
const sakhanatProducts = [
    { id: 1, name: "جريش أبيض", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "جريش أبيض باللبن واللحم على الطريقة النجدية الأصيلة" },
    { id: 2, name: "جريش أحمر", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "الجريش الأحمر بالصلصة واللحم والبهارات" },
    { id: 3, name: "عاصيدة حساوية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "عاصيدة حساوية بالتمر والسمن البلدي" },
    { id: 4, name: "عريكة جنوبية", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "عريكة جنوبية أصيلة بالتمر والسمن والعسل" },
    { id: 5, name: "عصيدة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "العصيدة بالعسل والسمن البلدي" },
    { id: 6, name: "مشغوثة (عيش جنوبي)", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المشغوطة أو العيش الجنوبي بالتمر والسمن" },
    { id: 7, name: "حنيني", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "الحنيني بالتمر والهيل أكلة تراثية" },
    { id: 8, name: "صحن مشكل مراصيع مع ميني ملة", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "صحن متنوع يجمع المراصيع والميني ملة" },
    { id: 9, name: "صحن مشكل ملة ومراصيع", type: "sakhanat", category: "السخانات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "صحن تراثي يجمع خبز الملة والمراصيع" }
];

// ========== الحلويات (6 أطباق) ==========
const sweetsProducts = [
    { id: 101, name: "معمول", type: "sweets", category: "الحلويات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "المعمول بالتمر والفستق - حلى تراثي أصيل" },
    { id: 102, name: "لقيمات", type: "sweets", category: "الحلويات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "اللقيمات الذهبية بالعسل والسمسم" },
    { id: 103, name: "قطايف محشية", type: "sweets", category: "الحلويات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "القطايف المحشية بالجبنة أو القشطة والفستق" },
    { id: 104, name: "خلية نحل", type: "sweets", category: "الحلويات", mainImage: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=400&h=300&fit=crop"], description: "خلية النحل بالجبنة والعسل" },
    { id: 105, name: "خبز ملة", type: "sweets", category: "الحلويات", mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"], description: "خبز الملة التراثي على الطريقة البدوية" },
    { id: 106, name: "مراصيع (مصابيب)", type: "sweets", category: "الحلويات", mainImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"], description: "المراصيع أو المصابيب بالعسل أو بالخضار" }
];

const allProducts = [...sakhanatProducts, ...sweetsProducts];

// ========== دوال العرض ==========
function displayProductsByType(type) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const filtered = allProducts.filter(p => p.type === type);
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
    const product = allProducts.find(p => p.id === id);
    if (!product) return;
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

// دالة إضافة الباقة إلى السلة
function addPackageToCart(packageName) {
    const existing = cart.find(i => i.name === packageName);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: Date.now(), name: packageName, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    alert(`✅ تمت إضافة ${packageName}`);
}

function updateCartDisplay() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    const cartCount = document.getElementById("cartCountNav");
    if (cartCount) cartCount.innerText = total;
    
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
    document.getElementById("cartTotal").innerHTML = `🏕️ إجمالي القطع: ${total}`;
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function sendOrder() {
    if (cart.length === 0) {
        alert("⚠️ السلة فارغة!");
        return;
    }
    let msg = "🏕️ *مرحباً! أريد طلب من خيمة وتمرة* 🏕️\n━━━━━━━━━━━━━━━━━━\n*📋 طلبي:*\n\n";
    cart.forEach(i => msg += `• ${i.name} × ${i.qty}\n`);
    msg += "\n━━━━━━━━━━━━━━━━━━\n👤 معلومات التوصيل:\nالاسم: \nالعنوان: \nرقم الجوال: \n\n※ ※ ※ ※ ※ ※ ※ ※ ※ ※\nتم الطلب عبر مطعم خيمة وتمرة\n📱 تيك توك: @khaymah_w_tamrah";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function showDetails(id) {
    const p = allProducts.find(p => p.id === id);
    if (!p) return;
    const modal = document.getElementById("detailsModal");
    const details = document.getElementById("modalDetails");
    let gallery = `<img class="main-image" id="mainModalImage" src="${p.mainImage}"><div class="image-gallery">`;
    p.images.forEach(img => gallery += `<img class="gallery-img" src="${img}" onclick="changeModalImage('${img}')">`);
    gallery += `</div>`;
    details.innerHTML = `${gallery}<h2>${p.name}</h2><div class="details-description"><strong>📝 الوصف:</strong><br>${p.description}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})">➕ أضف للسلة</button></div>`;
    modal.style.display = "block";
}

function changeModalQty(delta) {
    const span = document.getElementById("modalQty");
    let val = parseInt(span.innerText) + delta;
    if (val < 1) val = 1;
    span.innerText = val;
}

function addFromModal(id) {
    const p = allProducts.find(p => p.id === id);
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