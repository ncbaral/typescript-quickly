
type Pizza = {
    name: string;
    size: string[];   
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]) {
    return {
      name,
      sizes
    }
  }
  
let pizzas = createPizza('Pepperoni', ['small', 'medium', 'large']);

export default Pizza;