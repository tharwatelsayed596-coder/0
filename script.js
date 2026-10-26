// 1. قاعدة بيانات المنيو
const menuData = [
    {
        category: "سندوتشات الشاورما",
        items: [
            { id: 1, name: "سندوتش شاورما فراخ (وسط)", price: 75 },
            { id: 2, name: "سندوتش شاورما فراخ (كبير)", price: 95 },
            { id: 3, name: "سندوتش شاورما فراخ (الفراع)", price: 115 },
            { id: 4, name: "سندوتش شاورما بالبطاطس (وسط)", price: 85 },
            { id: 5, name: "سندوتش شاورما بالبطاطس (كبير)", price: 105 },
            { id: 6, name: "سندوتش شاورما موتزاريلا (وسط)", price: 90 },
            { id: 7, name: "سندوتش شاورما موتزاريلا (كبير)", price: 110 },
            { id: 8, name: "سندوتش شاورما بیتزا (كبير)", price: 150 },
            { id: 9, name: "سندوتش شاورما لحمة (وسط)", price: 100 },
            { id: 10, name: "سندوتش شاورما لحمة (كبير)", price: 120 },
            { id: 11, name: "سندوتش شاورما لحمة (الفراع)", price: 75 },
            { id: 12, name: "سندوتش بطاطس كريب", price: 60 },
            { id: 13, name: "سندوتش رومي كريب", price: 65 },
            { id: 14, name: "سندوتش ميكس جبن كريب", price: 70 }
        ]
    },
    {
        category: "وجبات العربي",
        items: [
            { id: 15, name: "وجبة شاورما عربي سنجل", price: 125 },
            { id: 16, name: "وجبة شاورما عربي دبل", price: 195 },
            { id: 17, name: "وجبة شاورما عربي بيتزا فراخ", price: 180 },
            { id: 18, name: "وجبة شاورما عربي ميكس سنجل", price: 130 },
            { id: 19, name: "وجبة شاورما عربي ميكس دبل", price: 235 }
        ]
    },
    {
        category: "وجبات الغربي",
        items: [
            { id: 20, name: "وجبة كرسبي 2 قطعة", price: 100 },
            { id: 21, name: "وجبة كرسبي 3 قطع", price: 145 },
            { id: 22, name: "وجبة كرسبي 5 قطع", price: 255 },
            { id: 23, name: "وجبة زنجر 2 قطعة", price: 110 },
            { id: 24, name: "وجبة زنجر 3 قطع", price: 160 },
            { id: 25, name: "وجبة زنجر 5 قطع", price: 265 },
            { id: 26, name: "وجبة فاهيتا", price: 165 },
            { id: 27, name: "وجبة الان", price: 235 },
            { id: 28, name: "وجبة كرسبي لحمة", price: 180 }
        ]
    },
    {
        category: "الفراخ الشواية والبروستد",
        items: [
            { id: 29, name: "فرخة شواية كاملة", price: 430 },
            { id: 30, name: "نص فرخة شواية", price: 220 },
            { id: 31, name: "ربع فرخة شواية صدر", price: 130 },
            { id: 32, name: "ربع فرخة شواية ورك", price: 115 },
            { id: 33, name: "وجبة دبل ورك", price: 200 },
            { id: 34, name: "فرخة بروستد كاملة", price: 440 },
            { id: 35, name: "نص فرخة بروستد", price: 225 },
            { id: 36, name: "ربع فرخة بروستد صدر", price: 135 },
            { id: 37, name: "ربع فرخة بروستد ورك", price: 120 }
        ]
    },
    {
        category: "صواني التوفر",
        items: [
            { id: 38, name: "صينية الأصدقاء (فرنساوي)", price: 300 },
            { id: 39, name: "صينية الأمة", price: 415 },
            { id: 40, name: "صينية العيلة", price: 820 }
        ]
    },
    {
        category: "المقبلات والمشروبات",
        items: [
            { id: 41, name: "باكيت بطاطس", price: 120 },
            { id: 42, name: "طبق رز", price: 145 },
            { id: 43, name: "علبة تومية عادي", price: 130 },
            { id: 44, name: "علبة تومية سايبسي", price: 135 },
            { id: 45, name: "علبة مخلل", price: 100 },
            { id: 46, name: "طبق سلطة", price: 50 },
            { id: 47, name: "طبق فتوش", price: 60 },
            { id: 48, name: "علبة كول سلو", price: 50 },
            { id: 49, name: "علبة صوص شيدر", price: 50 },
            { id: 50, name: "مياه معدنية", price: 15 },
            { id: 51, name: "كنز (بيبسي)", price: 35 }
        ]
    }
];

