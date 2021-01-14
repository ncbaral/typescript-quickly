{}
function getFinalPrice(price: number, discount: number) {
    return price - price/discount;
}

console.log(getFinalPrice(10, 10));
console.log(getFinalPrice(100, "10%"));