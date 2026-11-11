const menuToggle = document.getElementById("menu-toggle");
const productList = document.getElementById("product-list");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

const products = [
    {
        name: "SnapNeat Starter Kit",
        image: "images/snapneat.png",
        description: "A modular magnetic desk organisation system.",
        price: "£24.99",
        numericPrice: 24.99,
        discount: 10,
        url: "https://www.etsy.com/uk/listing/4554990219/snapneat-modular-desk-organizer-set",
    },
    {
        name: "Bookend Planter With Water Reservoir",
        image: "images/bookend-planter.jpeg",
        description: "A stylish bookend that doubles as a planter.",
        price: "From £9.50",
        url: "https://www.etsy.com/uk/listing/4302554150/bookend-planter-with-water-reservoir",
    },
    {
        name: "Handy Toolkit",
        image: "images/handy-toolkit.jpg",
        description: "A compact and versatile tool for all your DIY needs.",
        price: "From £9.98",
        url: "https://www.etsy.com/uk/listing/4442723619/handy-toolkit",
    },
];

products.forEach(function (product) {
    const productCard = document.createElement("section");

    productCard.classList.add("product-section");

    let priceHTML = "";
    if (product.discount) {
        const discountedPrice = calculateDiscount(product.numericPrice, product.discount);
        priceHTML = `
            <span class="old-price">${product.price}</span>
            <strong>£${discountedPrice.toFixed(2)}</strong>
            <small>${product.discount}% OFF</small>
        `;
    } else {
        priceHTML = product.price;
    }

    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <img class="product-img" src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <button class="neon-button highlight-button">
            Highlight product
        </button>
        <p>${priceHTML}</p>
        <a class="neon-button" href="${product.url}" target="_blank" rel="noopener noreferrer">
            View Etsy
        </a>
    `;

    productList.appendChild(productCard);
});

productList.addEventListener("click", function (event) {
    if (event.target.classList.contains("highlight-button")) {
        const productSection = event.target.closest(".product-section");
        highlightProduct(productSection);
    }
});

function highlightProduct(productSection) {
    productSection.classList.toggle("highlight");
}

function calculateDiscount(price, discount) {
    const discountAmount = price * (discount / 100);
    const finalPrice = price - discountAmount;

    return Number(finalPrice.toFixed(2));
}