{}
interface Pizza {
    name: string;
    size: string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
      name,
      sizes,
      deal: true
    }
  }