import { Product } from "./models/product";

const sample = new Product(1, "cream", 200, 50);
//const digitalProducts = new DigitalProducts(2, "Soup", 300, 500, 1000);
// console.log(digitalProducts.getDetails());
console.log(sample.sell(40));
console.log(sample.quantity);
