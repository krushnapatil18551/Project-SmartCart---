
"use strict";

const $ = (selector) => document.querySelector(selector);
const money = (amount) => "₹" + amount.toLocaleString("en-IN");

const products = [
  {id:1,name:"Wireless Headphones",category:"Electronics",price:1499,rating:4.5,image:"photo-1505740420928-5e560c06d30e"},
  {id:2,name:"Bluetooth Speaker",category:"Electronics",price:1199,rating:4.4,image:"photo-1608043152269-423dbba4e7e1"},
  {id:3,name:"Smart TV",category:"Electronics",price:18999,rating:4.6,image:"photo-1593359677879-a4bb92f829d1"},
  {id:4,name:"Gaming Laptop",category:"Electronics",price:54999,rating:4.8,image:"photo-1603302576837-37561b2e2302"},
  {id:5,name:"Wireless Mouse",category:"Electronics",price:599,rating:4.3,image:"photo-1527814050087-3793815479db"},
  {id:6,name:"Mechanical Keyboard",category:"Electronics",price:1599,rating:4.5,image:"photo-1587829741301-dc798b83add3"},
  {id:7,name:"Smartphone Pro",category:"Mobiles",price:24999,rating:4.7,image:"photo-1511707171634-5f897ff02aa9"},
  {id:8,name:"Android Smartphone",category:"Mobiles",price:14999,rating:4.5,image:"photo-1598327105666-5b89351aff97"},
  {id:9,name:"Tablet",category:"Mobiles",price:17999,rating:4.4,image:"photo-1544244015-0df4b3ffc6b0"},
  {id:10,name:"Smart Watch",category:"Accessories",price:2499,rating:4.6,image:"photo-1523275335684-37898b6baf30"},
  {id:11,name:"Classic Sneakers",category:"Fashion",price:1999,rating:4.7,image:"photo-1542291026-7eec264c27ff"},
  {id:12,name:"Travel Backpack",category:"Fashion",price:1199,rating:4.4,image:"photo-1553062407-98eeb64c6a62"},
  {id:13,name:"Casual T-Shirt",category:"Fashion",price:499,rating:4.3,image:"photo-1521572163474-6864f9cf17ab"},
  {id:14,name:"Modern Table Lamp",category:"Home",price:899,rating:4.4,image:"photo-1507473885765-e6ed057f782c"},
  {id:15,name:"Coffee Mug Set",category:"Home",price:499,rating:4.2,image:"photo-1514228742587-6b1558fcca3d"},
  {id:16,name:"Sunglasses",category:"Accessories",price:699,rating:4.3,image:"photo-1511499767150-a48a237f0083"},
  {id:17,name:"Skincare Kit",category:"Beauty",price:799,rating:4.5,image:"photo-1608248543803-ba4f8c70ae0b"},
  {id:18,name:"Story Book",category:"Books",price:299,rating:4.4,image:"photo-1544947950-fa07a98d237f"},
  {id:19,name:"Travel Water Bottle",category:"Home",price:399,rating:4.2,image:"photo-1602143407151-7111542de6e8"},
  {id:20,name:"Fashion Handbag",category:"Fashion",price:1299,rating:4.6,image:"photo-1584917865442-de89df76afd3"},
  {id:21,name:"Premium Gaming Laptop",category:"Electronics",price:72999,rating:4.8,image:"photo-1496181133206-80ce9b88a853"},
  {id:22,name:"Laptop Stand",category:"Electronics",price:799,rating:4.3,image:"photo-1527864550417-7fd91fc51a46"},
  {id:23,name:"Wireless Earbuds",category:"Electronics",price:1299,rating:4.5,image:"photo-1606220945770-b5b6c2c55bf1"},
  {id:24,name:"Power Bank",category:"Electronics",price:899,rating:4.4,image:"photo-1609091839311-d5365f9ff1c5"},
  {id:25,name:"Digital Camera",category:"Electronics",price:32999,rating:4.7,image:"photo-1516035069371-29a1b244cc32"},
  {id:26,name:"Fitness Band",category:"Accessories",price:1499,rating:4.2,image:"photo-1575311373937-040b8e1fd5b6"},
  {id:27,name:"Running Shoes",category:"Fashion",price:1799,rating:4.6,image:"photo-1460353581641-37baddab0fa2"},
  {id:28,name:"Denim Jacket",category:"Fashion",price:1599,rating:4.3,image:"photo-1551028719-00167b16eac5"},
  {id:29,name:"Office Chair",category:"Home",price:5999,rating:4.5,image:"photo-158坐",},
  {id:30,name:"Desk Organizer",category:"Home",price:449,rating:4.1,image:"photo-1494438639946-1ebd1d20bf85"},
  {id:31,name:"Perfume",category:"Beauty",price:999,rating:4.5,image:"photo-1541643600914-78b084683601"},
  {id:32,name:"Makeup Brush Set",category:"Beauty",price:499,rating:4.3,image:"photo-1522335789203-aabd1fc54bc9"},
  {id:33,name:"Notebook Set",category:"Books",price:199,rating:4.2,image:"photo-1531346878377-a5be20888e57"},
  {id:34,name:"Art Sketchbook",category:"Books",price:349,rating:4.4,image:"photo-1513364776144-60967b0f800f"},
  {id:35,name:"Wall Clock",category:"Home",price:699,rating:4.1,image:"photo-1563861826100-9cb868fdbe1d"},
  {id:36,name:"Leather Wallet",category:"Accessories",price:499,rating:4.2,image:"photo-1627123424574-724758594e93"},
  {id:37,name:"Portable Projector",category:"Electronics",price:8999,rating:4.4,image:"photo-1535016120720-40c646be5580"},
  {id:38,name:"Gaming Controller",category:"Electronics",price:2499,rating:4.6,image:"photo-1592840496694-26d035b52b48"},
  {id:39,name:"Bedsheet Set",category:"Home",price:1299,rating:4.3,image:"photo-1631049307264-da0ec9d70304"},
  {id:40,name:"Scented Candle",category:"Home",price:349,rating:4.2,image:"photo-1603006905003-be475563bc59"}
];

// Fix the office-chair image ID and restore demo admin price edits.
products.find(p => p.id === 29).image = "photo-1598300053653-7d9e8b9a4a7e";
const savedPrices = (() => { try { return JSON.parse(localStorage.getItem("smartcart_prices_v1") || "{}"); } catch { return {}; } })();
products.forEach(p => { if (Number.isFinite(Number(savedPrices[p.id]))) p.price = Number(savedPrices[p.id]); });

