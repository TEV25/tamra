const WHATSAPP_NUMBER = "0539836477";
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", function () {
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

// سخانات (34)
const sakhanatProducts = [
    { id: 1, name: "حنيني", type: "sakhanat", category: "سخانات", mainImage: "images/حنيني.png", images: ["images/حنيني.png"], description: "حنيني تقليدي لذيذ" },
    { id: 2, name: "مشغوثة عيش جنوبي", type: "sakhanat", category: "سخانات", mainImage: "images/مشغوثه.png", images: ["images/مشغوثه.png"], description: "" },
    { id: 3, name: "عريكة جنوبية", type: "sakhanat", category: "سخانات", mainImage: "images/عريكه.png", images: ["images/عريكه.png"], description: "" },
    { id: 4, name: "عصيدة حساوية", type: "sakhanat", category: "سخانات", mainImage: "images/عصيده حساويه.png", images: ["images/عصيده حساويه.png"], description: "" },
    { id: 5, name: "عصيدة", type: "sakhanat", category: "سخانات", mainImage: "images/عصيده.png", images: ["images/عصيده.png"], description: "" },
    { id: 6, name: "جريش أبيض", type: "sakhanat", category: "سخانات", mainImage: "images/جريش ابيض.png", images: ["images/جريش ابيض.png"], description: "" },
    { id: 7, name: "جريش أحمر", type: "sakhanat", category: "سخانات", mainImage: "images/جريش احمر.png", images: ["images/جريش احمر.png"], description: "" },
    { id: 8, name: "مرسه", type: "sakhanat", category: "سخانات", mainImage: "images/مرسه.png", images: ["images/مرسه.png"], description: "" },
    { id: 9, name: "فته تمر", type: "sakhanat", category: "سخانات", mainImage: "images/فته تمر.png", images: ["images/فته تمر.png"], description: "" },
    { id: 10, name: "مفتوت سمن وحليب", type: "sakhanat", category: "سخانات", mainImage: "images/مفتوت.png", images: ["images/مفتوت.png"], description: "" },
    { id: 11, name: "مرقوق", type: "sakhanat", category: "سخانات", mainImage: "images/مرقوق.png", images: ["images/مرقوق.png"], description: "" },
    { id: 12, name: "مطازيز القرصان", type: "sakhanat", category: "سخانات", mainImage: "images/مطازيز.png", images: ["images/مطازيز.png"], description: "" },
    { id: 13, name: "الميقعه", type: "sakhanat", category: "سخانات", mainImage: "images/الميقعه.png", images: ["images/الميقعه.png"], description: "" },
    { id: 14, name: "المليحيه", type: "sakhanat", category: "سخانات", mainImage: "images/المليحيه.png", images: ["images/المليحيه.png"], description: "" },
    { id: 15, name: "مفلق", type: "sakhanat", category: "سخانات", mainImage: "images/مفلق.png", images: ["images/مفلق.png"], description: "" },
    { id: 16, name: "مفروكه بالسمن والعسل", type: "sakhanat", category: "سخانات", mainImage: "images/مفروكه.png", images: ["images/مفروكه.png"], description: "" },
    { id: 17, name: "مراصيع بالخضار", type: "sakhanat", category: "سخانات", mainImage: "images/مراصيع خضار.png", images: ["images/مراصيع خضار.png"], description: "" },
    { id: 18, name: "مكرونة باشميل", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونة باشميل.png", images: ["images/مكرونة باشميل.png"], description: "" },
    { id: 19, name: "مكرونة كانالوني جبنه", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونة كانالوني.png", images: ["images/مكرونة كانالوني.png"], description: "" },
    { id: 20, name: "مكرونة لازانيا لحم", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونة لازانيا.png", images: ["images/مكرونة لازانيا.png"], description: "" },
    { id: 21, name: "مكرونة فتوش بالسبانخ", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونة فتوش.png", images: ["images/مكرونة فتوش.png"], description: "" },
    { id: 22, name: "مكرونة سباغيتي عادي باللحم", type: "sakhanat", category: "سخانات", mainImage: "images/مكرونة سباغيتي.png", images: ["images/مكرونة سباغيتي.png"], description: "" },
    { id: 23, name: "ادام لحم بطاطس رجله مشكل بامية فاصوليا", type: "sakhanat", category: "سخانات", mainImage: "images/يخنة لحم.png", images: ["images/يخنة لحم.png"], description: "يشمل: يخنة لحم، بطاطس، رجله، مشكل، بامية، فاصوليا" },
    { id: 24, name: "مفلج بالحمص", type: "sakhanat", category: "سخانات", mainImage: "images/مفلج بالحمص.png", images: ["images/مفلج بالحمص.png"], description: "" },
    { id: 25, name: "معرق لحم", type: "sakhanat", category: "سخانات", mainImage: "images/معرق لحم.png", images: ["images/معرق لحم.png"], description: "" },
    { id: 26, name: "قشد ملكي", type: "sakhanat", category: "سخانات", mainImage: "images/قشد ملكي.png", images: ["images/قشد ملكي.png"], description: "" },
    { id: 27, name: "لقيمات", type: "sakhanat", category: "سخانات", mainImage: "images/لقيمات.png", images: ["images/لقيمات.png"], description: "" },
    { id: 28, name: "ام علي", type: "sakhanat", category: "سخانات", mainImage: "images/ام علي.png", images: ["images/ام علي.png"], description: "" },
    { id: 29, name: "رز بالحليب", type: "sakhanat", category: "سخانات", mainImage: "images/رز بالحليب.png", images: ["images/رز بالحليب.png"], description: "" }
];

// صحون (19)
const sohonProducts = [
    { id: 201, name: "صحن مشكل مراصيع مع ميني ملة", type: "sohon", category: "صحون", mainImage: "images/صحن مشكل مله محشيه مع المراصيع.png", images: ["images/صحن مشكل مله محشيه مع المراصيع.png"], description: "" },
    { id: 202, name: "صحن مشكل مله محشيه مع المراصيع كبير", type: "sohon", category: "صحون", mainImage: "images/صحن مشكل مله محشيه مع المراصيع كبير.png", images: ["images/صحن مشكل مله محشيه مع المراصيع كبير.png"], description: "" },
    { id: 203, name: "خبز ملة", type: "sohon", category: "صحون", mainImage: "images/خبز مله.png", images: ["images/خبز مله.png"], description: "" },
    { id: 204, name: "مراصيع مصابيب بالسمن والعسل", type: "sohon", category: "صحون", mainImage: "images/مراصيع.png", images: ["images/مراصيع.png"], description: "" },
    { id: 205, name: "ارز كبسه مضغوط لحم دجاج برياني كشري سليق مندي معدوس", type: "sohon", category: "صحون", mainImage: "images/ارز كبسة.png", images: ["images/ارز كبسة.png"], description: "يشمل: كبسة، مضغوط، لحم دجاج، برياني، كشري، سليق، مندي، معدوس" },
    { id: 206, name: "كبه دجاج لحم خضار", type: "sohon", category: "صحون", mainImage: "images/كبه.png", images: ["images/كبه.png"], description: "" },
    { id: 207, name: "بنت الصحن", type: "sohon", category: "صحون", mainImage: "images/بنت الصحن.png", images: ["images/بنت الصحن.png"], description: "" },
    { id: 208, name: "ميني مله محشيه", type: "sohon", category: "صحون", mainImage: "images/ميني مله.png", images: ["images/ميني مله.png"], description: "" },
    { id: 209, name: "خلية نحل", type: "sohon", category: "صحون", mainImage: "images/خليه نحل.png", images: ["images/خليه نحل.png"], description: "" },
    { id: 210, name: "معمول", type: "sohon", category: "صحون", mainImage: "images/معمول.png", images: ["images/معمول.png"], description: "" },
    { id: 211, name: "قطايف محشية", type: "sohon", category: "صحون", mainImage: "images/قطايف.png", images: ["images/قطايف.png"], description: "" },
    { id: 212, name: "لبنيه", type: "sohon", category: "صحون", mainImage: "images/لبنيه.png", images: ["images/لبنيه.png"], description: "" },
    { id: 213, name: "أصابع زينب", type: "sohon", category: "صحون", mainImage: "images/اصابع زينب.png", images: ["images/اصابع زينب.png"], description: "" },
    { id: 214, name: "كيكة الدخن بالتمر", type: "sohon", category: "صحون", mainImage: "images/كيكة الدخن.png", images: ["images/كيكة الدخن.png"], description: "" },
    { id: 215, name: "كور التمر المحشيه بالطحينه", type: "sohon", category: "صحون", mainImage: "images/كور التمر.png", images: ["images/كور التمر.png"], description: "" },
    { id: 216, name: "تمريه جنوبيه", type: "sohon", category: "صحون", mainImage: "images/تمريه جنوبيه.png", images: ["images/تمريه جنوبيه.png"], description: "" },
    { id: 217, name: "بسبوسة سادة بالقشطة", type: "sohon", category: "صحون", mainImage: "images/بسبوسة.png", images: ["images/بسبوسة.png"], description: "" },
    { id: 218, name: "الغريبية", type: "sohon", category: "صحون", mainImage: "images/غريبية.png", images: ["images/غريبية.png"], description: "" },
    { id: 219, name: "شعثه", type: "sohon", category: "صحون", mainImage: "images/شعثه.png", images: ["images/شعثه.png"], description: "" }
];

// تجهيزات المناسبات (6)
const eventsProducts = [
    { id: 301, name: "كراسي فاخرة 24 كرسي", type: "events", category: "تأجير", mainImage: "images/chairs1.jpg", images: ["images/chairs1.jpg", "images/chairs2.jpg"], description: "كراسي ذهبية فاخرة عدد 24 كرسي، مناسبة للأفراح والعزاء. لون ذهبي مع وسادة حمراء." },
    { id: 302, name: "طاولات كبيرة 12 طاولة", type: "events", category: "تأجير", mainImage: "images/tables1.jpg", images: ["images/tables1.jpg"], description: "طاولات خشبية كبيرة قطر 120 سم، عدد 12 طاولة، مثالية للولائم الكبيرة." },
    { id: 303, name: "مظلات وخيام صغيرة 8 قطع", type: "events", category: "تأجير", mainImage: "images/umbrellas1.jpg", images: ["images/umbrellas1.jpg"], description: "مظلات وخيام للتظليل مقاس 3×3 متر، عدد 8 خيام." },
    { id: 304, name: "أدوات مائدة كاملة 50 شخص", type: "events", category: "تأجير", mainImage: "images/cutlery.jpg", images: ["images/cutlery.jpg"], description: "صحون، أكواب، ملاعق وشوك لـ 50 شخص، خدمة كاملة." },
    { id: 305, name: "بطانيات وسجاد للعزاء 50 قطعة", type: "events", category: "تأجير", mainImage: "images/blankets.jpg", images: ["images/blankets.jpg"], description: "بطانيات وسجاد أرضي مريح، عدد 50 قطعة مناسبة للمجالس التراثية." },
    { id: 306, name: "إضاءة وديكور 12 لمبة LED", type: "events", category: "تأجير", mainImage: "images/lights.jpg", images: ["images/lights.jpg"], description: "أضواء ليد ملونة وزينة للمناسبات السعيدة، طقم كامل 12 لمبة." }
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
                <img class="product-image" src="${product.mainImage}" onerror="this.src='https://via.placeholder.com/300x300?text=${encodeURIComponent(product.name)}'" onclick="showDetails(${product.id})">
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

function changeQuantity(id, delta) { /* ... كما هي ... */ }
function addToCart(id) { /* ... كما هي ... */ }
function addPackageToCart(packageName) { /* ... */ }
function updateCartDisplay() { /* ... */ }
function removeFromCart(id) { /* ... */ }
function sendOrder() { /* ... */ }
function showDetails(id) { /* ... */ }
function changeModalQty(delta) { /* ... */ }
function addFromModal(id) { /* ... */ }
function changeModalImage(src) { /* ... */ }
function toggleCart() { /* ... */ }
function closeModal() { /* ... */ }
window.onclick = function(e) { /* ... */ };

updateCartDisplay();