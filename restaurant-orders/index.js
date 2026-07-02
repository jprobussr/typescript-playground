"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
// Count the total number of orders
let totalOrders = 0;
orders_1.orders.forEach((restaurantOrders) => {
    restaurantOrders.forEach((order) => {
        console.log(order.name);
        totalOrders++;
    });
});
console.log(totalOrders);