const cart = new Map();
const wishlist = new Set();
const STOCK_KEY = "smartcart_stock_v1";
const PRICES_KEY = "smartcart_prices_v1";
const ORDERS_KEY = "smartcart_orders_v1";
const NOTIFICATIONS_KEY = "smartcart_notifications_v1";
let appliedCoupon = "";
let minPrice = 0, maxPrice = Infinity, minRating = 0, sortMode = "default";
let inventory = loadJSON(STOCK_KEY, {});
let notifications = loadJSON(NOTIFICATIONS_KEY, []);
function loadJSON(key, fallback) { try { const v = JSON.parse(localStorage.getItem(key) || "null"); return v ?? fallback; } catch { return fallback; } }
function saveJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function getStock(id) { const p = getProduct(id); return Number(inventory[id] ?? p?.stock ?? 25); }
function notify(message) { notifications.unshift({id:Date.now()+Math.random(),message,time:new Date().toLocaleString(),read:false}); notifications=notifications.slice(0,50); saveJSON(NOTIFICATIONS_KEY,notifications); renderNotifications(); showToast(message); }

let activeCategory = "All";
let searchTerm = "";
let showAllProducts = false;
let authMode = "login";
let toastTimer;
let pendingBuyId = null;

function imageURL(product) {
  return `https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=600&q=80`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function getProduct(id) {
  return products.find(p => p.id === Number(id));
}

function filteredProducts() {
  const query = searchTerm.toLowerCase();

  return products.filter(p => {
    const categoryMatch = activeCategory === "All" || p.category === activeCategory;
    const searchMatch = `${p.name} ${p.category}`.toLowerCase().includes(query);
    const priceMatch = p.price >= minPrice && p.price <= maxPrice;
    const ratingMatch = p.rating >= minRating;
    return categoryMatch && searchMatch && priceMatch && ratingMatch;
  }).sort((a,b) => sortMode === "price-asc" ? a.price-b.price : sortMode === "price-desc" ? b.price-a.price : sortMode === "rating-desc" ? b.rating-a.rating : sortMode === "name-asc" ? a.name.localeCompare(b.name) : a.id-b.id);
}

function renderProducts() {
  const filtered = filteredProducts();
  const visible = showAllProducts || searchTerm || activeCategory !== "All"
    ? filtered
    : filtered.slice(0, 20);

  $("#resultCount").textContent = `${visible.length} of ${filtered.length} products`;
  $("#productGrid").hidden = visible.length === 0;
  $("#emptyMessage").hidden = visible.length !== 0;

  $("#productGrid").innerHTML = visible.map((p, index) => `
    <article class="product-card" data-product-detail="${p.id}" tabindex="0" role="button" aria-label="View details for ${p.name}" style="animation-delay:${Math.min(index * 25, 250)}ms">
      <div class="product-image">
        <img src="${imageURL(p)}" alt="${p.name}" loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/eee5ff/7138ed?text=SmartCart'">
        <span class="product-badge">${p.category}</span>
        <button class="heart-btn ${wishlist.has(p.id) ? "liked" : ""}"
          data-action="wishlist" data-id="${p.id}" type="button"
          aria-label="Add ${p.name} to wishlist">${wishlist.has(p.id) ? "♥" : "♡"}</button>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="rating">★★★★★ <span>${p.rating} / 5</span></div>
        <div class="product-bottom"><span class="price">${money(p.price)}</span><span class="stock-note ${getStock(p.id) < 1 ? "out-stock" : ""}">${getStock(p.id) < 1 ? "Out of stock" : getStock(p.id) < 6 ? `Only ${getStock(p.id)} left` : "In stock"}</span></div>
        <div class="product-buttons">
          <button class="add-btn" data-action="add" data-id="${p.id}" type="button" ${getStock(p.id)<1 ? "disabled" : ""}>
            ${getStock(p.id)<1 ? "Out of Stock" : cart.has(p.id) ? "✓ Added (" + cart.get(p.id) + ")" : "+ Add to Cart"}
          </button>
          <button class="buy-btn" data-action="buy" data-id="${p.id}" type="button" ${getStock(p.id)<1 ? "disabled" : ""}>Buy Now →</button>
        </div>
      </div>
    </article>
  `).join("");

  const canExplore = activeCategory === "All" && !searchTerm;
  $("#exploreMore").hidden = !canExplore || filtered.length <= 20;
  $("#exploreMore").textContent = showAllProducts ? "Show Less ↑" : "Explore More Products ↓";
  $("#moreMessage").textContent = showAllProducts
    ? "You are viewing the full collection."
    : `Showing ${visible.length} products. Explore ${Math.max(filtered.length - visible.length, 0)} more.`;
}

function updateCounts() {
  let quantity = 0;
  cart.forEach(q => quantity += q);
  $("#cartCount").textContent = quantity;
  $("#wishCount").textContent = wishlist.size;
}

function cartSubtotal() {
  let total = 0; cart.forEach((quantity,id) => { const p=getProduct(id); if(p) total += p.price*quantity; }); return total;
}
function discountValue() {
  const subtotal=cartSubtotal();
  if(appliedCoupon==="WELCOME10") return Math.round(subtotal*0.10);
  if(appliedCoupon==="SMART200" && subtotal>=2000) return 200;
  const custom=loadJSON(COUPONS_KEY,[]).find(c=>c.code===appliedCoupon&&c.active!==false&&subtotal>=(Number(c.min)||0));
  if(custom) return Math.min(subtotal,custom.type==="percent"?subtotal*Number(custom.value)/100:Number(custom.value));
  return 0;
}
function deliveryCharge() { return cartSubtotal() === 0 || cartSubtotal() - discountValue() >= 999 ? 0 : 49; }
function cartTotal() { return Math.max(0, cartSubtotal()-discountValue()) + deliveryCharge(); }

function addToCart(id) {
  const p = getProduct(id);
  if (!p) return;
  if ((cart.get(p.id) || 0) >= getStock(p.id)) { notify(`Only ${getStock(p.id)} units available for ${p.name}.`); return; }
  cart.set(p.id, (cart.get(p.id) || 0) + 1);
  updateCounts();
  renderProducts();
  renderCart();
  showToast(`${p.name} added to cart 🛒`);
}

function toggleWishlist(id) {
  const p = getProduct(id);
  if (!p) return;

  if (wishlist.has(p.id)) {
    wishlist.delete(p.id);
    showToast("Removed from wishlist");
  } else {
    wishlist.add(p.id);
    showToast("Added to wishlist 💜");
  }

  updateCounts();
  renderProducts();
  renderWishlist();
}

function renderCart() {
  if (cart.size === 0) {
    $("#cartItems").innerHTML = `<div class="empty-cart"><div>🛒</div><h3>Your cart is empty</h3><p>Add a few products to get started!</p></div>`;
  } else {
    $("#cartItems").innerHTML = [...cart.entries()].map(([id, quantity]) => {
      const p = getProduct(id);
      return `
        <article class="cart-item">
          <img src="${imageURL(p)}" alt="${p.name}" onerror="this.src='https://placehold.co/150?text=Product'">
          <div><h4>${p.name}</h4><p>${money(p.price * quantity)}</p>
            <div class="quantity-controls">
              <button data-cart="minus" data-id="${id}" type="button">−</button>
              <span>${quantity}</span>
              <button data-cart="plus" data-id="${id}" type="button">+</button>
              <button class="remove-btn" data-cart="remove" data-id="${id}" type="button">Remove</button>
            </div>
          </div>
        </article>`;
    }).join("");
  }

  $("#cartSubtotal").textContent = money(cartSubtotal());
  $("#discountAmount").textContent = "−" + money(discountValue());
  $("#cartTotal").textContent = money(cartTotal());
  if($("#deliveryCharge")) $("#deliveryCharge").textContent = money(deliveryCharge());
  if($("#deliveryMessage")) $("#deliveryMessage").textContent = deliveryCharge()===0 ? "Free delivery applied." : "₹49 delivery charge. Free delivery on orders ₹999 and above.";
  $("#checkoutTotal").textContent = money(cartTotal());
  $("#qrTotal").textContent = money(cartTotal());
  $("#checkoutBtn").disabled = cart.size === 0;
}

function renderWishlist() {
  const items = products.filter(p => wishlist.has(p.id));

  $("#wishlistItems").innerHTML = items.length ? items.map(p => `
    <article class="cart-item">
      <img src="${imageURL(p)}" alt="${p.name}" onerror="this.src='https://placehold.co/150?text=Product'">
      <div><h4>${p.name}</h4><p>${money(p.price)}</p>
        <div class="quantity-controls">
          <button data-wish="add" data-id="${p.id}" type="button">+ Add to Cart</button>
          <button class="remove-btn" data-wish="remove" data-id="${p.id}" type="button">Remove</button>
        </div>
      </div>
    </article>
  `).join("") : `<div class="empty-cart"><div>💜</div><h3>Your wishlist is empty</h3><p>Tap a heart on any product to save it.</p></div>`;
}

function openPanel(id) {
  closePanels();
  $(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePanels() {
  document.querySelectorAll(".overlay").forEach(el => el.classList.remove("open"));
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", closePanels);
});

document.querySelectorAll(".overlay").forEach(overlay => {
  overlay.addEventListener("click", event => {
    if (event.target === overlay) closePanels();
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePanels();
});

function chooseCategory(category) {
  activeCategory = category;
  showAllProducts = category !== "All" || Boolean(searchTerm);

  document.querySelectorAll(".category").forEach(button => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  renderProducts();
  $("#productsSection").scrollIntoView({ behavior: "smooth" });
}

$("#categoryButtons").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (button) chooseCategory(button.dataset.category);
});

document.querySelectorAll("[data-quick]").forEach(button => {
  button.addEventListener("click", () => chooseCategory(button.dataset.quick));
});

$("#searchInput").addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  showAllProducts = Boolean(searchTerm) || activeCategory !== "All";
  renderProducts();
});

$("#searchForm").addEventListener("submit", event => {
  event.preventDefault();
  searchTerm = $("#searchInput").value.trim();
  showAllProducts = true;
  renderProducts();
  $("#productsSection").scrollIntoView({ behavior: "smooth" });
});

$("#resetSearch").addEventListener("click", () => {
  searchTerm = "";
  activeCategory = "All";
  showAllProducts = false;
  $("#searchInput").value = "";
  document.querySelectorAll(".category").forEach(b => b.classList.toggle("active", b.dataset.category === "All"));
  renderProducts();
});

$("#exploreMore").addEventListener("click", () => {
  showAllProducts = !showAllProducts;
  renderProducts();
  if (!showAllProducts) $("#productsSection").scrollIntoView({ behavior: "smooth" });
});

$("#shopNow").addEventListener("click", () => {
  $("#productsSection").scrollIntoView({ behavior: "smooth" });
});

function renderProductDetails(id) {
  const p = getProduct(id);
  if (!p) return;
  const related = products.filter(x => x.id !== p.id && x.category === p.category).slice(0, 6);
  const relatedMarkup = related.map(r => `
    <button class="related-product" data-related-id="${r.id}" aria-label="View ${escapeHTML(r.name)} details">
      <img src="${imageURL(r)}" alt="${escapeHTML(r.name)}" onerror="this.src='https://placehold.co/160x120?text=SmartCart'">
      <span class="related-product-info"><strong>${escapeHTML(r.name)}</strong><b>${money(r.price)}</b><small>${escapeHTML(r.category)} · ${getStock(r.id)>0?`${getStock(r.id)} in stock`:'Out of stock'}</small><span class="related-description">${escapeHTML(r.name)} from our ${escapeHTML(r.category)} collection. Click to view full details.</span></span>
      <span class="related-view">View details →</span>
    </button>`).join('') || '<p>No related products found.</p>';

  $("#productDetailsContent").innerHTML = `
    <div class="detail-main-product">
      <div class="detail-image"><img src="${imageURL(p)}" alt="${escapeHTML(p.name)}" onerror="this.src='https://placehold.co/800x500?text=SmartCart'"></div>
      <div class="detail-copy">
        <span class="product-category">${escapeHTML(p.category)}</span>
        <h2>${escapeHTML(p.name)}</h2>
        <div class="rating">★★★★★ <span>${p.rating} / 5</span></div>
        <h2 class="detail-price">${money(p.price)}</h2>
        <p>${escapeHTML(p.name)} is part of our ${escapeHTML(p.category)} collection. Check product availability and details before ordering.</p>
        <ul class="detail-specs"><li><strong>Category</strong><span>${escapeHTML(p.category)}</span></li><li><strong>Customer rating</strong><span>${p.rating} / 5 (demo rating)</span></li><li><strong>Availability</strong><span>${getStock(p.id)>0?`${getStock(p.id)} in stock`:'Out of stock'}</span></li><li><strong>Product ID</strong><span>SC-${p.id}</span></li></ul>
        <div class="product-buttons"><button class="add-btn" data-detail-action="add" data-id="${p.id}" ${getStock(p.id)<1?'disabled':''}>+ Add to Cart</button><button class="buy-btn" data-detail-action="buy" data-id="${p.id}" ${getStock(p.id)<1?'disabled':''}>Buy Now →</button></div>
      </div>
    </div>
    <section class="related-section"><h3>Related Products</h3><p class="related-intro">Explore similar products. Select any item to see its full details.</p><div class="related-products">${relatedMarkup}</div></section>`;
}

function openProductDetails(id) {
  renderProductDetails(id);
  openPanel("#productDetailsOverlay");
}

let relatedProductLoading = false;
$("#productDetailsContent").addEventListener("click", event => {
  const action = event.target.closest("[data-detail-action]");
  const related = event.target.closest("[data-related-id]");
  if (related) {
    if (relatedProductLoading) return;
    relatedProductLoading = true;
    const nextId = Number(related.dataset.relatedId);
    $("#productDetailsContent").innerHTML = `<div class="related-loading" role="status"><div class="loading-spinner"></div><h3>Loading product details...</h3><p>Please wait a moment</p></div>`;
    window.setTimeout(() => {
      renderProductDetails(nextId);
      relatedProductLoading = false;
    }, 2400);
    return;
  }
  if (action) {
    const id = Number(action.dataset.id);
    if (action.dataset.detailAction === 'add') addToCart(id);
    if (action.dataset.detailAction === 'buy') buyNow(id);
  }
});
$("#productGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) { const card=event.target.closest("[data-product-detail]"); if(card) openProductDetails(Number(card.dataset.productDetail)); return; }

  const id = Number(button.dataset.id);
  if (button.dataset.action === "add") addToCart(id);
  if (button.dataset.action === "wishlist") toggleWishlist(id);
  if (button.dataset.action === "buy") { if(getStock(id)<1) { notify("This product is out of stock."); return; } buyNow(id); }
});

