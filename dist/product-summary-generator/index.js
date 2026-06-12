"use strict";
const products = [
    {
        name: 'Wireless Mouse',
        price: 29.99,
        inStock: true,
        category: 'Electronics',
        rating: 4.6,
    },
    {
        name: 'Gaming Keyboard',
        price: 79.99,
        inStock: true,
        category: 'Electronics',
        rating: 4.8,
    },
    {
        name: 'USB-C Hub',
        price: 49.99,
        inStock: true,
        category: 'Accessories',
        rating: 4.3,
    },
];
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
const productSummaries = products.map((product) => {
    return generateProductSummary(product);
});
productSummaries.forEach((summary) => {
    console.log(summary);
});
const inStockProducts = products.filter((product) => {
    return product.inStock === true;
});
const inStockSummaries = inStockProducts.map((product) => {
    return generateProductSummary(product);
});
inStockSummaries.forEach((summary) => {
    console.log(summary);
});
