"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
let totalOrders = 0;
orders_1.orders.forEach((restaurantOrders) => {
    restaurantOrders.forEach(() => {
        totalOrders++;
    });
});
console.log(totalOrders);
