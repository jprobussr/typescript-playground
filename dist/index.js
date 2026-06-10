"use strict";
const products = [
    {
        name: 'gaming keyboard',
        price: 89,
        inStock: true,
        preOrder: false,
    },
    {
        name: 'wireless mouse',
        price: 44,
        inStock: false,
        preOrder: true,
    },
    {
        name: 'monitor',
        price: 199,
        inStock: true,
        preOrder: false,
    },
];
const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};
for (const product of products) {
    console.log(product.name);
    console.log(formatPrice(product.price));
}
