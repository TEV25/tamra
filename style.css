* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ========== الوضع الفاتح (Light Mode) ========== */
:root {
    --bg-primary: #f4ecd8;
    --bg-secondary: #e8d5b7;
    --card-bg: #faf0e6;
    --card-bg-hover: #f5e6d3;
    --text-dark: #3e2723;
    --text-medium: #5d4037;
    --text-light: #fff8f0;
    --border-light: #e8d5b7;
    --gold: #c9a84c;
    --gold-dark: #b8860b;
    --shadow: 0 10px 30px rgba(0,0,0,0.1);
    --shadow-hover: 0 20px 40px rgba(0,0,0,0.2);
    --hero-overlay: rgba(62,39,35,0.4);
    --slider-overlay: linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.2));
    --footer-bg: linear-gradient(135deg, #3e2723, #2c1a12);
    --dropdown-bg: #faf0e6;
    --dropdown-border: #e8d5b7;
    --cart-bg: #faf0e6;
    --navbar-bg: linear-gradient(135deg, #3e2723, #4e342e);
    --dropbtn-bg: #5d4037;
}

[data-theme="dark"] {
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --card-bg: #2a2a2a;
    --card-bg-hover: #353535;
    --text-dark: #e0e0e0;
    --text-medium: #b0b0b0;
    --text-light: #e0e0e0;
    --border-light: #3a3a3a;
    --gold: #d4af37;
    --gold-dark: #e6c87a;
    --shadow: 0 10px 30px rgba(0,0,0,0.5);
    --shadow-hover: 0 20px 40px rgba(0,0,0,0.7);
    --hero-overlay: rgba(0,0,0,0.6);
    --slider-overlay: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
    --footer-bg: linear-gradient(135deg, #0d0d0d, #1a1a1a);
    --dropdown-bg: #1e1e1e;
    --dropdown-border: #3a3a3a;
    --cart-bg: #2a2a2a;
    --navbar-bg: linear-gradient(135deg, #0d0d0d, #1a1a1a);
    --dropbtn-bg: #2a2a2a;
}

body {
    font-family: 'Cairo', 'Traditional Arabic', 'Segoe UI', serif;
    background: var(--bg-primary);
    direction: rtl;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
    color: var(--text-dark);
}

/* ========== شريط التنقل المحسن ========== */
.navbar {
    background: var(--navbar-bg);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--gold);
    padding: 10px 0;
    transition: background 0.3s;
}
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    max-width: 1400px;
    margin: 0 auto;
}

/* الشعار */
.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    background: transparent;
    padding: 0;
    border: none;
}
.logo-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--gold);
}
.logo-text {
    font-size: 1rem;
    font-weight: 700;
    color: var(--gold);
}

/* القائمة المنسدلة (زر ☰) */
.dropbtn {
    background: rgba(255,255,255,0.1);
    color: var(--gold);
    padding: 6px 14px;
    border: 1px solid var(--gold);
    border-radius: 30px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.2s;
}
.dropbtn:hover {
    background: var(--gold);
    color: #121212;
}

/* أزرار الإجراءات (وضع داكن + سلة) */
.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

/* زر تبديل الوضع */
.theme-toggle {
    background: rgba(255,255,255,0.1);
    color: var(--gold);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid var(--gold);
    transition: all 0.2s;
    font-size: 1rem;
}
.theme-toggle:hover {
    background: var(--gold);
    color: #121212;
    transform: scale(1.02);
}

/* زر السلة */
.nav-cart {
    background: linear-gradient(135deg, #c9a84c, #b8860b);
    color: #3e2723;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.9rem;
    border: 1px solid #3e2723;
    position: relative;
}
.nav-cart:hover {
    transform: scale(1.02);
    background: #ffd700;
}
#cartCountNav {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #3e2723;
    color: var(--gold);
    font-size: 0.65rem;
    padding: 2px 5px;
    border-radius: 50%;
    min-width: 18px;
    text-align: center;
}
[data-theme="dark"] #cartCountNav {
    background: #121212;
}

