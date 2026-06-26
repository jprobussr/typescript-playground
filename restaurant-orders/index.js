"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const affordableOrders = [];
orders_1.orders.forEach((restaurantOrders) => {
    const affordableMeals = restaurantOrders.filter((order) => {
        return order.price < 10;
    });
    affordableOrders.push(affordableMeals);
});
console.log(affordableOrders);
