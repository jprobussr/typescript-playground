"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const maxPrice = 20;
const affordableOrders = [];
orders_1.orders.forEach((restaurantOrders) => {
    const affordableMeals = restaurantOrders.filter((order) => {
        return order.price >= maxPrice;
    });
    affordableOrders.push(affordableMeals);
});
console.log(affordableOrders);