$("#productGrid").addEventListener("keydown",event=>{if((event.key==="Enter"||event.key===" ")&&event.target.matches("[data-product-detail]")){event.preventDefault();openProductDetails(Number(event.target.dataset.productDetail));}});

$("#cartBtn").addEventListener("click", () => {
  renderCart();
  openPanel("#cartOverlay");
});

$("#wishlistBtn").addEventListener("click", () => {
  renderWishlist();
  openPanel("#wishlistOverlay");
});

$("#cartItems").addEventListener("click", event => {
  const button = event.target.closest("[data-cart]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const current = cart.get(id) || 0;

  if (button.dataset.cart === "plus") { if (current >= getStock(id)) { notify(`Only ${getStock(id)} units available.`); return; } cart.set(id, current + 1); }
  if (button.dataset.cart === "minus") {
    if (current <= 1) cart.delete(id);
    else cart.set(id, current - 1);
  }
  if (button.dataset.cart === "remove") cart.delete(id);

  updateCounts();
  renderCart();
  renderProducts();
});

$("#wishlistItems").addEventListener("click", event => {
  const button = event.target.closest("[data-wish]");
  if (!button) return;
  if (button.dataset.wish === "add") addToCart(button.dataset.id);
  if (button.dataset.wish === "remove") toggleWishlist(button.dataset.id);
});

$("#continueShopping").addEventListener("click", closePanels);

// LOGIN AND SIGNUP: browser-local demo accounts
const ACCOUNTS_KEY = "smartcart_accounts_v1";
const SESSION_KEY = "smartcart_session_v1";

function getAccounts() {
  try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]"); }
  catch { return []; }
}
function getCurrentUser() {
  const email = localStorage.getItem(SESSION_KEY);
  return getAccounts().find(user => user.email === email) || null;
}
async function hashPassword(password, salt) {
  const bytes = new TextEncoder().encode(salt + password);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}
