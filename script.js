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

// ========== السخانات ==========
const sakhanatProducts = [
    { id: 1, name: "حنيني", type: "sakhanat", category: "السخانات", mainImage: "images/حنيني.png", images: ["images/حنيني.png"], description: "" },
    { id: 2, name: "صحن مشكل مراصيع مع ميني ملة", type: "sakhanat", category: "السخانات", mainImage: "images/صحن مشكل مله محشيه مع المراصيع.png", images: ["images/صحن مشكل مله محشيه مع المراصيع.png"], description: "" },
    { id: 3, name: "صحن مشكل مله محشيه مع المراصيع (كبير)", type: "sakhanat", category: "السخانات", mainImage: "images/صحن مشكل مله محشيه مع المراصيع (كبير).png", images: ["images/صحن مشكل مله محشيه مع المراصيع (كبير).png"], description: "" },
    { id: 4, name: "مشغوثة (عيش جنوبي)", type: "sakhanat", category: "السخانات", mainImage: "images/مشغوثه.png", images: ["images/مشغوثه.png"], description: "" },
    { id: 5, name: "عريكة جنوبية", type: "sakhanat", category: "السخانات", mainImage: "images/عريكه.png", images: ["images/عريكه.png"], description: "" },
    { id: 6, name: "عصيدة حساوية", type: "sakhanat", category: "السخانات", mainImage: "images/عصيده.png", images: ["images/عصيده.png"], description: "" },
    { id: 7, name: "عصيدة", type: "sakhanat", category: "السخانات", mainImage: "images/عصيده.png", images: ["images/عصيده.png"], description: "" },
    { id: 8, name: "جريش أبيض", type: "sakhanat", category: "السخانات", mainImage: "images/جريش ابيض.png", images: ["images/جريش ابيض.png"], description: "" },
    { id: 9, name: "جريش أحمر", type: "sakhanat", category: "السخانات", mainImage: "images/جريش احمر.png", images: ["images/جريش احمر.png"], description: "" },
    { id: 10, name: "خبز ملة", type: "sakhanat", category: "السخانات", mainImage: "images/خبز مله.png", images: ["images/خبز مله.png"], description: "" },
    { id: 11, name: "مراصيع (مصابيب)", type: "sakhanat", category: "السخانات", mainImage: "images/مراصيع.png", images: ["images/مراصيع.png"], description: "" },
    { id: 12, name: "مرسه", type: "sakhanat", category: "السخانات", mainImage: "images/مرسه.png", images: ["images/مرسه.png"], description: "" },
    { id: 13, name: "فته تمر", type: "sakhanat", category: "السخانات", mainImage: "images/فته تمر.png", images: ["images/فته تمر.png"], description: "" },
    { id: 14, name: "مفتوت سمن وحليب", type: "sakhanat", category: "السخانات", mainImage: "images/مفتوت.png", images: ["images/مفتوت.png"], description: "" },
    { id: 15, name: "مرقوق", type: "sakhanat", category: "السخانات", mainImage: "images/مرقوق.png", images: ["images/مرقوق.png"], description: "" },
    { id: 16, name: "مطازيز (القرصان)", type: "sakhanat", category: "السخانات", mainImage: "images/مطازيز.png", images: ["images/مطازيز.png"], description: "" },
    { id: 17, name: "الميقعه", type: "sakhanat", category: "السخانات", mainImage: "images/الميقعه.png", images: ["images/الميقعه.png"], description: "" },
    { id: 18, name: "المليحيه", type: "sakhanat", category: "السخانات", mainImage: "images/المليحيه.png", images: ["images/المليحيه.png"], description: "" },
    { id: 19, name: "مفلق", type: "sakhanat", category: "السخانات", mainImage: "images/مفلق.png", images: ["images/مفلق.png"], description: "" },
    { id: 20, name: "مفروكه بالسمن والعسل", type: "sakhanat", category: "السخانات", mainImage: "images/مفروكه.png", images: ["images/مفروكه.png"], description: "" },
    { id: 21, name: "مراصيع بالخضار", type: "sakhanat", category: "السخانات", mainImage: "images/مراصيع خضار.png", images: ["images/مراصيع خضار.png"], description: "" },
    { id: 22, name: "أرز كبسة", type: "sakhanat", category: "السخانات", mainImage: "images/ارز كبسة.png", images: ["images/ارز كبسة.png"], description: "" },
    { id: 23, name: "أرز مضغوط", type: "sakhanat", category: "السخانات", mainImage: "images/ارز مضغوط.png", images: ["images/ارز مضغوط.png"], description: "" },
    { id: 24, name: "أرز برياني", type: "sakhanat", category: "السخانات", mainImage: "images/ارز برياني.png", images: ["images/ارز برياني.png"], description: "" },
    { id: 25, name: "أرز كشري", type: "sakhanat", category: "السخانات", mainImage: "images/ارز كشري.png", images: ["images/ارز كشري.png"], description: "" },
    { id: 26, name: "أرز سليق", type: "sakhanat", category: "السخانات", mainImage: "images/ارز سليق.png", images: ["images/ارز سليق.png"], description: "" },
    { id: 27, name: "أرز مندي", type: "sakhanat", category: "السخانات", mainImage: "images/ارز مندي.png", images: ["images/ارز مندي.png"], description: "" },
    { id: 28, name: "أرز معدوس", type: "sakhanat", category: "السخانات", mainImage: "images/ارز معدوس.png", images: ["images/ارز معدوس.png"], description: "" },
    { id: 29, name: "مكرونة باشميل", type: "sakhanat", category: "السخانات", mainImage: "images/مكرونة باشميل.png", images: ["images/مكرونة باشميل.png"], description: "" },
    { id: 30, name: "مكرونة كانالوني جبنه", type: "sakhanat", category: "السخانات", mainImage: "images/مكرونة كانالوني.png", images: ["images/مكرونة كانالوني.png"], description: "" },
    { id: 31, name: "مكرونة لازانيا لحم", type: "sakhanat", category: "السخانات", mainImage: "images/مكرونة لازانيا.png", images: ["images/مكرونة لازانيا.png"], description: "" },
    { id: 32, name: "مكرونة فتوش بالسبانخ", type: "sakhanat", category: "السخانات", mainImage: "images/مكرونة فتوش.png", images: ["images/مكرونة فتوش.png"], description: "" },
    { id: 33, name: "مكرونة سباغيتي", type: "sakhanat", category: "السخانات", mainImage: "images/مكرونة سباغيتي.png", images: ["images/مكرونة سباغيتي.png"], description: "" },
    { id: 34, name: "كبه (دجاج - لحم - خضار)", type: "sakhanat", category: "السخانات", mainImage: "images/كبه.png", images: ["images/كبه.png"], description: "" },
    { id: 35, name: "يخنة لحم", type: "sakhanat", category: "السخانات", mainImage: "images/يخنة لحم.png", images: ["images/يخنة لحم.png"], description: "" },
    { id: 36, name: "يخنة بطاطس", type: "sakhanat", category: "السخانات", mainImage: "images/يخنة بطاطس.png", images: ["images/يخنة بطاطس.png"], description: "" },
    { id: 37, name: "يخنة بامية", type: "sakhanat", category: "السخانات", mainImage: "images/يخنة بامية.png", images: ["images/يخنة بامية.png"], description: "" },
    { id: 38, name: "يخنة فاصوليا", type: "sakhanat", category: "السخانات", mainImage: "images/يخنة فاصوليا.png", images: ["images/يخنة فاصوليا.png"], description: "" },
    { id: 39, name: "مفلج بالحمص", type: "sakhanat", category: "السخانات", mainImage: "images/مفلج بالحمص.png", images: ["images/مفلج بالحمص.png"], description: "" },
    { id: 40, name: "معرق لحم", type: "sakhanat", category: "السخانات", mainImage: "images/معرق لحم.png", images: ["images/معرق لحم.png"], description: "" },
    { id: 41, name: "ورق عنب", type: "sakhanat", category: "السخانات", mainImage: "images/ورق عنب.png", images: ["images/ورق عنب.png"], description: "" },
    { id: 42, name: "بكيله", type: "sakhanat", category: "السخانات", mainImage: "images/بكيله.png", images: ["images/بكيله.png"], description: "" },
    { id: 43, name: "قشد ملكي", type: "sakhanat", category: "السخانات", mainImage: "images/قشد ملكي.png", images: ["images/قشد ملكي.png"], description: "" },
    { id: 44, name: "بنت الصحن", type: "sakhanat", category: "السخانات", mainImage: "images/بنت الصحن.png", images: ["images/بنت الصحن.png"], description: "" },
    { id: 45, name: "فطائر محشيه", type: "sakhanat", category: "السخانات", mainImage: "images/فطائر محشيه.png", images: ["images/فطائر محشيه.png"], description: "" },
    { id: 46, name: "ميني مله محشيه", type: "sakhanat", category: "السخانات", mainImage: "images/ميني مله.png", images: ["images/ميني مله.png"], description: "" }
];

