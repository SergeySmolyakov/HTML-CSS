'use strict';
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);
    }
}

const product = new Product('Товар1', 550);
product.make25PercentDiscount();

console.log(product);