function setAuthMode(mode) {
  authMode = mode;
  const signup = mode === "signup";
  $("#authTitle").textContent = signup ? "Create Your Account ✨" : "Welcome Back 👋";
  $("#nameLabel").hidden = !signup;
  $("#authName").hidden = !signup;
  $("#authName").required = signup;
  $("#authName").value = "";
  $("#authPassword").autocomplete = signup ? "new-password" : "current-password";
  $("#authSubmit").textContent = signup ? "Create Account" : "Login";
  document.querySelectorAll("[data-auth]").forEach(button => button.classList.toggle("active", button.dataset.auth === mode));
}
function updateProfileUI() {
  const user = getCurrentUser();
  $("#loginBtn").textContent = user ? "👤 " + user.name : "👤 Login / Sign Up";
  $("#profileName").textContent = user?.name || "";
  $("#profileEmail").textContent = user?.email || "";
  $("#profileModalName").textContent = user?.name || "";
  $("#profileModalEmail").textContent = user?.email || "";
  $("#profileDetailName").textContent = user?.name || "";
  $("#profileDetailEmail").textContent = user?.email || "";
  $("#profileModalAvatar").textContent = user?.name?.trim().charAt(0).toUpperCase() || "U";
  if (!user) $("#profileMenu").hidden = true;
}
$("#loginBtn").addEventListener("click", () => {
  if (getCurrentUser()) $("#profileMenu").hidden = !$("#profileMenu").hidden;
  else { setAuthMode("login"); openPanel("#loginOverlay"); }
});
document.querySelectorAll("[data-auth]").forEach(button => button.addEventListener("click", () => setAuthMode(button.dataset.auth)));
$("#authForm").addEventListener("submit", async event => {
  event.preventDefault();
  const name = $("#authName").value.trim();
  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;
  if (!email || !password || (authMode === "signup" && !name)) { showToast("Please fill in all required fields."); return; }
  if (password.length < 6) { showToast("Password must be at least 6 characters."); return; }
  const button = $("#authSubmit");
  button.disabled = true;
  try {
    const accounts = getAccounts();
    const existing = accounts.find(user => user.email === email);
    if (authMode === "signup") {
      if (existing) { showToast("Email already registered. Please login."); setAuthMode("login"); $("#authEmail").value = email; return; }
      const salt = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b => b.toString(16).padStart(2, "0")).join("");
      const passwordHash = await hashPassword(password, salt);
      accounts.push({ name, email, salt, passwordHash });
      localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
      localStorage.setItem(SESSION_KEY, email);
      showToast("Welcome, " + name + "! Profile created 🎉");
    } else {
      if (!existing) { showToast("Account not found. Please sign up first."); return; }
      const disabledUsers=loadJSON(DISABLED_USERS_KEY,[]);
      if(disabledUsers.includes(email)){showToast("This demo account has been disabled by the admin.");return;}
      const hash = await hashPassword(password, existing.salt);
      if (hash !== existing.passwordHash) { showToast("Incorrect password."); return; }
      localStorage.setItem(SESSION_KEY, email);
      showToast("Welcome back, " + existing.name + "!");
    }
    updateProfileUI(); closePanels(); $("#authForm").reset(); setAuthMode("login");
  } catch {
    showToast("Please open SmartCart with VS Code Live Server.");
  } finally { button.disabled = false; }
});
$("#myProfileBtn").addEventListener("click", () => { $("#profileMenu").hidden = true; updateProfileUI(); openPanel("#profileOverlay"); });
function logoutUser() {
  localStorage.removeItem(SESSION_KEY); updateProfileUI(); closePanels(); showToast("Logged out successfully.");
}
$("#logoutBtn").addEventListener("click", logoutUser);
$("#profileLogoutBtn").addEventListener("click", logoutUser);
document.addEventListener("click", event => {
  const area = document.querySelector(".profile-area");
  if (area && !area.contains(event.target)) $("#profileMenu").hidden = true;
});
updateProfileUI();

