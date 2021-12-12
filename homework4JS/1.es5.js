'use strict'
function Product(name, price) {    
    this.name = name;
    this.price = price;    
   }
   Product.prototype.make25PercentDiscount = function(){
    this.price = this.price - (this.price / 100 * 25);
};
   const product = new Product('Товар1', 550);
         product.make25PercentDiscount();
   
   console.log(product);