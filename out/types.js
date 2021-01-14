"use strict";
var pizza;
function createPizza(name, sizes) {
    return {
        name: name,
        sizes: sizes
    };
}
var pizzas = createPizza('Pepperoni', ['small', 'medium']);
console.log(typeof (pizzas));
