"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const restaurants_1 = require("./restaurants");
const getMaxPrice = (price) => {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
        case orders_1.PriceBracket.Medium:
            return 20;
        case orders_1.PriceBracket.High:
            return 30;
        default:
            throw new Error('Invalid PriceBracket');
    }
};
const getOrders = (price, orders) => {
    const filteredOrders = [];
    const maxPrice = getMaxPrice(price);
    orders.forEach((restaurantOrders) => {
        const filteredRestaurantOrders = restaurantOrders.filter((order) => {
            return order.price <= maxPrice;
        });
        filteredOrders.push(filteredRestaurantOrders);
    });
    return filteredOrders;
};
const printOrders = (restaurants, orders) => {
    restaurants.forEach((restaurant, index) => {
        const restaurantOrders = orders[index];
        if (restaurantOrders.length > 0) {
            console.log(restaurant.name);
            restaurantOrders.forEach((order) => {
                console.log(`- ${order.name}: $${order.price}`);
            });
            console.log('');
        }
    });
};
const result = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, result);