// BUY NOW: select one product, show processing, then checkout details
function buyNow(id) {
  const p = getProduct(id);
  if (!p) return;
  if (getStock(p.id) < 1) { notify("This product is out of stock."); return; }

  pendingBuyId = p.id;
  cart.clear();
  cart.set(p.id, 1);
  updateCounts();
  renderCart();
  renderProducts();

  showCheckoutScreen("processingScreen");
  openPanel("#checkoutOverlay");

  setTimeout(() => {
    if (!$("#checkoutOverlay").classList.contains("open")) return;
    showCheckoutScreen("checkoutForm");
    $("#checkoutTotal").textContent = money(cartTotal());
  }, 1000);
}

function showCheckoutScreen(screenId) {
  ["checkoutForm", "processingScreen", "paymentScreen", "qrScreen", "failedScreen", "successScreen"].forEach(id => {
    document.getElementById(id).hidden = id !== screenId;
  });

  $("#stepDetails").classList.toggle("step-active", screenId === "checkoutForm" || screenId === "processingScreen");
  $("#stepPayment").classList.toggle("step-active", ["paymentScreen", "qrScreen", "failedScreen"].includes(screenId));
  $("#stepDone").classList.toggle("step-active", screenId === "successScreen");
}

$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.size) {
    showToast("Add a product to your cart first.");
    return;
  }
  pendingBuyId = null;
  const currentUser = getCurrentUser();
  if (currentUser) { $("#customerName").value = currentUser.name || ""; $("#customerEmail").value = currentUser.email || ""; }
  const savedAddresses = loadJSON(addressKey(), []); if (savedAddresses.length && !$("#customerAddress").value) $("#customerAddress").value = savedAddresses[savedAddresses.length-1].address;
  $("#checkoutTotal").textContent = money(cartTotal());
  showCheckoutScreen("checkoutForm");
  openPanel("#checkoutOverlay");
});

$("#checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!$("#checkoutForm").reportValidity()) return;

  showCheckoutScreen("processingScreen");
  setTimeout(() => {
    showCheckoutScreen("paymentScreen");
  }, 900);
});

$("#backToDetails").addEventListener("click", () => showCheckoutScreen("checkoutForm"));

function placeDemoOrder(paymentMethod) {
  if (!cart.size) {
    showToast("Your cart is empty.");
    showCheckoutScreen("checkoutForm");
    return;
  }

  const name = $("#customerName").value.trim();
  const total = money(cartTotal());
  const orderId = "SC" + Date.now().toString().slice(-8);
  const order = { id:orderId, date:new Date().toISOString(), name, email:$("#customerEmail").value.trim(), phone:$("#customerPhone").value.trim(), address:$("#customerAddress").value.trim(), items:[...cart.entries()].map(([id,quantity])=>({id,name:getProduct(id)?.name,price:getProduct(id)?.price,quantity})), subtotal:cartSubtotal(), discount:discountValue(), total:cartTotal(), paymentMethod, paymentStatus: paymentMethod.includes("Cash on Delivery") ? "Pay on delivery" : "Awaiting verification", status:"Placed" };
  const user = getCurrentUser(); order.owner = user?.email || order.email;
  const orders = loadJSON(ORDERS_KEY, []); orders.unshift(order); saveJSON(ORDERS_KEY,orders);
  order.items.forEach(item => { inventory[item.id] = Math.max(0,getStock(item.id)-item.quantity); }); saveJSON(STOCK_KEY,inventory);
  notify(`Order ${orderId} placed successfully.`);
  $("#orderNumber").textContent = orderId;
  $("#orderMessage").textContent = `Thank you, ${name}! Your demo order total is ${total}. Payment method: ${paymentMethod}.`;
  showCheckoutScreen("successScreen");

  cart.clear(); appliedCoupon = ""; $("#couponInput").value=""; $("#couponMessage").textContent="Try WELCOME10 for 10% off (demo).";
  pendingBuyId = null;
  updateCounts();
  renderCart();
  renderProducts(); renderOrders(); renderAdmin();
  showToast("Demo order placed successfully 🎉");
}

// Dynamic UPI QR for the user's PhonePe-linked UPI ID.
// This creates a payment request with the current cart total; it does not verify payment.
const SMARTCART_UPI_ID = "8055767030@axl";
const SMARTCART_UPI_NAME = "KRUSHNA KISHOR DHOLE";

function buildDynamicUpiRequest() {
  const amount = Number(cartTotal()).toFixed(2);
  const params = new URLSearchParams({
    pa: SMARTCART_UPI_ID,
    pn: SMARTCART_UPI_NAME,
    am: amount,
    cu: "INR",
    tn: "SmartCart order"
  });
  return "upi://pay?" + params.toString();
}

function renderDynamicPaymentQr() {
  const amount = Number(cartTotal());
  $("#qrTotal").textContent = money(amount);
  $("#upiPayeeLabel").textContent = "Pay to: " + SMARTCART_UPI_NAME;
  const upiUri = buildDynamicUpiRequest();
  $("#openUpiApp").href = upiUri;
  const qrContainer = $("#dynamicPaymentQr");
  qrContainer.innerHTML = "";

  if (typeof QRCode === "undefined") {
    qrContainer.innerHTML = '<p class="payment-note">QR generator could not load. Check your internet connection and try again.</p>';
    return;
  }
  new QRCode(qrContainer, {
    text: upiUri,
    width: 230,
    height: 230,
    colorDark: "#17131f",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });
}

$("#paymentScreen").addEventListener("click", event => {
  const button = event.target.closest("[data-payment]");
  if (!button) return;

  if (button.dataset.payment === "cod") {
    placeDemoOrder("Cash on Delivery (Demo)");
  } else {
    renderDynamicPaymentQr();
    showCheckoutScreen("qrScreen");
    showToast("UPI payment request prepared. Verify payment in your account before treating the order as paid.");
  }
});

$("#simulateFail").addEventListener("click", () => showCheckoutScreen("failedScreen"));
$("#retryPayment").addEventListener("click", () => { renderDynamicPaymentQr(); showCheckoutScreen("qrScreen"); });
$("#qrBack").addEventListener("click", () => showCheckoutScreen("paymentScreen"));
$("#failedBack").addEventListener("click", () => showCheckoutScreen("paymentScreen"));
$("#failedCod").addEventListener("click", () => placeDemoOrder("Cash on Delivery (Demo)"));

$("#finishOrder").addEventListener("click", () => {
  closePanels();
  $("#checkoutForm").reset();
  showCheckoutScreen("checkoutForm");
  showToast("Thanks for shopping with SmartCart 💜");
});