let cart = {};

// 2. توليد أزرار التنقل وعرض القسم الأول
function initMenu() {
    const navContainer = document.getElementById('categories-nav');
    
    menuData.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${index === 0 ? 'active' : ''}`;
        btn.innerText = category.category;
        btn.onclick = () => {
            // إزالة active من كل الأزرار
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            // إضافة active للزر الحالي
            btn.classList.add('active');
            // عرض الأصناف
            renderItems(category.items);
        };
        navContainer.appendChild(btn);
    });

    // عرض أول قسم تلقائياً
    if (menuData.length > 0) {
        renderItems(menuData[0].items);
    }
}

// 3. عرض الأصناف في الشاشة
function renderItems(items) {
    const container = document.getElementById('menu-display-area');
    container.innerHTML = ''; // تفريغ المكان أولاً

    const gridDiv = document.createElement('div');
    gridDiv.className = 'menu-grid';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${item.price} ج.م</div>
            </div>
            <button class="add-btn" onclick="addToCart(${item.id})">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                إضافة
            </button>
        `;
        gridDiv.appendChild(card);
    });

    container.appendChild(gridDiv);
}

// 4. إدارة السلة
function addToCart(id) {
    let foundItem = null;
    for (let cat of menuData) {
        foundItem = cat.items.find(i => i.id === id);
        if (foundItem) break;
    }

    if (foundItem) {
        if (cart[id]) {
            cart[id].qty++;
        } else {
            cart[id] = { ...foundItem, qty: 1 };
        }
        updateCartUI();
        showToast();
    }
}

function removeFromCart(id) {
    if (cart[id]) {
        cart[id].qty--;
        if (cart[id].qty === 0) delete cart[id];
        updateCartUI();
    }
}

function deleteItem(id) {
    delete cart[id];
    updateCartUI();
}

// 5. تحديث واجهة السلة
function updateCartUI() {
    let totalItems = 0;
    let totalPrice = 0;
    const cartList = document.getElementById('cart-items-list');
    cartList.innerHTML = '';

    if (Object.keys(cart).length === 0) {
        cartList.innerHTML = '<p style="text-align:center; color:#888; padding: 20px 0;">السلة فاضية، اختر أصنافك المفضلة.</p>';
        document.getElementById('customer-data').style.display = 'none';
    } else {
        document.getElementById('customer-data').style.display = 'block';
        for (let id in cart) {
            const item = cart[id];
            totalItems += item.qty;
            totalPrice += (item.price * item.qty);

            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <div>${item.price} ج.م</div>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="addToCart(${item.id})">+</button>
                    <span style="font-weight:bold;">${item.qty}</span>
                    <button class="qty-btn" onclick="removeFromCart(${item.id})">-</button>
                    <button class="remove-btn" onclick="deleteItem(${item.id})">🗑️</button>
                </div>
            `;
            cartList.appendChild(itemDiv);
        }
    }

    document.getElementById('cart-count').innerText = totalItems;
    document.getElementById('cart-total').innerText = totalPrice;
}

// 6. فتح وغلق السلة والإشعارات
function openCart() { document.getElementById('cartModal').style.display = 'flex'; }
function closeCart() { document.getElementById('cartModal').style.display = 'none'; }

function showToast() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 1500);
}

// 7. إرسال الطلب للواتساب
function sendOrderToWhatsApp() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const notes = document.getElementById('custNotes').value.trim();

    if (!name || !phone || !address) {
        alert("من فضلك اكمل بيانات التوصيل (الاسم، الموبايل، العنوان)");
        return;
    }

    if (Object.keys(cart).length === 0) {
        alert("السلة فاضية، اختر أصناف أولاً.");
        return;
    }

    let message = `*طلب جديد من شاورما الخان* 🌯\n\n`;
    message += `*بيانات العميل:*\n`;
    message += `👤 الاسم: ${name}\n`;
    message += `📞 الموبايل: ${phone}\n`;
    message += `📍 العنوان: ${address}\n`;
    if(notes) message += `📝 ملاحظات: ${notes}\n`;
    message += `\n*تفاصيل الطلب:*\n`;

    let totalPrice = 0;
    for (let id in cart) {
        const item = cart[id];
        const itemTotal = item.price * item.qty;
        totalPrice += itemTotal;
        message += `▪️ ${item.name} × ${item.qty} = ${itemTotal} ج.م\n`;
    }
    
    message += `\n*الإجمالي: ${totalPrice} ج.م* 💰\n\n`;
    message += `شكراً لطلبكم! 🌯`;

    const whatsappNumber = "201028438397"; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

// تشغيل الموقع عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    updateCartUI();
});