export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getDetails() {
    return `This is ${this.name} and Price:$${this.price}`;
  }
  sell(unit: number): string {
    if (unit > this.quantity) {
      return "Product has been finished";
    } else {
      this.quantity -= unit;
    }
    return `${this.name} ${unit} has been sold`;
  }
}