// Advanced filters and sorting
function applyFiltersFromUI() {
  minPrice = Math.max(0, Number($("#minPrice").value) || 0);
  maxPrice = $("#maxPrice").value === "" ? Infinity : Math.max(0, Number($("#maxPrice").value));
  minRating = Number($("#ratingFilter").value) || 0;
  sortMode = $("#sortProducts").value;
  showAllProducts = true; renderProducts();
}
["minPrice","maxPrice","ratingFilter","sortProducts"].forEach(id => $("#"+id).addEventListener("change",applyFiltersFromUI));
$("#clearFilters").addEventListener("click",()=>{ $("#minPrice").value=""; $("#maxPrice").value=""; $("#ratingFilter").value="0"; $("#sortProducts").value="default"; minPrice=0;maxPrice=Infinity;minRating=0;sortMode="default";renderProducts(); });
$("#applyCoupon").addEventListener("click",()=>{
  const code=$("#couponInput").value.trim().toUpperCase();
  const custom=loadJSON(COUPONS_KEY,[]).find(c=>c.code===code&&c.active!==false);
  if(code==="WELCOME10") appliedCoupon=code;
  else if(code==="SMART200" && cartSubtotal()>=2000) appliedCoupon=code;
  else if(custom && cartSubtotal()>=(Number(custom.min)||0)) appliedCoupon=code;
  else { appliedCoupon=""; $("#couponMessage").textContent=code==="SMART200"?"SMART200 applies to carts of ₹2,000 or more.":custom?`This coupon requires a minimum cart value of ${money(custom.min||0)}.`:"Invalid coupon code. Check the code or try WELCOME10 / SMART200."; renderCart(); return; }
  $("#couponMessage").textContent=`${appliedCoupon} applied successfully!`; renderCart(); notify(`Coupon ${appliedCoupon} applied.`);
});

// Orders, tracking and cancellation. Demo status can be advanced manually for demonstration.
function renderOrders() {
  const user = getCurrentUser();
  const all = loadJSON(ORDERS_KEY, []);
  const orders = all.filter(o => user ? o.owner === user.email : o.owner === o.email);
  // Demo simulation: advance one status per elapsed 24 hours from placement.
  let changed=false; const stageFlow=["Placed","Confirmed","Shipped","Delivered"];
  all.forEach(o=>{if(o.status==="Cancelled"||!o.date)return;const elapsed=Math.floor((Date.now()-new Date(o.date).getTime())/86400000);const next=stageFlow[Math.min(3,Math.max(0,elapsed))];if(stageFlow.includes(o.status)&&stageFlow.indexOf(next)>stageFlow.indexOf(o.status)){o.status=next;o.updatedAt=new Date().toISOString();logAdminActivity(`Changed order ${o.id} to ${next}`);changed=true;}});
  if(changed)saveJSON(ORDERS_KEY,all);
  const safe = value => escapeHTML(String(value ?? ""));
  const stages = ["Placed", "Confirmed", "Shipped", "Delivered"];
  const statusLabel = { Placed: "Order placed", Confirmed: "Confirmed", Shipped: "Shipped", Delivered: "Delivered", Cancelled: "Cancelled" };
  const paymentLabel = value => value || "Not available";
  $("#ordersList").innerHTML = orders.length ? orders.map(o => {
    const status = stages.includes(o.status) || o.status === "Cancelled" ? o.status : "Placed";
    const currentIndex = stages.indexOf(status);
    const tracking = status === "Cancelled"
      ? `<p class="tracking-note"><strong>Order cancelled</strong><br>This demo order has been cancelled.</p>`
      : `<div class="tracking-timeline tracking-vertical">${stages.map((stage, index) => `<div class="tracking-stage ${index <= currentIndex ? "is-done" : ""} ${stage === status ? "is-current" : ""}"><span class="tracking-dot">${index < currentIndex ? "✓" : index + 1}</span><span class="tracking-stage-copy"><strong>${stage}</strong><small>${index===0?"Order received":index===1?"Order confirmed":index===2?"Order shipped":"Order delivered"} · ${index*24} hours after placing</small></span></div>`).join("")}</div><p class="tracking-note">${status === "Placed" ? "We have received your order." : status === "Confirmed" ? "Your order is being prepared." : status === "Shipped" ? "Your order is on the way." : "Your order is marked as delivered in this demo."}</p>`;
    const items = (o.items || []).map(i => `<li><span>${safe(i.name || "Product")} × ${Number(i.quantity || 1)}</span><strong>${money(Number(i.price || 0) * Number(i.quantity || 1))}</strong></li>`).join("");
    const canCancel = status === "Placed";
    return `<article class="order-card">
      <div class="order-card-head"><div><small class="order-eyebrow">ORDER ID</small><strong>${safe(o.id)}</strong></div><span class="order-status status-${status.toLowerCase()}">${safe(statusLabel[status] || status)}</span></div>
      <div class="order-meta"><span>📅 ${safe(new Date(o.date).toLocaleString())}</span><span>💰 <strong>${money(Number(o.total || 0))}</strong></span></div>
      <div class="order-items"><strong>Items ordered</strong><ul>${items || "<li>Product details unavailable</li>"}</ul></div>
      <div class="order-payment-grid"><div><small>PAYMENT METHOD</small><strong>${safe(o.paymentMethod || "Not specified")}</strong></div><div><small>PAYMENT STATUS</small><strong class="payment-status">${safe(paymentLabel(o.paymentStatus || (String(o.paymentMethod || "").includes("Cash on Delivery") ? "Pay on delivery" : "Awaiting verification")))}</strong></div></div>
      <p class="order-address">📍 ${safe(o.address || "No delivery address saved")}</p>
      <div class="order-actions">${canCancel ? `<button class="outline-btn" data-order-action="cancel" data-order-id="${safe(o.id)}">Cancel order</button>` : ""}<button class="primary-btn" data-order-action="track" data-order-id="${safe(o.id)}">${status === "Cancelled" ? "View cancellation" : "Track order"}</button></div>
      <div class="tracking-detail" id="track-${safe(o.id)}" hidden>${tracking}</div>
    </article>`;
  }).join("") : `<div class="empty-cart"><div>📦</div><h3>No orders yet</h3><p>Your orders will appear here after you place an order.</p></div>`;
}
$("#ordersBtn").addEventListener("click",()=>{renderOrders();openPanel("#ordersOverlay");});
$("#ordersList").addEventListener("click",event=>{const b=event.target.closest("[data-order-action]");if(!b)return;const all=loadJSON(ORDERS_KEY,[]);const o=all.find(x=>x.id===b.dataset.orderId);if(!o)return;if(b.dataset.orderAction==="track"){const note=$("#track-"+o.id);note.hidden=!note.hidden;b.textContent=note.hidden?"Track order":"Hide tracking";return;}if(o.status!=="Placed"){notify("Only newly placed orders can be cancelled in this demo.");return;}o.status="Cancelled";saveJSON(ORDERS_KEY,all);notify(`Order ${o.id} cancelled.`);renderOrders();renderAdmin();});

// Notifications center
function renderNotifications(){const count=notifications.filter(n=>!n.read).length;const badge=$("#notificationCount");if(badge)badge.textContent=count;const list=$("#notificationsList");if(list)list.innerHTML=notifications.length?notifications.map(n=>`<article class="notification-item"><strong>${n.message}</strong><small>${n.time}</small></article>`).join(""):`<p class="muted">No notifications yet.</p>`;}
$("#notificationsBtn").addEventListener("click",()=>{notifications=notifications.map(n=>({...n,read:true}));saveJSON(NOTIFICATIONS_KEY,notifications);renderNotifications();openPanel("#notificationsOverlay");});
$("#clearNotifications").addEventListener("click",()=>{notifications=[];saveJSON(NOTIFICATIONS_KEY,notifications);renderNotifications();});

