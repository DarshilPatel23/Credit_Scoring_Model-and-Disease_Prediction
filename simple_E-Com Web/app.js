document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Mens Casual Stainless Steel Analog Watch', price: 10, image: 'img/watch1.webp' },
        { id: 2, name: 'GOLDEN HOUR Luxury Military Sports Mens watch', price: 20, image: 'img/watch2.jpg' },
        { id: 3, name: 'GOLDEN HOUR Luxury Military Sports Mens watch', price: 20, image: 'img/watch2.jpg' },
        // Add more products as needed
    ];

    const cart = [];

    function renderProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productElement);
        });
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.product.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }

        updateCart();
    };

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.product.name} x${item.quantity} - $${item.product.price * item.quantity}`;
            cartItems.appendChild(itemElement);
        });
        cartCount.textContent = cart.length;
    }

    document.getElementById('cart-button').addEventListener('click', () => {
        document.getElementById('cart').classList.toggle('hidden');
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        alert('Checkout is not implemented in this basic example.');
    });

    renderProducts();
});
