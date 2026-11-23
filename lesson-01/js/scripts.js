const menuToggle = document.getElementById("menu-toggle");
const productList = document.getElementById("product-list");
const reviewList = document.getElementById("review-list");
const mainNav = document.getElementById("main-nav");
const prevButton = document.getElementById("prev-review");
const nextButton = document.getElementById("next-review");

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
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
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

reviews.forEach(function (review) {
    const reviewCard = document.createElement("article");

    reviewCard.classList.add("review-card");

    reviewCard.innerHTML = `
        <h3>${review.name}</h3>
        <p>${review.text}</p>
        <div class="stars">
            ${"★".repeat(review.stars)}${"☆".repeat(5 - review.stars)}
        </div>
    `;

    reviewList.appendChild(reviewCard);
});

prevButton.addEventListener("click", function () {
    reviewList.scrollBy(
        { left: -reviewList.clientWidth, behavior: "smooth" }
    );
});
nextButton.addEventListener("click", function () {
    reviewList.scrollBy(
        { left: reviewList.clientWidth, behavior: "smooth" }
    );
});

