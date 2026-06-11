"use strict";
const product = {
    name: 'Wireless Mouse',
    price: 29.99,
    inStock: true,
    category: 'Electronics',
    rating: 4.6,
};
const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};
const getStockStatus = (inStock) => {
    if (inStock) {
        return 'It is currently in stock.';
    }
    else {
        return 'It is currently out of stock.';
    }
};
const generateProductSummary = (product) => {
    return `${product.name} is a ${product.category} product priced at ${formatPrice(product.price)}. It has a rating of ${product.rating} stars. ${getStockStatus(product.inStock)}`;
};
console.log(generateProductSummary(product));