// Profile editing and saved delivery addresses
function addressKey(){return "smartcart_addresses_"+(getCurrentUser()?.email||"guest");}
function renderAddresses(){const list=$("#addressList");if(!list)return;const addresses=loadJSON(addressKey(),[]);list.innerHTML=addresses.length?addresses.map((a,i)=>`<div class="saved-address"><strong>${a.label}</strong><p>${a.address}</p><button type="button" class="text-btn" data-remove-address="${i}">Remove</button></div>`).join(""):`<p class="muted">No saved addresses yet.</p>`;}
$("#editProfileForm").addEventListener("submit",event=>{event.preventDefault();const user=getCurrentUser();if(!user){notify("Please log in first.");return;}const accounts=getAccounts();const account=accounts.find(u=>u.email===user.email);if(!account)return;account.name=$("#editProfileName").value.trim();localStorage.setItem(ACCOUNTS_KEY,JSON.stringify(accounts));updateProfileUI();notify("Profile updated.");});
$("#profileModalName").addEventListener("click",()=>{const u=getCurrentUser();if(u)$("#editProfileName").value=u.name;});
$("#addressForm").addEventListener("submit",event=>{event.preventDefault();const addresses=loadJSON(addressKey(),[]);addresses.push({label:$("#addressLabel").value.trim(),address:$("#addressText").value.trim()});saveJSON(addressKey(),addresses);event.target.reset();renderAddresses();notify("Delivery address saved.");});
$("#addressList").addEventListener("click",event=>{const b=event.target.closest("[data-remove-address]");if(!b)return;const addresses=loadJSON(addressKey(),[]);addresses.splice(Number(b.dataset.removeAddress),1);saveJSON(addressKey(),addresses);renderAddresses();notify("Address removed.");});
const originalUpdateProfileUI=updateProfileUI;
updateProfileUI=function(){originalUpdateProfileUI();const u=getCurrentUser();if($("#editProfileName"))$("#editProfileName").value=u?.name||"";renderAddresses();};

