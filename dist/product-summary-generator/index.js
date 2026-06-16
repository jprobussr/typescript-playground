"use strict";
const products = [
    {
        name: "Wireless Mouse",
        price: 29.99,
        inStock: true,
        category: "Electronics",
        rating: 4.6,
    },
    {
        name: "Gaming Keyboard",
        price: 79.99,
        inStock: false,
        category: "Electronics",
        rating: 4.8,
    },
    {
        name: "USB-C Hub",
        price: 49.99,
        inStock: true,
        category: "Accessories",
        rating: 4.3,
    },
];
const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
};
const getStockStatus = (inStock) => {
    if (inStock) {
        return "It currently is in stock.";
    }
    else {
        return "The item is out of stock at the moment.";
    }
};
const generateProductSummary = (product) => {
    return `${product.name} is a ${product.category} product priced at ${formatPrice(product.price)}. ${getStockStatus(product.inStock)}`;
};
// console.log(generateProductSummary(products[0]));
const productSummaries = products.map((product) => {
    return generateProductSummary(product);
});
productSummaries.forEach((summary) => {
    console.log(summary);
});
const inStockProducts = products.filter((product) => {
    return product.inStock;
});
console.log(inStockProducts);
