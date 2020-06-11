"use strict";
{ }
function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(10, 10));
console.log(getFinalPrice(100, "10%"));