// Admin dashboard for the browser-only demonstration. NOT production authentication.
const ADMIN_DEMO_CODE = "SC-ADMIN-2026";
const ADMIN_SESSION_KEY = "smartcart_admin_unlocked_v1";
const COUPONS_KEY = "smartcart_custom_coupons_v1";
const DISABLED_USERS_KEY = "smartcart_disabled_users_v1";
function isAdminUnlocked(){ return sessionStorage.getItem(ADMIN_SESSION_KEY)==="yes"; }
const ACTIVITY_KEY="smartcart_admin_activity_v1";
function logAdminActivity(message){const list=loadJSON(ACTIVITY_KEY,[]);list.unshift({message,time:new Date().toLocaleString()});saveJSON(ACTIVITY_KEY,list.slice(0,30));}
function renderAdmin(){
  const tbody=$("#adminProducts"); if(!tbody)return;
  const orders=loadJSON(ORDERS_KEY,[]), accounts=getAccounts(), coupons=loadJSON(COUPONS_KEY,[]);
  tbody.innerHTML=products.map(p=>`<tr><td>${p.name}</td><td><input type="number" min="0" step="0.01" data-admin-price="${p.id}" value="${p.price}"></td><td><input type="number" min="0" step="1" data-admin-stock="${p.id}" value="${getStock(p.id)}"></td><td><button type="button" class="outline-btn" data-admin-save="${p.id}">Save</button></td><td><button type="button" class="text-btn" data-admin-delete="${p.id}">Delete</button></td></tr>`).join("");
  $("#adminSummary").innerHTML=`<div><strong>${products.length}</strong><small>Products</small></div><div><strong>${orders.length}</strong><small>Total orders</small></div><div><strong>${products.reduce((sum,p)=>sum+getStock(p.id),0)}</strong><small>Units in stock</small></div><div><strong>${accounts.length}</strong><small>Demo accounts</small></div>`;
  const deliveredOrActive=orders.filter(o=>o.status!=="Cancelled");
  const revenue=deliveredOrActive.reduce((sum,o)=>sum+Number(o.total||0),0);
  $("#adminSalesSummary").innerHTML=`<div><strong>${money(revenue)}</strong><small>Demo order value (not verified revenue)</small></div><div><strong>${orders.filter(o=>o.status==="Placed").length}</strong><small>New orders</small></div><div><strong>${orders.filter(o=>o.status==="Shipped").length}</strong><small>Shipped orders</small></div><div><strong>${orders.filter(o=>o.status==="Delivered").length}</strong><small>Delivered orders</small></div>`;
  $("#adminOrders").innerHTML=orders.length?orders.map(o=>`<tr><td>${o.id}</td><td>${escapeHTML(o.name||o.email||"Customer")}<br><small>${escapeHTML(o.email||o.owner||"")}</small></td><td>${money(Number(o.total||0))}</td><td><select data-order-status="${o.id}">${["Placed","Confirmed","Shipped","Delivered","Cancelled"].map(st=>`<option ${o.status===st?"selected":""}>${st}</option>`).join("")}</select></td><td><button class="outline-btn" data-save-order-status="${o.id}">Update</button></td></tr>`).join(""):`<tr><td colspan="5">No orders yet.</td></tr>`;
  $("#adminCouponList").innerHTML=coupons.length?coupons.map((c,i)=>`<div class="saved-address"><strong>${escapeHTML(c.code)}</strong> — ${c.type==="percent"?`${c.value}% off`:`${money(c.value)} off`} · Minimum cart ${money(c.min||0)} <button class="text-btn" data-delete-coupon="${i}">Delete</button></div>`).join(""):`<p class="muted">No custom coupons created yet. Built-in coupons: WELCOME10 and SMART200.</p>`;
  const low=products.filter(p=>getStock(p.id)<6);
  $("#lowStockAlerts").innerHTML=low.length?low.map(p=>`<div class="insight-row"><span>${escapeHTML(p.name)}</span><strong>${getStock(p.id)} left</strong></div>`).join(""):`<p>All products have healthy stock levels.</p>`;
  const sold={};orders.forEach(o=>(o.items||[]).forEach(i=>sold[i.id]=(sold[i.id]||0)+Number(i.quantity||0)));
  const top=products.slice().sort((a,b)=>(sold[b.id]||0)-(sold[a.id]||0)).filter(p=>sold[p.id]).slice(0,5);
  $("#topSellingProducts").innerHTML=top.length?top.map(p=>`<div class="insight-row"><span>${escapeHTML(p.name)}</span><strong>${sold[p.id]} sold</strong></div>`).join(""):`<p>No sales yet. Place demo orders to populate this report.</p>`;
  const activity=loadJSON(ACTIVITY_KEY,[]);$("#adminActivityLog").innerHTML=activity.length?activity.map(a=>`<div class="insight-row"><span>${escapeHTML(a.message)}</span><small>${escapeHTML(a.time)}</small></div>`).join(""):`<p>No admin activity recorded yet.</p>`;
  const disabled=loadJSON(DISABLED_USERS_KEY,[]);
  $("#adminUsers").innerHTML=accounts.length?accounts.map(u=>`<div class="saved-address"><strong>${escapeHTML(u.name||"User")}</strong><p>${escapeHTML(u.email)}</p><small>${disabled.includes(u.email)?"Disabled in demo":"Active demo account"}</small> <button class="outline-btn" data-toggle-user="${encodeURIComponent(u.email)}">${disabled.includes(u.email)?"Enable":"Disable"} account</button></div>`).join(""):`<p class="muted">No registered demo accounts yet.</p>`;
}
function escapeHTML(value){return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function openAdminDashboard(){
  openPanel("#adminOverlay");
  $("#adminGate").hidden=isAdminUnlocked();
  $("#adminWorkspace").hidden=!isAdminUnlocked();
  if(isAdminUnlocked())renderAdmin();
}
$("#adminBtn").addEventListener("click",openAdminDashboard);
$("#adminLoginForm").addEventListener("submit",event=>{event.preventDefault();if($("#adminPasscode").value!==ADMIN_DEMO_CODE){notify("Incorrect demo admin code.");return;}sessionStorage.setItem(ADMIN_SESSION_KEY,"yes");$("#adminPasscode").value="";$("#adminGate").hidden=true;$("#adminWorkspace").hidden=false;renderAdmin();notify("Admin demo unlocked for this tab.");});
$("#adminProducts").addEventListener("click",event=>{const b=event.target.closest("[data-admin-save]");if(!b)return;const id=Number(b.dataset.adminSave),p=getProduct(id);if(!p)return;const priceInput=$(`[data-admin-price="${id}"]`),stockInput=$(`[data-admin-stock="${id}"]`);const price=Number(priceInput.value),stock=Number(stockInput.value);if(!Number.isFinite(price)||price<0||!Number.isInteger(stock)||stock<0){notify("Enter a valid price and whole-number stock.");return;}p.price=price;inventory[id]=stock;logAdminActivity(`Updated ${p.name}: price ₹${price}, stock ${stock}`);saveJSON(STOCK_KEY,inventory);const prices={};products.forEach(item=>prices[item.id]=item.price);saveJSON(PRICES_KEY,prices);renderProducts();renderCart();renderAdmin();notify(`${p.name} price and stock updated.`);});
$("#adminAddProductForm").addEventListener("submit",event=>{event.preventDefault();const name=$("#newProductName").value.trim(),category=$("#newProductCategory").value,price=Number($("#newProductPrice").value),stock=Number($("#newProductStock").value);if(!name||!Number.isFinite(price)||price<=0||!Number.isInteger(stock)||stock<0){notify("Enter valid product details.");return;}const id=Math.max(0,...products.map(p=>p.id))+1;products.push({id,name,category,price,rating:4.3,image:"photo-1542291026-7eec264c27ff"});logAdminActivity(`Added product ${name}`);inventory[id]=stock;saveJSON(STOCK_KEY,inventory);const prices={};products.forEach(p=>prices[p.id]=p.price);saveJSON(PRICES_KEY,prices);event.target.reset();$("#newProductStock").value="10";renderProducts();renderAdmin();notify(`${name} added to the catalogue.`);});
$("#adminProducts").addEventListener("click",event=>{const b=event.target.closest("[data-admin-delete]");if(!b)return;const id=Number(b.dataset.adminDelete),idx=products.findIndex(p=>p.id===id);if(idx<0)return;if(!confirm("Remove this product from the demo catalogue?"))return;const removed=products.splice(idx,1)[0];logAdminActivity(`Removed product ${removed.name}`);delete inventory[id];saveJSON(STOCK_KEY,inventory);const prices={};products.forEach(p=>prices[p.id]=p.price);saveJSON(PRICES_KEY,prices);renderProducts();renderCart();renderAdmin();notify(`${removed.name} removed.`);});
$("#adminOrders").addEventListener("click",event=>{const b=event.target.closest("[data-save-order-status]");if(!b)return;const all=loadJSON(ORDERS_KEY,[]),o=all.find(x=>x.id===b.dataset.saveOrderStatus);if(!o)return;const next=$(`[data-order-status="${o.id}"]`).value;o.status=next;o.updatedAt=new Date().toISOString();logAdminActivity(`Changed order ${o.id} to ${next}`);saveJSON(ORDERS_KEY,all);notify(`Order ${o.id} status updated to ${next}.`);renderOrders();renderAdmin();});
$("#adminCouponForm").addEventListener("submit",event=>{event.preventDefault();const code=$("#newCouponCode").value.trim().toUpperCase().replace(/\s+/g,"");const type=$("#newCouponType").value,value=Number($("#newCouponValue").value),min=Number($("#newCouponMin").value)||0;if(!/^[A-Z0-9_-]{3,24}$/.test(code)||!Number.isFinite(value)||value<=0||(type==="percent"&&value>100)||min<0){notify("Check coupon code, discount and minimum cart value.");return;}const coupons=loadJSON(COUPONS_KEY,[]);if(["WELCOME10","SMART200"].includes(code)||coupons.some(c=>c.code===code)){notify("That coupon code already exists.");return;}coupons.push({code,type,value,min,active:true});logAdminActivity(`Created coupon ${code}`);saveJSON(COUPONS_KEY,coupons);event.target.reset();$("#newCouponMin").value="0";renderAdmin();notify(`Coupon ${code} created.`);});
$("#adminCouponList").addEventListener("click",event=>{const b=event.target.closest("[data-delete-coupon]");if(!b)return;const coupons=loadJSON(COUPONS_KEY,[]);coupons.splice(Number(b.dataset.deleteCoupon),1);saveJSON(COUPONS_KEY,coupons);renderAdmin();notify("Coupon deleted.");});
$("#adminUsers").addEventListener("click",event=>{const b=event.target.closest("[data-toggle-user]");if(!b)return;const email=decodeURIComponent(b.dataset.toggleUser),disabled=loadJSON(DISABLED_USERS_KEY,[]),index=disabled.indexOf(email);if(index>=0)disabled.splice(index,1);else disabled.push(email);saveJSON(DISABLED_USERS_KEY,disabled);renderAdmin();notify(`Demo account ${index>=0?"enabled":"disabled"}.`);});

$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  showToast("Thanks for subscribing! (Demo only) 💌");
  event.target.reset();
});

// Initial display
renderProducts();
updateCounts();
renderCart();
renderWishlist();
renderNotifications();
renderOrders();
renderAdmin();