// ========== الحلويات ==========
const sweetsProducts = [
    { id: 101, name: "خلية نحل", type: "sweets", category: "الحلويات", mainImage: "images/خليه نحل.png", images: ["images/خليه نحل.png"], description: "" },
    { id: 102, name: "معمول", type: "sweets", category: "الحلويات", mainImage: "images/معمول.png", images: ["images/معمول.png"], description: "" },
    { id: 103, name: "قطايف محشية", type: "sweets", category: "الحلويات", mainImage: "images/قطايف.png", images: ["images/قطايف.png"], description: "" },
    { id: 104, name: "لقيمات", type: "sweets", category: "الحلويات", mainImage: "images/لقيمات.png", images: ["images/لقيمات.png"], description: "" },
    { id: 105, name: "لبنيه", type: "sweets", category: "الحلويات", mainImage: "images/لبنيه.png", images: ["images/لبنيه.png"], description: "" },
    { id: 106, name: "أصابع زينب", type: "sweets", category: "الحلويات", mainImage: "images/اصابع زينب.png", images: ["images/اصابع زينب.png"], description: "" },
    { id: 107, name: "ام علي", type: "sweets", category: "الحلويات", mainImage: "images/ام علي.png", images: ["images/ام علي.png"], description: "" },
    { id: 108, name: "رز بالحليب", type: "sweets", category: "الحلويات", mainImage: "images/رز بالحليب.png", images: ["images/رز بالحليب.png"], description: "" },
    { id: 109, name: "كيكة الدخن بالتمر", type: "sweets", category: "الحلويات", mainImage: "images/كيكة الدخن.png", images: ["images/كيكة الدخن.png"], description: "" },
    { id: 110, name: "كور التمر المحشيه بالطحينه", type: "sweets", category: "الحلويات", mainImage: "images/كور التمر.png", images: ["images/كور التمر.png"], description: "" },
    { id: 111, name: "تمريه جنوبيه", type: "sweets", category: "الحلويات", mainImage: "images/تمريه جنوبيه.png", images: ["images/تمريه جنوبيه.png"], description: "" },
    { id: 112, name: "بسبوسة سادة", type: "sweets", category: "الحلويات", mainImage: "images/بسبوسة.png", images: ["images/بسبوسة.png"], description: "" },
    { id: 113, name: "بسبوسة بالقشطة", type: "sweets", category: "الحلويات", mainImage: "images/بسبوسة قشطة.png", images: ["images/بسبوسة قشطة.png"], description: "" },
    { id: 114, name: "الغريبية", type: "sweets", category: "الحلويات", mainImage: "images/غريبية.png", images: ["images/غريبية.png"], description: "" },
    { id: 115, name: "شعثه", type: "sweets", category: "الحلويات", mainImage: "images/شعثه.png", images: ["images/شعثه.png"], description: "" }
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
    details.innerHTML = `${gallery}<h2>${p.name}</h2><div class="details-description"><strong>📝 الوصف:</strong><br>${p.description || "لا يوجد وصف حالياً"}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})">➕ أضف للسلة</button></div>`;
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

// ========== تبديل الوضع المظلم ==========
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // تغيير أيقونة الزر
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    }
}

// تحميل الوضع المخزن
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    }
} else {
    // افتراضي: الوضع الفاتح
    document.documentElement.setAttribute('data-theme', 'light');
}