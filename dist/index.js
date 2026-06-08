"use strict";
const product = {
    name: 'wireless mouse',
    price: 44,
    inStock: true,
    preOrder: true,
};
const getProductPrice = (product) => {
    product.price += 10;
    return product.price;
};
const selectedPrice = getProductPrice(product);
console.log(selectedPrice);
