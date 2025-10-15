"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
// getMaxPrice()
const getMaxPrice = (price) => {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
        case orders_1.PriceBracket.Medium:
            return 20;
        case orders_1.PriceBracket.High:
            return 30;
        default:
            throw new Error(`Unhandled PriceBracket: ${price}`);
    }
};
// Practice and Research this function
// getOrders function
const getOrder = (price, orders) => {
    const filteredOrders = [];
    const maxPrice = getMaxPrice(price);
    orders.forEach((restaurantOrders) => {
        const elgible = restaurantOrders.filter((order) => order.price <= maxPrice);
        filteredOrders.push(elgible);
    });
    return filteredOrders;
};
const elgibleOrders = getOrder(orders_1.PriceBracket.High, orders_1.orders);
console.log(elgibleOrders);
const printOrders = (restaurants, orders) => {
    restaurants.forEach((restaurant, index) => {
        const restaurantOrders = orders[index];
        if (restaurantOrders.length > 0) {
            console.log(restaurant.name);
            restaurantOrders.forEach((order) => {
                console.log(`- ${order.name}: $${order.price}`);
            });
            console.log('---');
        }
    });
};
printOrders(restaurants_1.restaurants, elgibleOrders);
