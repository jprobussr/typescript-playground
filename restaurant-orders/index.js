"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const getAffordableOrders = (maxPrice) => {
    const affordableOrders = [];
    orders_1.orders.forEach((restaurantOrders) => {
        const affordableMeals = restaurantOrders.filter((order) => {
            return order.price <= maxPrice;
        });
        affordableOrders.push(affordableMeals);
    });
    return affordableOrders;
};
console.log(getAffordableOrders(16));
