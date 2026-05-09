const WHATSAPP_NUMBER = "0539836477";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const toggleIcon = document.querySelector('.theme-toggle i');
        if (toggleIcon) toggleIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
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

function toggleTheme() {
    const html = document.documentElement;
    const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    const toggleIcon = document.querySelector('.theme-toggle i');
    if (toggleIcon) toggleIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// ========== منتجات السخانات (34 صنفاً - تم اختصارها هنا للمساحة، يمكنك إضافة الباقي بنفس النمط) ==========
const sakhanatProducts = [
    { id: 1, name: "حنيني", type: "sakhanat", category: "سخانات", mainImage: "images/حنيني.png", images: ["images/حنيني.png"], description: "حنيني تقليدي لذيذ" },
    { id: 2, name: "مشغوثة (عيش جنوبي)", type: "sakhanat", category: "سخانات", mainImage: "images/مشغوثه.png", images: ["images/مشغوثه.png"], description: "" },
    // أضف باقي منتجات السخانات هنا بنفس البنية...
];

// ========== منتجات الصحون ==========
const sohonProducts = [
    { id: 201, name: "صحن مشكل مراصيع مع ميني ملة", type: "sohon", category: "صحون", mainImage: "images/صحن مشكل مله محشيه مع المراصيع.png", images: ["images/صحن مشكل مله محشيه مع المراصيع.png"], description: "صحن تراثي يجمع بين المراصيع والمله المحشية" },
    { id: 202, name: "صحن مشكل مله محشيه مع المراصيع (كبير)", type: "sohon", category: "صحون", mainImage: "images/صحن مشكل مله محشيه مع المراصيع (كبير).png", images: ["images/صحن مشكل مله محشيه مع المراصيع (كبير).png"], description: "حجم كبير مناسب للعزائم" },
    // باقي منتجات الصحون...
];

// ========== منتجات تجهيزات المناسبات ==========
const eventsProducts = [
    { id: 301, name: "كراسي فاخرة - 24 كرسي", type: "events", category: "تأجير", mainImage: "images/chairs1.jpg", images: ["images/chairs1.jpg", "images/chairs2.jpg"], description: "كراسي ذهبية فاخرة عدد 24 كرسي، مناسبة للأفراح والعزاء. لون ذهبي مع وسادة حمراء." },
    { id: 302, name: "طاولات كبيرة - 12 طاولة", type: "events", category: "تأجير", mainImage: "images/tables1.jpg", images: ["images/tables1.jpg"], description: "طاولات خشبية كبيرة قطر 120 سم، عدد 12 طاولة، مثالية للولائم الكبيرة." },
    { id: 303, name: "مظلات وخيام صغيرة - 8 قطع", type: "events", category: "تأجير", mainImage: "images/umbrellas1.jpg", images: ["images/umbrellas1.jpg"], description: "مظلات وخيام للتظليل مقاس 3×3 متر، عدد 8 خيام." },
    { id: 304, name: "أدوات مائدة كاملة (50 شخص)", type: "events", category: "تأجير", mainImage: "images/cutlery.jpg", images: ["images/cutlery.jpg"], description: "صحون، أكواب، ملاعق وشوك لـ 50 شخص، خدمة كاملة." },
    { id: 305, name: "بطانيات وسجاد للعزاء - 50 قطعة", type: "events", category: "تأجير", mainImage: "images/blankets.jpg", images: ["images/blankets.jpg"], description: "بطانيات وسجاد أرضي مريح، عدد 50 قطعة مناسبة للمجالس التراثية." },
    { id: 306, name: "إضاءة وديكور (12 لمبة LED)", type: "events", category: "تأجير", mainImage: "images/lights.jpg", images: ["images/lights.jpg"], description: "أضواء ليد ملونة وزينة للمناسبات السعيدة، طقم كامل 12 لمبة." }
];

const allProducts = [...sakhanatProducts, ...sohonProducts, ...eventsProducts];

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
    else cart.push({ id: product.id, name: product.name + " (" + product.category + ")", qty: qty });
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
    msg += "\n━━━━━━━━━━━━━━━━━━\n👤 معلومات التوصيل:\nالاسم: \nالعنوان: \nرقم الجوال: \n\n※ ※ ※ ※ ※ ※ ※ ※ ※ ※\nتم الطلب عبر خيمة وتمرة\n📱 تيك توك: @khaymah_w_tamrah";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function showDetails(id) {
    const p = allProducts.find(p => p.id === id);
    if (!p) return;
    const modal = document.getElementById("detailsModal");
    const detailsDiv = document.getElementById("modalDetails");
    let gallery = `<img class="main-image" id="mainModalImage" src="${p.mainImage}" onerror="this.src='https://via.placeholder.com/400?text=${p.name}'"><div class="image-gallery">`;
    (p.images || [p.mainImage]).forEach(img => {
        gallery += `<img class="gallery-img" src="${img}" onclick="changeModalImage('${img}')" onerror="this.style.display='none'">`;
    });
    gallery += `</div>`;
    const desc = p.description && p.description.trim() !== "" ? p.description : "لا يوجد وصف تفصيلي لهذا المنتج حاليًا. يرجى التواصل معنا للمزيد من المعلومات.";
    detailsDiv.innerHTML = `${gallery}<h2>${p.name}</h2><div class="details-description"><strong>📝 الوصف:</strong><br>${desc}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})">➕ أضف للسلة</button></div>`;
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
    else cart.push({ id: p.id, name: p.name + " (" + p.category + ")", qty: qty });
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