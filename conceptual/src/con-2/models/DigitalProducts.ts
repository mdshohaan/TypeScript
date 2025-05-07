import { Product } from "./product";

export class DigitalProducts extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    public downloadSizeMB: number
  ) {
    super(id, name, price, quantity);
  }
  getDownloadInfo() {
    return `This is ${this.name} downloading...size${this.downloadSizeMB}`;
  }
}
