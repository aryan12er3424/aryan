let cart = [];
let cartCount = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    updateCartUI();
}

function updateCartUI() {
    let cartList = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });

    cartTotal.textContent = total;
}

function openCart() {
    document.getElementById("cart-popup").style.display = "flex";
}

function closeCart() {
    document.getElementById("cart-popup").style.display = "none";
}
