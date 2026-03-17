document.addEventListener("DOMContentLoaded", function () {

  /* ══════════════════════════════════════
     MOBILE MENU
  ══════════════════════════════════════ */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav  = document.getElementById("mobileNav");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }

  /* ══════════════════════════════════════
     SEARCH OVERLAY
  ══════════════════════════════════════ */
  const searchBox      = document.getElementById("searchBox");
  const searchBackdrop = document.getElementById("searchBackdrop");
  const searchClose    = document.getElementById("searchClose");
  const searchInput    = document.getElementById("searchInput");

  document.querySelector(".search-toggle").addEventListener("click", () => {
    searchBox.classList.add("active");
    searchBackdrop.classList.add("active");
    setTimeout(() => searchInput.focus(), 300);
  });

  function closeSearch() {
    searchBox.classList.remove("active");
    searchBackdrop.classList.remove("active");
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
  }

  searchClose.addEventListener("click", closeSearch);
  searchBackdrop.addEventListener("click", closeSearch);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeSearch(); });

  /* ── live search filter ── */
  searchInput.addEventListener("input", function () {
    const q     = this.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".product-card");
    let match   = 0;

    const old = document.getElementById("noProductsMsg");
    if (old) old.remove();

    cards.forEach(c => {
      const name = c.querySelector(".card-name")?.innerText?.toLowerCase() || "";
      const show = q === "" || name.includes(q);
      c.style.display = show ? "" : "none";
      if (show) match++;
    });

    if (match === 0 && q !== "") {
      const p = document.createElement("p");
      p.id          = "noProductsMsg";
      p.textContent = "No products found.";
      document.getElementById("productsGrid").appendChild(p);
    }

    if (q !== "") {
      document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
    }
  });

  /* ══════════════════════════════════════
     SORT DROPDOWN
  ══════════════════════════════════════ */
  document.getElementById("sortSelect").addEventListener("change", function () {
    const val   = this.value;
    const grid  = document.getElementById("productsGrid");
    const cards = Array.from(grid.querySelectorAll(".product-card"));

    cards.sort((a, b) => {
      const na = a.querySelector(".card-name")?.innerText || "";
      const nb = b.querySelector(".card-name")?.innerText || "";
      const pa = parseFloat((a.querySelector(".card-price")?.innerText || "0").replace(/[^0-9.]/g, ""));
      const pb = parseFloat((b.querySelector(".card-price")?.innerText || "0").replace(/[^0-9.]/g, ""));

      if (val === "price-low")  return pa - pb;
      if (val === "price-high") return pb - pa;
      if (val === "name-az")    return na.localeCompare(nb);
      return 0;
    });

    cards.forEach(c => grid.appendChild(c));
  });

  /* ══════════════════════════════════════
     SLIDE PANELS  (user / favorites)
  ══════════════════════════════════════ */
  const backdrop  = document.getElementById("backdrop");
  const userPanel = document.getElementById("userPanel");
  const favPanel  = document.getElementById("favPanel");

  function openPanel(p) {
    userPanel.classList.remove("active");
    favPanel.classList.remove("active");
    p.classList.add("active");
    backdrop.classList.add("active");
  }

  function closePanels() {
    userPanel.classList.remove("active");
    favPanel.classList.remove("active");
    backdrop.classList.remove("active");
  }

  document.querySelector(".user-area").addEventListener("click", () => openPanel(userPanel));
  document.querySelector(".fav-toggle").addEventListener("click",  () => openPanel(favPanel));
  document.querySelectorAll(".panel-close").forEach(b => b.addEventListener("click", closePanels));
  backdrop.addEventListener("click", closePanels);

  /* ══════════════════════════════════════
     ACCOUNT UI
  ══════════════════════════════════════ */
  const user           = JSON.parse(localStorage.getItem("user"));
  const navUsername    = document.getElementById("nav-username");
  const accountContent = document.getElementById("accountContent");

  if (user) {
    if (navUsername)    navUsername.textContent = user.name;
    if (accountContent) accountContent.innerHTML = `
      <p style="margin-bottom:16px;font-size:14px;color:var(--ink-2)">Welcome, ${user.name}</p>
      <button onclick="localStorage.removeItem('user');location.reload()">Logout</button>
    `;
  } else {
    if (accountContent) accountContent.innerHTML = `
      <a href="register.html"><button>Create Account</button></a>
    `;
  }

  /* ══════════════════════════════════════
     PRODUCT CARD CLICK → detail page
  ══════════════════════════════════════ */
  document.querySelectorAll(".product-card").forEach((card, i) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".card-add") || e.target.closest(".card-like")) return;
      window.location.href = `product.html?id=${i + 1}`;
    });
  });

  /* ══════════════════════════════════════
     CART SYSTEM
  ══════════════════════════════════════ */
  let cart          = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount   = document.getElementById("cartcount");
  const cartBody    = document.getElementById("cartOffcanvasBody");

  function updateCartCount() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    if (cartCount) cartCount.textContent = total;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  updateCartCount();

  /* add to cart buttons (hover bar) */
  document.querySelectorAll(".card-add").forEach(btn => {
    btn.addEventListener("click", () => {
      const card  = btn.closest(".product-card");
      const name  = card.querySelector(".card-name")?.innerText.trim();
      const price = card.querySelector(".card-price")?.innerText.trim();
      const img   = card.querySelector("img")?.src;
      if (!name || !price) return;

      const ex = cart.find(i => i.name === name);
      if (ex) ex.qty++;
      else    cart.push({ name, price, img, qty: 1 });

      updateCartCount();
    });
  });

  /* render cart offcanvas */
  function showCart() {
    if (!cartBody) return;

    if (!cart.length) {
      cartBody.innerHTML = `
        <div style="text-align:center;padding:60px 0;color:var(--ink-3)">
          <i class="fa-solid fa-bag-shopping" style="font-size:32px;margin-bottom:12px;display:block;opacity:.3"></i>
          <p>Your bag is empty.</p>
        </div>`;
      return;
    }

    let total = 0;
    let html  = "";

    cart.forEach((item, idx) => {
      const p = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      const t = p * item.qty;
      total  += t;

      html += `
        <div style="display:flex;gap:14px;margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid var(--border)">
          <img src="${item.img}" style="width:68px;height:68px;object-fit:cover;flex-shrink:0">
          <div style="flex:1">
            <p style="font-size:13px;font-weight:500;margin-bottom:4px">${item.name}</p>
            <p style="font-size:12px;color:var(--ink-3);margin-bottom:10px">
              ₹${p} × ${item.qty} = <strong>₹${t.toFixed(0)}</strong>
            </p>
            <div style="display:flex;gap:8px;align-items:center">
              <button class="btn btn-outline-secondary btn-sm qty-minus" data-i="${idx}">−</button>
              <span style="font-size:13px;font-weight:500">${item.qty}</span>
              <button class="btn btn-outline-secondary btn-sm qty-plus"  data-i="${idx}">+</button>
              <button class="btn btn-sm ms-2 remove-btn" data-i="${idx}"
                style="background:var(--ink);color:#fff">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>`;
    });

    html += `
      <div style="display:flex;justify-content:space-between;font-size:15px;font-weight:500;
                  padding-top:8px;border-top:1px solid var(--border)">
        <span>Subtotal</span>
        <span>₹${total.toFixed(0)}</span>
      </div>
      <button onclick="window.location.href='checkout.html'"
        style="width:100%;margin-top:16px;background:var(--ink);color:#fff;border:none;
               padding:14px;font-family:var(--sans);font-size:13px;letter-spacing:.8px;
               text-transform:uppercase;cursor:pointer">
        Checkout
      </button>`;

    cartBody.innerHTML = html;

    cartBody.querySelectorAll(".qty-plus").forEach(b =>
      b.addEventListener("click", () => {
        cart[+b.dataset.i].qty++;
        updateCartCount();
        showCart();
      })
    );
    cartBody.querySelectorAll(".qty-minus").forEach(b =>
      b.addEventListener("click", () => {
        const i = +b.dataset.i;
        if (cart[i].qty > 1) cart[i].qty--;
        else                  cart.splice(i, 1);
        updateCartCount();
        showCart();
      })
    );
    cartBody.querySelectorAll(".remove-btn").forEach(b =>
      b.addEventListener("click", () => {
        cart.splice(+b.dataset.i, 1);
        updateCartCount();
        showCart();
      })
    );
  }

  /* open cart offcanvas */
  document.querySelector(".cart-toggle").addEventListener("click", () => {
    showCart();
    new bootstrap.Offcanvas(document.getElementById("cartOffcanvas")).show();
  });

  /* ══════════════════════════════════════
     FAVORITES SYSTEM
  ══════════════════════════════════════ */
  let favs          = JSON.parse(localStorage.getItem("favorites")) || [];
  const favCount    = document.getElementById("fav-count");
  const favItems    = document.getElementById("favItems");

  function renderFavs() {
    if (!favItems) return;
    localStorage.setItem("favorites", JSON.stringify(favs));

    if (!favs.length) {
      favItems.innerHTML = `<p class="empty-fav">No favorites yet.</p>`;
      if (favCount) favCount.textContent = 0;
      return;
    }

    favItems.innerHTML = "";
    favs.forEach((item, i) => {
      const d      = document.createElement("div");
      d.className  = "fav-item";
      d.innerHTML  = `
        <img src="${item.img}" alt="${item.name}">
        <div class="fav-info">
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <button class="btn-remove-fav" data-i="${i}">Remove</button>
        </div>`;
      favItems.appendChild(d);
    });

    if (favCount) favCount.textContent = favs.length;

    favItems.querySelectorAll(".btn-remove-fav").forEach(btn =>
      btn.addEventListener("click", function () {
        const rm = favs[+this.dataset.i];
        favs.splice(+this.dataset.i, 1);
        renderFavs();

        document.querySelectorAll(".card-like i").forEach(icon => {
          const name = icon.closest(".product-card")?.querySelector(".card-name")?.innerText;
          if (name === rm.name) {
            icon.classList.remove("liked", "fa-solid");
            icon.classList.add("fa-regular");
          }
        });
      })
    );
  }

  /* restore liked state from localStorage */
  favs.forEach(item => {
    document.querySelectorAll(".product-card").forEach(card => {
      const name = card.querySelector(".card-name")?.innerText.trim();
      if (name === item.name) {
        const icon = card.querySelector(".card-like i");
        if (icon) {
          icon.classList.add("liked", "fa-solid");
          icon.classList.remove("fa-regular");
        }
      }
    });
  });
  renderFavs();

  /* toggle heart icon */
  document.querySelectorAll(".card-like").forEach(el => {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      const card  = this.closest(".product-card");
      const name  = card.querySelector(".card-name")?.innerText.trim();
      const price = card.querySelector(".card-price")?.innerText.trim();
      const img   = card.querySelector("img")?.src;
      const icon  = this.querySelector("i");

      if (!icon.classList.contains("liked")) {
        icon.classList.add("liked", "fa-solid");
        icon.classList.remove("fa-regular");
        favs.push({ name, price, img });
      } else {
        icon.classList.remove("liked", "fa-solid");
        icon.classList.add("fa-regular");
        favs = favs.filter(f => f.name !== name);
      }
      renderFavs();
    });
  });

  /* ══════════════════════════════════════
     SHOP NOW → scroll to featured
  ══════════════════════════════════════ */
  document.querySelector(".shop-now-btn")?.addEventListener("click", () => {
    document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
  });

});