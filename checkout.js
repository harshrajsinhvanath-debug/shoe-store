document.addEventListener("DOMContentLoaded", function () {

    /* =============================
       LOAD CART FROM LOCALSTORAGE
    ============================== */
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update navbar cart count
    const cartBadge = document.getElementById("cartcount");
    function updateCartBadge() {
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        if (cartBadge) cartBadge.innerText = total;
    }
    updateCartBadge();

    /* =============================
       RENDER ORDER SUMMARY
    ============================== */
    function renderSummary() {
        const summaryItems  = document.getElementById("summaryItems");
        const summaryTotals = document.getElementById("summaryTotals");

        if (cart.length === 0) {
            summaryItems.innerHTML  = `<div class="empty-cart-msg"><i class="fa-solid fa-bag-shopping fa-2x" style="margin-bottom:12px;display:block;"></i>Your cart is empty.</div>`;
            summaryTotals.innerHTML = "";
            return;
        }

        // Items HTML
        let itemsHTML = "";
        cart.forEach(item => {
            const priceNum  = parseFloat(item.price.replace(/[^0-9.]/g, ""));
            const itemTotal = priceNum * item.qty;
            itemsHTML += `
                <div class="summary-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="summary-item-info">
                        <p>${item.name}</p>
                        <span>Qty: ${item.qty} × ₹${priceNum}</span>
                    </div>
                    <div class="summary-item-price">₹${itemTotal.toFixed(2)}</div>
                </div>`;
        });

        summaryItems.innerHTML = itemsHTML;

        // Totals
        const subtotal = cart.reduce((sum, item) => {
            const p = parseFloat(item.price.replace(/[^0-9.]/g, ""));
            return sum + p * item.qty;
        }, 0);

        const shipping = subtotal > 0 ? 99 : 0;
        const total    = subtotal + shipping;

        summaryTotals.innerHTML = `
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>₹${shipping}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>₹${total.toFixed(2)}</span>
            </div>`;
    }

    renderSummary();

    /* =============================
       FORM VALIDATION
    ============================== */
    function validateForm() {
        let valid = true;

        const fields = [
            { id: "fullName", errId: "fullNameErr", check: v => v.trim().length >= 3 },
            { id: "phone",    errId: "phoneErr",    check: v => /^[0-9]{10}$/.test(v.trim()) },
            { id: "address",  errId: "addressErr",  check: v => v.trim().length >= 5 },
            { id: "city",     errId: "cityErr",     check: v => v.trim().length >= 2 },
            { id: "pincode",  errId: "pincodeErr",  check: v => /^[0-9]{6}$/.test(v.trim()) }
        ];

        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const err   = document.getElementById(field.errId);
            if (!field.check(input.value)) {
                input.classList.add("error");
                err.style.display = "block";
                valid = false;
            } else {
                input.classList.remove("error");
                err.style.display = "none";
            }
        });

        return valid;
    }

    // Remove error on input
    ["fullName", "phone", "address", "city", "pincode"].forEach(id => {
        document.getElementById(id).addEventListener("input", function () {
            this.classList.remove("error");
            document.getElementById(id + "Err").style.display = "none";
        });
    });

    /* =============================
       PLACE ORDER BUTTON
    ============================== */
    document.getElementById("placeOrderBtn").addEventListener("click", function () {

        if (cart.length === 0) {
            alert("Your cart is empty! Please add products first.");
            return;
        }

        if (!validateForm()) return;

        // Clear cart
        localStorage.removeItem("cart");

        // Redirect with success
        alert("Order placed successfully! 🎉");
        window.location.href = "index.html";
    });

});