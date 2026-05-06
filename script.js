const WHATSAPP_NUMBER = "0539836477";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
});

function showToast(message, type = "success") {
    const oldToast = document.querySelector('.toast-notification');
    if (oldToast) oldToast.remove();
    
    const toast = document.createElement("div");
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `<div style="display:flex;align-items:center;gap:8px"><span>${type === "success" ? "✅" : "⚠️"}</span><span>${message}</span></div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

const sakhanatProducts = [
    { id: 1, name: "عريكة", type: "sakhanat", category: "السخانات", mainImage: "images/عريكه.png", images: ["images/عريكه.png"], description: "عريكة جنوبية أصيلة بالتمر والسمن والعسل" },
    { id: 2, name: "عصيد", type: "sakhanat", category: "السخانات", mainImage: "images/عصيد.png", images: ["images/عصيد.png"], description: "العصيد بالعسل والسمن البلدي" },
    { id: 3, name: "مشغوغه", type: "sakhanat", category: "السخانات", mainImage: "images/مشغوثه.png", images: ["images/مشغوثه.png"], description: "المشغوطة بالتمر والسمن" },
    { id: 4, name: "جريش أحمر", type: "sakhanat", category: "السخانات", mainImage: "images/جريش احمر.png", images: ["images/جريش احمر.png"], description: "الجريش الأحمر بالصلصة واللحم" },
    { id: 5, name: "جريش أبيض", type: "sakhanat", category: "السخانات", mainImage: "images/جريش ابيض.png", images: ["images/جريش ابيض.png"], description: "جريش أبيض باللبن واللحم" },
    { id: 6, name: "مرقوق", type: "sakhanat", category: "السخانات", mainImage: "images/مرقوق.png", images: ["images/مرقوق.png"], description: "المرقوق باللحم والخضار" },
    { id: 7, name: "مراصيع عادي", type: "sakhanat", category: "السخانات", mainImage: "images/مراصيع.png", images: ["images/مراصيع.png"], description: "المراصيع بالعسل" },
    { id: 8, name: "مراصيع بالخضار", type: "sakhanat", category: "السخانات", mainImage: "images/مراصيع خضار.png", images: ["images/مراصيع خضار.png"], description: "المراصيع بالخضار المشكلة" }
];

const sweetsProducts = [
    { id: 101, name: "بنت الصحن", type: "sweets", category: "الحلويات", mainImage: "images/بنت الصحن.png", images: ["images/بنت الصحن.png"], description: "بنت الصحن الحجازية بالعسل والسمن" },
    { id: 102, name: "فته تمر", type: "sweets", category: "الحلويات", mainImage: "images/فته تمر.png", images: ["images/فته تمر.png"], description: "فته التمر بالخبز والسمن" },
    { id: 103, name: "مرسه", type: "sweets", category: "الحلويات", mainImage: "images/مرسه.png", images: ["images/مرسه.png"], description: "المرسه باللبن والتمر" },
    { id: 104, name: "مفتوت", type: "sweets", category: "الحلويات", mainImage: "images/مفتوت.png", images: ["images/مفتوت.png"], description: "المفتوت بالسمن والحليب" },
    { id: 105, name: "نخله تمر", type: "sweets", category: "الحلويات", mainImage: "images/نخله تمر.png", images: ["images/نخله تمر.png"], description: "نخلة التمر الفاخر" },
    { id: 106, name: "معمول فاخر", type: "sweets", category: "الحلويات", mainImage: "images/معمول.png", images: ["images/معمول.png"], description: "المعمول بالتمر والفستق" },
    { id: 107, name: "خبز الدخن", type: "sweets", category: "الحلويات", mainImage: "images/خبز الدخن.png", images: ["images/خبز الدخن.png"], description: "خبز الدخن الصحي بالتمر" },
    { id: 108, name: "خبزة المله", type: "sweets", category: "الحلويات", mainImage: "images/خبز مله.png", images: ["images/خبز مله.png"], description: "خبز الملة التراثي" },
    { id: 109, name: "حنيني", type: "sweets", category: "الحلويات", mainImage: "images/حنيني.png", images: ["images/حنيني.png"], description: "الحنيني بالتمر والهيل" },
    { id: 110, name: "كبيبيا", type: "sweets", category: "الحلويات", mainImage: "images/كبيبيا.png", images: ["images/كبيبيا.png"], description: "الكبيبيا الحائلية" },
    { id: 111, name: "لبنيه", type: "sweets", category: "الحلويات", mainImage: "images/لبنيه.png", images: ["images/لبنيه.png"], description: "اللبنية باللبن والعسل" }
];

const allProducts = [...sakhanatProducts, ...sweetsProducts];

function displayProductsByType(type) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const filtered = allProducts.filter(p => p.type === type);
    grid.innerHTML = "";
    filtered.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <img class="product-image" src="${product.mainImage}" onerror="this.src='https://via.placeholder.com/280x160?text=${product.name}'" onclick="showDetails(${product.id})">
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
    showToast(`✅ تمت إضافة ${product.name} × ${qty}`, "success");
    if (qtySpan) qtySpan.innerText = "1";
}

function addPackageToCart(packageName) {
    const existing = cart.find(i => i.name === packageName);
    if (existing) existing.qty += 1;
    else cart.push({ id: Date.now(), name: packageName, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    showToast(`✅ تمت إضافة ${packageName}`, "success");
}

function updateCartDisplay() {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
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
        html += `<div class="cart-item"><div><div class="cart-item-name">${i.name}</div><div class="cart-item-qty">الكمية: ${i.qty}</div></div><button class="btn-remove" onclick="removeFromCart(${i.id})">🗑️ حذف</button></div>`;
    });
    container.innerHTML = html;
    document.getElementById("cartTotal").innerHTML = `🏕️ إجمالي القطع: ${total}`;
}

function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    showToast(`🗑️ تم حذف ${item.name}`, "success");
}

function sendOrder() {
    if (cart.length === 0) {
        showToast("⚠️ السلة فارغة!", "error");
        return;
    }
    let msg = "🏕️ مرحباً! أريد طلب من خيمة وتمرة 🏕️\n━━━━━━━━━━━━━━━━━━\n📋 طلبي:\n\n";
    cart.forEach(i => msg += `• ${i.name} × ${i.qty}\n`);
    msg += "\n━━━━━━━━━━━━━━━━━━\n👤 معلومات التوصيل:\nالاسم: \nالعنوان: \nرقم الجوال: \n\n※ ※ ※ ※ ※ ※ ※ ※ ※ ※\nتم الطلب عبر مطعم خيمة وتمرة\n📱 تيك توك: @khaymah_w_tamrah";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function showDetails(id) {
    const p = allProducts.find(p => p.id === id);
    if (!p) return;
    const modal = document.getElementById("detailsModal");
    const details = document.getElementById("modalDetails");
    let gallery = `<img class="main-image" id="mainModalImage" src="${p.mainImage}" onerror="this.src='https://via.placeholder.com/600x400?text=${p.name}'"><div class="image-gallery">`;
    p.images.forEach(img => gallery += `<img class="gallery-img" src="${img}" onclick="changeModalImage('${img}')">`);
    gallery += `</div>`;
    details.innerHTML = `${gallery}<h2>${p.name}</h2><div class="details-description"><strong>📝 الوصف:</strong><br>${p.description}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})">➕ أضف للسلة</button></div>`;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
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
    showToast(`✅ تمت إضافة ${p.name} × ${qty}`, "success");
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
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

window.onclick = function(e) {
    if (e.target === document.getElementById("detailsModal")) closeModal();
    if (e.target === document.getElementById("cartOverlay")) toggleCart();
};

updateCartDisplay();