/* القائمة المنسدلة */
.dropdown-content {
    display: none;
    position: absolute;
    background: var(--dropdown-bg);
    min-width: 180px;
    border-radius: 12px;
    z-index: 1001;
    top: 100%;
    right: 0;
    border: 1px solid var(--gold);
    box-shadow: var(--shadow);
}
.dropdown-content a {
    color: var(--text-dark);
    padding: 10px 18px;
    text-decoration: none;
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 1px solid var(--border-light);
}
.dropdown-content a:hover {
    background: linear-gradient(135deg, #c9a84c, #b8860b);
    color: #121212;
    padding-right: 25px;
}
.dropdown:hover .dropdown-content {
    display: block;
}

/* أيقونة واتساب طافية */
.whatsapp-float {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 999;
    background: linear-gradient(135deg, #25D366, #128C7E);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    animation: floatWa 2s ease-in-out infinite;
}
.whatsapp-float i { font-size: 1.6em; color: white; }
.whatsapp-float:hover { transform: scale(1.08); background: #075e54; }
@keyframes floatWa { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }

/* سحابات عائمة */
.cloud {
    position: fixed;
    background: rgba(255,255,255,0.08);
    border-radius: 100%;
    filter: blur(25px);
    pointer-events: none;
    z-index: 0;
}
.cloud-1 { width: 180px; height: 90px; top: 10%; left: -100px; animation: floatCloud 20s linear infinite; }
.cloud-2 { width: 250px; height: 120px; bottom: 20%; right: -150px; animation: floatCloud 25s linear infinite reverse; }
.cloud-3 { width: 130px; height: 60px; top: 40%; left: -80px; animation: floatCloud 18s linear infinite; }
@keyframes floatCloud { from { transform: translateX(0); } to { transform: translateX(calc(100vw + 200px)); } }

/* القسم الترحيبي */
.hero-section {
    min-height: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    overflow: hidden;
}
.hero-bg-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.hero-bg-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1.2s ease;
    transform: scale(1);
    animation: kenBurns 12s ease-in-out infinite;
}
@keyframes kenBurns {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
.hero-bg-slide.active { opacity: 1; }
.hero-overlay-light {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--hero-overlay);
    z-index: 1;
}
.hero-content {
    position: relative;
    z-index: 2;
    padding: 25px 25px;
    max-width: 650px;
    width: 90%;
    background: rgba(62,39,35,0.4);
    backdrop-filter: blur(8px);
    border-radius: 60px;
    border: 2px solid var(--gold);
    box-shadow: var(--shadow);
}
[data-theme="dark"] .hero-content {
    background: rgba(0,0,0,0.5);
}
.hero-logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 3px solid var(--gold);
    object-fit: cover;
}
.hero-title {
    font-size: 1.8em;
    color: var(--gold);
    margin-bottom: 5px;
    font-weight: 800;
}
.hero-subtitle {
    font-size: 0.85em;
    color: var(--text-light);
    margin-bottom: 15px;
}
.hero-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 12px;
}
.hero-btn {
    padding: 6px 16px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.8rem;
    transition: all 0.3s;
}
.hero-btn.primary {
    background: linear-gradient(135deg, #c9a84c, #b8860b);
    color: #3e2723;
}
.hero-btn.primary:hover { background: #ffd700; transform: translateY(-2px); }
.contact-info {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}
.contact-link {
    color: var(--gold);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 30px;
    background: rgba(0,0,0,0.3);
    font-size: 0.7rem;
}

/* سلايدر سفلي */
.slider-container {
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 30px 0;
    border-radius: 0;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    border-top: 2px solid var(--gold);
    border-bottom: 2px solid var(--gold);
    background: #faf0e6;
}
[data-theme="dark"] .slider-container {
    background: #1e1e1e;
}
.slider-images { position: relative; width: 100%; }
.slider-frame { position: relative; width: 100%; }
.slider-frame img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    display: block;
}
.slider-frame::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--slider-overlay);
    z-index: 1;
    pointer-events: none;
}
.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    color: white;
    border: 2px solid var(--gold);
    padding: 8px 14px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 1rem;
    z-index: 20;
}
.prev { left: 15px; }
.next { right: 15px; }
.slider-btn:hover { background: var(--gold); color: #3e2723; transform: translateY(-50%) scale(1.05); }
.slider-dots {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 20;
    background: rgba(0,0,0,0.4);
    padding: 5px 10px;
    border-radius: 40px;
}
.dot {
    width: 8px;
    height: 8px;
    background: rgba(255,255,255,0.6);
    border-radius: 50%;
    cursor: pointer;
}
.dot.active { background: var(--gold); width: 20px; border-radius: 8px; }

/* الأقسام الرئيسية */
.sections {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 50px 20px;
    max-width: 1100px;
    margin: 0 auto;
}
.section {
    background: var(--card-bg);
    width: 280px;
    padding: 25px 15px;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
    border: 2px solid var(--gold);
    transition: all 0.3s;
    box-shadow: var(--shadow);
}
.section:hover { transform: translateY(-8px); border-color: #ffd700; }
.section-icon { font-size: 2.8em; margin-bottom: 10px; }
.section h3 { color: var(--text-dark); margin: 10px 0; font-size: 1.2em; }
.section p { color: var(--text-medium); font-size: 0.75em; margin-bottom: 10px; }
.section-link { color: var(--gold-dark); font-weight: 700; font-size: 0.8rem; }

/* المميزات */
.features { background: var(--bg-secondary); padding: 50px 20px; text-align: center; }
.features h2 { color: var(--text-dark); font-size: 1.8em; margin-bottom: 35px; position: relative; display: inline-block; }
.features h2::after { content: '✨'; position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); color: var(--gold); font-size: 1.3em; }
.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
}
.feature {
    background: var(--card-bg);
    padding: 18px 12px;
    border-radius: 25px;
    border: 1px solid var(--gold);
    transition: all 0.3s;
    cursor: pointer;
}
.feature:hover { transform: translateY(-5px); box-shadow: var(--shadow); border-color: #ffd700; }
.feature i { font-size: 1.8em; display: block; margin-bottom: 8px; color: var(--gold-dark); }
.feature h4 { font-size: 0.95em; margin-bottom: 5px; }
.feature p { font-size: 0.65em; color: var(--text-medium); }

/* قسم التواصل الإضافي */
.contact-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 50px 20px;
    background: var(--bg-secondary);
}
.contact-card {
    background: var(--card-bg);
    padding: 25px 20px;
    border-radius: 30px;
    text-align: center;
    width: 260px;
    border: 2px solid var(--gold);
    transition: all 0.3s;
}
.contact-card:hover { transform: translateY(-6px); box-shadow: var(--shadow); border-color: #ffd700; }
.contact-card i { font-size: 2.8em; color: var(--gold); margin-bottom: 10px; }
.contact-card h3 { font-size: 1.1em; margin-bottom: 5px; }
.contact-card p { font-size: 0.75em; margin-bottom: 12px; }
.btn-whatsapp, .btn-tiktok {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: linear-gradient(135deg, #25D366, #128C7E);
    color: white;
    padding: 6px 14px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.8rem;
    transition: all 0.3s;
}
.btn-tiktok { background: linear-gradient(135deg, #000, #1a1a1a); border: 1px solid var(--gold); }

/* البانر */
.page-banner {
    position: relative;
    text-align: center;
    padding: 60px 20px;
    color: white;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 220px;
}
.page-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1;
}
.banner-content {
    position: relative;
    z-index: 2;
    max-width: 80%;
    margin: 0 auto;
}
.banner-content h1 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 8px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
.banner-content p {
    font-size: 0.9rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

/* منتجات (سخانات/حلويات) */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 25px;
    padding: 50px 20px;
    max-width: 1300px;
    margin: 0 auto;
}
.product-card {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 15px;
    text-align: center;
    border: 1px solid var(--gold);
    transition: all 0.3s;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
.product-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover); border-color: #ffd700; }
.product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 15px;
    border: 2px solid var(--gold);
    cursor: pointer;
}
.product-name {
    font-size: 1em;
    margin: 10px 0 5px;
    color: var(--text-dark);
    font-weight: 800;
}
.product-category {
    font-size: 0.65em;
    color: var(--text-medium);
    margin-bottom: 6px;
}
.btn-details, .btn-add {
    padding: 5px 8px;
    font-size: 0.7em;
    margin: 4px 0;
    border-radius: 30px;
    font-weight: 700;
    transition: 0.2s;
}
.btn-details { background: #8d6e63; color: white; }
.btn-details:hover { background: #6d4c41; }
.btn-add { background: linear-gradient(135deg, #c9a84c, #b8860b); color: #3e2723; }
.btn-add:hover { background: #ffd700; }

.quantity-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
}
.quantity-btn {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c9a84c, #b8860b);
    border: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
}
.quantity-value {
    font-size: 0.9em;
    font-weight: 700;
    min-width: 28px;
    text-align: center;
    color: var(--text-dark);
}

/* الباقات */
.packages-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 50px 20px;
    max-width: 1300px;
    margin: 0 auto;
}
.package-card-modern {
    background: var(--card-bg);
    border-radius: 30px;
    width: 350px;
    overflow: hidden;
    transition: all 0.3s;
    box-shadow: var(--shadow);
    border: 1px solid var(--gold);
}
.package-card-modern:hover { transform: translateY(-8px); box-shadow: var(--shadow-hover); border-color: var(--gold); }
.package-card-modern.silver .package-header { background: linear-gradient(135deg, #a8a8a8, #8a8a8a); }
.package-card-modern.gold .package-header { background: linear-gradient(135deg, #d4af37, #b8860b); }
.package-card-modern.royal .package-header { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
.package-header {
    padding: 20px 15px;
    text-align: center;
    color: white;
}
.package-icon { font-size: 3em; margin-bottom: 6px; }
.package-header h2 { font-size: 1.3em; margin-bottom: 5px; }
.package-content { padding: 18px; }
.package-section { margin-bottom: 15px; }
.package-section h4 { font-size: 0.85em; color: var(--text-dark); margin-bottom: 6px; display: flex; align-items: center; gap: 6px; border-right: 2px solid var(--gold); padding-right: 8px; }
.package-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.package-tags span {
    background: var(--bg-secondary);
    padding: 4px 8px;
    border-radius: 20px;
    font-size: 0.65em;
    color: var(--text-dark);
}
.package-footer { padding: 15px 15px; border-top: 1px solid var(--border-light); text-align: center; }
.btn-add-package {
    background: linear-gradient(135deg, #c9a84c, #b8860b);
    color: #3e2723;
    padding: 8px 16px;
    border-radius: 40px;
    border: none;
    font-weight: 800;
    font-size: 0.8em;
    width: 100%;
    cursor: pointer;
}
.btn-add-package:hover { background: #ffd700; }

/* الفوتر */
.footer {
    background: var(--footer-bg);
    padding: 35px 20px;
    text-align: center;
    border-top: 2px solid var(--gold);
}
.footer-logo { width: 60px; height: 60px; border-radius: 50%; margin-bottom: 12px; border: 2px solid var(--gold); object-fit: cover; }
.footer-content h3 { font-size: 1.1em; margin-bottom: 5px; color: var(--gold); }
.footer-content p { font-size: 0.75em; margin-bottom: 12px; color: var(--text-light); }
.footer-social a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    margin: 0 5px;
    color: var(--gold);
    font-size: 1.1em;
    text-decoration: none;
}
.footer-social a:hover { background: var(--gold); color: #3e2723; transform: translateY(-3px) rotate(360deg); }
.footer-links a { color: var(--gold); text-decoration: none; margin: 0 6px; font-size: 0.7em; }
.copyright { font-size: 0.6em; margin-top: 12px; color: var(--gold-dark); }

/* مودال */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
}
.modal-content {
    background: var(--card-bg);
    margin: 35px auto;
    padding: 18px;
    width: 90%;
    max-width: 480px;
    border-radius: 30px;
    border: 2px solid var(--gold);
    position: relative;
}
.close-modal {
    position: absolute;
    left: 12px;
    top: 12px;
    font-size: 1.3em;
    cursor: pointer;
    color: var(--text-medium);
}
.main-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 18px;
    margin-bottom: 10px;
    border: 2px solid var(--gold);
}
.image-gallery {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 6px 0;
    margin-bottom: 10px;
}
.gallery-img {
    width: 60px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid var(--gold);
}
.details-description {
    background: var(--bg-secondary);
    padding: 10px;
    border-radius: 15px;
    margin: 10px 0;
    line-height: 1.5;
    font-size: 0.85em;
    color: var(--text-dark);
}

/* السلة الجانبية */
.cart-sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    width: 85%;
    max-width: 350px;
    height: 100%;
    background: var(--cart-bg);
    transition: left 0.35s;
    z-index: 1001;
    padding: 15px;
    overflow-y: auto;
    border-left: 3px solid var(--gold);
    box-shadow: -5px 0 25px rgba(0,0,0,0.3);
}
.cart-sidebar.open { left: 0; }
.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: none;
    z-index: 1000;
}
.cart-overlay.show { display: block; }
.cart-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 2px solid var(--gold);
    padding-bottom: 6px;
}
.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid var(--border-light);
}
.cart-item-name { font-weight: 800; color: var(--text-dark); font-size: 0.85em; }
.cart-item-qty { font-size: 0.65em; color: var(--text-medium); margin-top: 2px; }
.btn-remove {
    background: #8d6e63;
    color: white;
    padding: 2px 8px;
    border-radius: 20px;
    font-size: 0.65em;
    border: none;
}
.cart-total {
    text-align: center;
    font-weight: 800;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid var(--gold);
    color: var(--text-dark);
}
.btn-checkout {
    width: 100%;
    margin-top: 10px;
    padding: 8px;
    background: linear-gradient(135deg, #25D366, #128C7E);
    color: white;
    border: none;
    border-radius: 40px;
    font-weight: 800;
    cursor: pointer;
}
.empty-cart { text-align: center; padding: 20px; color: var(--text-medium); }

/* إشعار */
.toast-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(135deg, #2e7d32, #1b5e20);
    color: white;
    padding: 8px 16px;
    border-radius: 50px;
    z-index: 9999;
    font-size: 0.75em;
    transform: translateX(150%);
    transition: transform 0.3s ease;
}
.toast-notification.show { transform: translateX(0); }

/* تحسينات الهواتف */
@media (max-width: 768px) {
    .hero-section { min-height: 380px; }
    .hero-content { padding: 15px; max-width: 95%; }
    .hero-logo { width: 55px; height: 55px; }
    .hero-title { font-size: 1.3em; }
    .hero-subtitle { font-size: 0.7em; margin-bottom: 10px; }
    .hero-btn { padding: 4px 12px; font-size: 0.7rem; }
    .products-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 30px 12px; }
    .product-image { height: 110px; }
    .product-name { font-size: 0.85em; }
    .slider-frame img { height: 220px; }
    .slider-btn { padding: 6px 10px; font-size: 0.9rem; }
    .sections { gap: 15px; padding: 30px 15px; }
    .section { width: 100%; max-width: 250px; padding: 20px 12px; }
    .section-icon { font-size: 2.2em; }
    .features-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .package-card-modern { width: 95%; }
    .package-header { padding: 15px; }
    .package-icon { font-size: 2.5em; }
    .package-header h2 { font-size: 1.1em; }
    .page-banner { padding: 40px 15px; min-height: 180px; }
    .banner-content h1 { font-size: 1.3rem; }
    .banner-content p { font-size: 0.75rem; }
    .whatsapp-float { width: 44px; height: 44px; bottom: 15px; left: 15px; }
    .whatsapp-float i { font-size: 1.4em; }
    .dropdown-content { position: fixed; top: 55px; right: 10px; left: 10px; width: auto; }
    .theme-toggle { width: 32px; height: 32px; font-size: 0.9rem; }
    .nav-cart { width: 32px; height: 32px; font-size: 0.85rem; }
    .logo-img { width: 28px; height: 28px; }
    .logo-text { font-size: 0.85rem; }
    .dropbtn { padding: 5px 12px; font-size: 0.75rem; }
}