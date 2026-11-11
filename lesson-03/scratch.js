const snapNeat = {
    name: "SnapNeat",
    price: 24.99,
    category: "Desk Organisers",
    colour: "Matte Black",
    available: false
};

function calculateDiscount(price, discount) {
    const discountAmount = price * (discount / 100);
    const finalPrice = price - discountAmount;

    return Number(finalPrice.toFixed(2));
}

const starterKitPrice = calculateDiscount(24.99, 15);

console.log(snapNeat.name + " costs £" + snapNeat.price);
console.log(`${snapNeat.name} costs £${snapNeat.price}`);

if (snapNeat.available === true) {
    console.log("SnapNeat is available!");
} else {
    console.log("SnapNeat is not available.");
}

const products = ["SnapNeat", "Phone Stand", "Planter"];

console.log(products[2]);

