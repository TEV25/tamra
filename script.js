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

    updateCartDisplay();

    // Swipe to close cart for mobile
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        let touchStartX = 0;
        let touchEndX = 0;
        cartSidebar.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        cartSidebar.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50 && cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }, { passive: true });
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

// ========== منتجات السخانات ==========
const sakhanatProducts = [
    { id: 1, name: "حنيني", type: "sakhanat", category: "سخانات", mainImage: "images/حنيني.webp", images: ["images/حنيني.webp"], description: "حنيني تقليدي لذيذ" },
    { id: 2, name: "مشغوثة (عيش جنوبي)", type: "sakhanat", category: "سخانات", mainImage: "images/مشغوثه.webp", images: ["images/مشغوثه.webp"], description: "" },
    { id: 3, name: "عريكة جنوبية", type: "sakhanat", category: "سخانات", mainImage: "images/عريكه.webp", images: ["images/عريكه.webp"], description: "" },
    { id: 4, name: "عصيدة حساوية", type: "sakhanat", category: "سخانات", mainImage: "images/عصيده حساويه.webp", images: ["images/عصيده حساويه.webp"], description: "" },
    { id: 5, name: "عصيدة", type: "sakhanat", category: "سخانات", mainImage: "images/عصيده.webp", images: ["images/عصيده.webp"], description: "" },
    { id: 6, name: "جريش أبيض", type: "sakhanat", category: "سخانات", mainImage: "images/جريش ابيض.webp", images: ["images/جريش ابيض.webp"], description: "" },
    { id: 7, name: "جريش أحمر", type: "sakhanat", category: "سخانات", mainImage: "images/جريش احمر.webp", images: ["images/جريش احمر.webp"], description: "" },
    { id: 8, name: "مرسه", type: "sakhanat", category: "سخانات", mainImage: "images/مرسه.webp", images: ["images/مرسه.webp"], description: "" },
    { id: 9, name: "فته تمر", type: "sakhanat", category: "سخانات", mainImage: "images/فته تمر.webp", images: ["images/فته تمر.webp"], description: "" },
    { id: 10, name: "مفتوت سمن وحليب", type: "sakhanat", category: "سخانات", mainImage: "images/مفتوت بالسمن والحليب.webp", images: ["images/مفتوت بالسمن والحليب.webp"], description: "" },
    { id: 11, name: "مرقوق", type: "sakhanat", category: "سخانات", mainImage: "images/مرقوق.webp", images: ["images/مرقوق.webp"], description: "" },
    { id: 12, name: "قرصان", type: "sakhanat", category: "سخانات", mainImage: "images/قرصان.webp", images: ["images/قرصان.webp"], description: "" },
    { id: 13, name: "الميقعه", type: "sakhanat", category: "سخانات", mainImage: "images/الميقعه.webp", images: ["images/الميقعه.webp"], description: "" },
    { id: 14, name: "المليحيه", type: "sakhanat", category: "سخانات", mainImage: "images/المليحيه.webp", images: ["images/المليحيه.webp"], description: "" },
    { id: 15, name: "مفلق", type: "sakhanat", category: "سخانات", mainImage: "images/مفلق.webp", images: ["images/مفلق.webp"], description: "" },
    { id: 16, name: "مفروكه بالسمن والعسل", type: "sakhanat", category: "سخانات", mainImage: "images/مفروكه بالسمن والعسل.webp", images: ["images/مفروكه بالسمن والعسل.webp"], description: "" },
    { id: 17, name: "مراصيع بالخضار", type: "sakhanat", category: "سخانات", mainImage: "images/مراصيع بالخضار.webp", images: ["images/مراصيع بالخضار.webp"], description: "" },
    { id: 18, name: "مكرونة باشميل", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونه باشميل.webp", images: ["images/مكرونه باشميل.webp"], description: "" },
    { id: 19, name: "مكرونة كانالوني جبنه", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونه كانالوني.webp", images: ["images/مكرونه كانالوني.webp"], description: "" },
    { id: 20, name: "مكرونة لازانيا لحم", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونه لازانيا.webp", images: ["images/مكرونه لازانيا.webp"], description: "" },
    { id: 21, name: "مكرونة فتوش بالسبانخ", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونه فتوش بالسبانخ.webp", images: ["images/مكرونه فتوش بالسبانخ.webp"], description: "" },
    { id: 22, name: "مكرونة سباغيتي (عادي - باللحم)", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونه سباغيتي.webp", images: ["images/مكرونه سباغيتي.webp"], description: "" },
    { id: 23, name: "ادام (لحم - بطاطس - رجله - مشكل - بامية - فاصوليا)", type: "sakhanat", category: "سخانات", mainImage: "images/ادام.webp", images: ["images/ادام لحم.webp", "images/ادام بطاطس.webp", "images/ادام رجله.webp", "images/ادام مشكل.webp", "images/ادام بامية.webp", "images/ادام فاصوليا.webp"], description: "" },
    { id: 24, name: "مفلج", type: "sakhanat", category: "سخانات", mainImage: "images/مفلج.webp", images: ["images/مفلج.webp"], description: "" },
    { id: 25, name: "معرق لحم", type: "sakhanat", category: "سخانات", mainImage: "images/معرق لحم.webp", images: ["images/معرق لحم.webp"], description: "" },
    { id: 26, name: "قشد ملكي", type: "sakhanat", category: "سخانات", mainImage: "images/قشد ملكي.webp", images: ["images/قشد ملكي.webp"], description: "" },
    { id: 27, name: "لقيمات", type: "sakhanat", category: "سخانات", mainImage: "images/لقيمات.webp", images: ["images/لقيمات.webp"], description: "" },
    { id: 28, name: "ام علي", type: "sakhanat", category: "سخانات", mainImage: "images/ام علي.webp", images: ["images/ام علي.webp"], description: "" },
    { id: 29, name: "رز بالحليب", type: "sakhanat", category: "سخانات", mainImage: "images/ارز بالحليب.webp", images: ["images/ارز بالحليب.webp"], description: "" }
];

// ========== منتجات الصحون ==========
const sohonProducts = [
    { id: 201, name: "صحن مشكل مراصيع مع ميني ملة", type: "sohon", category: "صحون", mainImage: "images/صحن مشكل مله محشيه مع المراصيع.webp", images: ["images/صحن مشكل مله محشيه مع المراصيع.webp"], description: "صحن تراثي يجمع بين المراصيع والمله المحشية" },
    { id: 202, name: "صحن مشكل مله محشيه مع المراصيع (كبير)", type: "sohon", category: "صحون", mainImage: "images/صحن مشكل مله محشيه مع المراصيع (كبير).webp", images: ["images/صحن مشكل مله محشيه مع المراصيع (كبير).webp"], description: "حجم كبير مناسب للعزائم" },
    { id: 203, name: "خبز ملة", type: "sohon", category: "صحون", mainImage: "images/خبز مله.webp", images: ["images/خبز مله.webp"], description: "" },
    { id: 204, name: "مراصيع - مصابيب (بالسمن والعسل)", type: "sohon", category: "صحون", mainImage: "images/مراصيع.webp", images: ["images/مراصيع.webp"], description: "" },
    { id: 206, name: "كبه (دجاج و لحم و خضار)", type: "sohon", category: "صحون", mainImage: "images/كبه.webp", images: ["images/كبه.webp"], description: "" },
    { id: 207, name: "بنت الصحن", type: "sohon", category: "صحون", mainImage: "images/بنت الصحن.webp", images: ["images/بنت الصحن.webp"], description: "" },
    { id: 208, name: "ميني مله محشيه", type: "sohon", category: "صحون", mainImage: "images/ميني مله محشيه.webp", images: ["images/ميني مله محشيه.webp"], description: "" },
    { id: 209, name: "خلية نحل", type: "sohon", category: "صحون", mainImage: "images/خليه نحل.webp", images: ["images/خليه نحل.webp"], description: "" },
    { id: 210, name: "معمول", type: "sohon", category: "صحون", mainImage: "images/معمول.webp", images: ["images/معمول.webp"], description: "" },
    { id: 211, name: "قطايف محشية", type: "sohon", category: "صحون", mainImage: "images/قطايف محشيه بالقشطه.webp", images: ["images/قطايف محشيه بالقشطه.webp"], description: "" },
    { id: 212, name: "لبنيه", type: "sohon", category: "صحون", mainImage: "images/لبنيه.webp", images: ["images/لبنيه.webp"], description: "" },
    { id: 213, name: "أصابع زينب", type: "sohon", category: "صحون", mainImage: "images/اصابع زينب.webp", images: ["images/اصابع زينب.webp"], description: "" },
    { id: 214, name: "كيكة الدخن بالتمر", type: "sohon", category: "صحون", mainImage: "images/كيكة الدخن.webp", images: ["images/كيكة الدخن.webp"], description: "" },
    { id: 215, name: "كور التمر المحشيه بالطحينه", type: "sohon", category: "صحون", mainImage: "images/كور التمر.webp", images: ["images/كور التمر.webp"], description: "" },
    { id: 216, name: "تمريه جنوبيه", type: "sohon", category: "صحون", mainImage: "images/تمريه جنوبيه.webp", images: ["images/تمريه جنوبيه.webp"], description: "" },
    { id: 217, name: "بسبوسة (سادة - بالقشطة)", type: "sohon", category: "صحون", mainImage: "images/بسبوسة.webp", images: ["images/بسبوسة.webp"], description: "" },
    { id: 218, name: "الغريبية", type: "sohon", category: "صحون", mainImage: "images/غريبية.webp", images: ["images/غريبية.webp"], description: "" },
    { id: 219, name: "شعثه", type: "sohon", category: "صحون", mainImage: "images/شعثه.webp", images: ["images/شعثه.webp"], description: "" },
    { id: 220, name: "مراصيع عادي", type: "sohon", category: "صحون", mainImage: "images/مراصيع.webp", images: ["images/مراصيع.webp"], description: "مراصيع عادي بالسمن والعسل" },
    { id: 205, name: "ارز (كبسه - مضغوط - لحم دجاج - برياني - كشري - سليق - مندي - معدوس)", type: "sohon", category: "صحون", mainImage: "images/ارز كبسة.webp", images: ["images/ارز كبسة.webp"], description: "يشمل: كبسة، مضغوط، لحم دجاج، برياني، كشري، سليق، مندي، معدوس" }
];

// ========== منتجات تجهيزات المناسبات ==========
const eventsProducts = [
    {
        id: 316,
        name: "مباشرين ومباشرات",
        type: "events",
        category: "تجهيزات المناسبات",
        mainImage: "images/مباشرين ومباشرات.webp",
        images: [
            "images/مباشرين ومباشرات (1).webp",
            "images/مباشرين ومباشرات (2).webp",
            "images/مباشرين ومباشرات (3).webp",
            "images/مباشرين ومباشرات (4).webp"
        ],
        description: ""
    },
    { id: 301, name: "كراسي ملبسه و بدون ", type: "events", category: "تجهيزات المناسبات", mainImage: "images/كراسي ملبسه و بدون (1).webp", images: ["images/كراسي ملبسه و بدون (2).webp", "images/كراسي ملبسه و بدون (1).webp"], description: "" },
    { id: 303, name: "طاوله كبير", type: "events", category: "تجهيزات المناسبات", mainImage: "images/طاوله كبير.webp", images: ["images/طاوله كبير.webp"], description: "" },
    { id: 304, name: "طاولات فرديه", type: "events", category: "تجهيزات المناسبات", mainImage: "images/طاولات فردية.webp", images: ["images/طاولات فردية.webp"], description: "" },
    { id: 305, name: "كرسي ملكي", type: "events", category: "تجهيزات المناسبات", mainImage: "images/كراسي ملكي.webp", images: ["images/كرسي ملكي.webp"], description: "" },
    { id: 306, name: "كراسي VIP", type: "events", category: "تجهيزات المناسبات", mainImage: "images/كراسي vip (1).webp", images: ["images/كراسي vip (1).webp", "images/كراسي vip (2).webp", "images/كراسي vip (3).webp"], description: "" },
    { id: 307, name: "فرشات", type: "events", category: "تجهيزات المناسبات", mainImage: "images/فرشات.webp", images: ["images/فرشات.webp"], description: "" },
    { id: 308, name: "ممر بنفسجي", type: "events", category: "تجهيزات المناسبات", mainImage: "images/ممر بنفسجي.webp", images: ["images/ممر بنفسجي.webp"], description: "" },
    { id: 309, name: "عقود إضاءه", type: "events", category: "تجهيزات المناسبات", mainImage: "images/عقود اضاءه.webp", images: ["images/عقود اضاءه.webp"], description: "" },
    { id: 310, name: "ستيج", type: "events", category: "تجهيزات المناسبات", mainImage: "images/ستيج.webp", images: ["images/ستيج.webp"], description: "" },
    { id: 311, name: "سماعات", type: "events", category: "تجهيزات المناسبات", mainImage: "images/سماعات.webp", images: ["images/سماعات.webp"], description: "" },
    { id: 312, name: "مراوح", type: "events", category: "تجهيزات المناسبات", mainImage: "images/مراوح.webp", images: ["images/مراوح.webp"], description: "" },
    { id: 313, name: "مكيفات صحراويه", type: "events", category: "تجهيزات المناسبات", mainImage: "images/مكيفات صحراويه.webp", images: ["images/مكيفات صحراويه.webp"], description: "" },
    { id: 314, name: "دي جي", type: "events", category: "تجهيزات المناسبات", mainImage: "images/ديجي DJ.webp", images: ["images/ديجي DJ.webp"], description: "" },
    { id: 315, name: "كوش", type: "events", category: "تجهيزات المناسبات", mainImage: "images/كوش.webp", images: ["images/كوش.webp"], description: "" }
];

// ========== منتجات القهوة والضيافة ==========
const beveragesProducts = [
    { id: 401, name: "قهوة عربية فاخرة", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 402, name: "شاهي أحمر", type: "beverages", category: "القهوة والضيافة", description: "بالنعناع والحبق" },
    { id: 403, name: "زنجبيل بالأناناس", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 404, name: "شاي أخضر", type: "beverages", category: "القهوة والضيافة", description: "عادي أو بالنعناع" },
    { id: 405, name: "شاهي بالزعتر", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 406, name: "شاهي طائفي", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 407, name: "شاهي كرك", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 408, name: "يانسون", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 409, name: "زنجبيل بالعسل", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 410, name: "زنجبيل بالليمون", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 411, name: "كركديه", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 412, name: "شاهي الورد الأزرق", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 413, name: "رمان ساخن", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 414, name: "فواكه مشكلة ساخنة", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 415, name: "مانجا ساخنة", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 416, name: "قهوة تركي", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 417, name: "كابتشينو", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 418, name: "آيس كوفي", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 419, name: "سبانيش لاتيه", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 420, name: "سحلب", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 421, name: "هوت شوكليت", type: "beverages", category: "القهوة والضيافة", description: "" },
    { id: 422, name: "موهيتو", type: "beverages", category: "القهوة والضيافة", description: "" },
    // المشروبات الباردة
    { id: 423, name: "جوافه", type: "beverages", category: "المشروبات الباردة", description: "" },
    { id: 424, name: "كوكتيل", type: "beverages", category: "المشروبات الباردة", description: "" },
    { id: 425, name: "أفوكادو", type: "beverages", category: "المشروبات الباردة", description: "" },
    { id: 426, name: "فراوله", type: "beverages", category: "المشروبات الباردة", description: "" },
    { id: 427, name: "رمان", type: "beverages", category: "المشروبات الباردة", description: "" }
];

const allProducts = [...sakhanatProducts, ...sohonProducts, ...eventsProducts, ...beveragesProducts];

function displayProductsByType(type) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const filtered = allProducts.filter(p => p.type === type);

    if (type === "beverages") {
        const hotDrinks = filtered.filter(p => p.category === "القهوة والضيافة");
        const coldDrinks = filtered.filter(p => p.category === "المشروبات الباردة");

        let hotHTML = `<h2 class="beverages-section-title">القهوة والضيافة</h2>`;
        let coldHTML = `<h2 class="beverages-section-title cold">المشروبات الباردة</h2>`;

        function createDrinkCard(product) {
            const showDescription = (product.name === "شاهي أحمر" || product.name === "شاي أخضر");
            return `
            <div class="product-card">
                <div class="product-image beverage-name-only">
                    <div class="beverage-title">${product.name}</div>
                    ${showDescription || product.description ? `<div class="beverage-subtitle">${product.description}</div>` : ''}
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="changeQuantity(${product.id},-1)">−</button>
                        <span class="quantity-value" id="qty_${product.id}">1</span>
                        <button class="quantity-btn" onclick="changeQuantity(${product.id},1)">+</button>
                    </div>
                    <button class="btn-add" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> أضف للسلة
                    </button>
                </div>
            </div>
            `;
        }

        hotDrinks.forEach(product => hotHTML += createDrinkCard(product));
        coldDrinks.forEach(product => coldHTML += createDrinkCard(product));

        grid.innerHTML = hotHTML + coldHTML;
        updateCartDisplay();
        return;
    }

    let html = "";
    filtered.forEach(product => {
        const hideQty = (type === 'events');
        let imageHtml = '';

        if (product.icon) {
            imageHtml = `<div class="product-image" style="background: var(--bg-secondary); display: flex; align-items: center; justify-content: center;"><i class="${product.icon}" style="font-size: 4rem; color: var(--gold);"></i></div>`;
        } else {
            imageHtml = `<img class="product-image" src="${product.mainImage}" loading="lazy" decoding="async" onerror="this.src='https://via.placeholder.com/300x300?text=${encodeURIComponent(product.name)}'" onclick="showDetails(${product.id})">`;
        }

        html += `
            <div class="product-card">
                ${imageHtml}
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <div class="product-actions">
                    ${type !== "beverages" ? `
                        <button class="btn-details" onclick="showDetails(${product.id})"><i class="fas fa-info-circle"></i> تفاصيل</button>
                    ` : ''}
                    ${!hideQty ? `
                        <div class="quantity-selector">
                            <button class="quantity-btn" onclick="changeQuantity(${product.id},-1)">−</button>
                            <span class="quantity-value" id="qty_${product.id}">1</span>
                            <button class="quantity-btn" onclick="changeQuantity(${product.id},1)">+</button>
                        </div>
                    ` : ''}
                    <button class="btn-add" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> أضف للسلة</button>
                </div>
            </div>
        `;
    });
    grid.innerHTML = html;
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
    let qty = 1;
    const qtySpan = document.getElementById(`qty_${id}`);
    if (qtySpan) qty = parseInt(qtySpan.innerText);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id: product.id, name: `${product.name} (${product.category})`, qty: qty });
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
        const cartTotalElement = document.getElementById("cartTotal");
        if (cartTotalElement) cartTotalElement.innerHTML = "";
        return;
    }

    let html = "";
    cart.forEach(i => {
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${i.name}</div>
                    <div class="cart-item-qty">الكمية: ${i.qty}</div>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${i.id})"><i class="fas fa-trash-alt"></i> حذف</button>
            </div>
        `;
    });
    container.innerHTML = html;
    const cartTotalElement = document.getElementById("cartTotal");
    if (cartTotalElement) cartTotalElement.innerHTML = `🏕️ إجمالي القطع: ${total}`;

    // Add clear cart button if not already exists
    if (!document.querySelector('.btn-clear-cart')) {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'btn-clear-cart';
        clearBtn.innerHTML = '🗑️ تفريغ السلة';
        clearBtn.onclick = () => clearCart();
        const checkoutBtn = document.querySelector('.btn-checkout');
        if (checkoutBtn) checkoutBtn.insertAdjacentElement('afterend', clearBtn);
    }
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
    showToast("🗑️ تم تفريغ السلة بنجاح", "success");
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
    let msg = `🏕️ طلب جديد من خيمة وتمرة 🏕️\n━━━━━━━━━━━━━━━━━━\n📦 المنتجات:\n\n`;
    cart.forEach(i => msg += `• ${i.name} × ${i.qty}\n`);
    msg += `\n━━━━━━━━━━━━━━━━━━\n👤 معلومات العميل:\nالاسم: \nالعنوان: \nرقم الجوال: \n\n━━━━━━━━━━━━━━━━━━\n📱 TikTok: @khaymah_w_tamrah\n※ ※ ※ ※ ※ ※ ※ ※ ※ ※`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

function showDetails(id) {
    const p = allProducts.find(p => p.id === id);
    if (!p) return;
    const modal = document.getElementById("detailsModal");
    const detailsDiv = document.getElementById("modalDetails");
    let gallery = '';
    if (p.type === "beverages") {
        gallery = `<div class="main-image beverage-name-only" style="min-height: 200px; display: flex; align-items: center; justify-content: center;"><div class="beverage-title" style="font-size: 1.5rem;">${p.name}</div></div>`;
    } else if (p.icon) {
        gallery = `<div class="main-image" style="background: var(--bg-secondary); display: flex; align-items: center; justify-content: center; min-height: 200px;"><i class="${p.icon}" style="font-size: 6rem; color: var(--gold);"></i></div>`;
    } else {
        gallery = `<img class="main-image" id="mainModalImage" src="${p.mainImage}" loading="lazy" decoding="async" onerror="this.src='https://via.placeholder.com/400?text=${encodeURIComponent(p.name)}'"><div class="image-gallery">`;
        (p.images || [p.mainImage]).forEach(img => {
            gallery += `<img class="gallery-img" src="${img}" loading="lazy" decoding="async" onclick="changeModalImage('${img}')" onerror="this.style.display='none'">`;
        });
        gallery += `</div>`;
    }
    const desc = p.description && p.description.trim() !== "" ? p.description : "لا يوجد وصف تفصيلي لهذا المنتج حاليًا. يرجى التواصل معنا للمزيد من المعلومات.";
    detailsDiv.innerHTML = `${gallery}<h2>${p.name}</h2><div class="details-description"><strong>📝 الوصف:</strong><br>${desc}</div><div class="quantity-selector"><button class="quantity-btn" onclick="changeModalQty(-1)">−</button><span class="quantity-value" id="modalQty">1</span><button class="quantity-btn" onclick="changeModalQty(1)">+</button><button class="btn-add" onclick="addFromModal(${p.id})"><i class="fas fa-cart-plus"></i> أضف للسلة</button></div>`;
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
    else cart.push({ id: p.id, name: `${p.name} (${p.category})`, qty: qty });
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
