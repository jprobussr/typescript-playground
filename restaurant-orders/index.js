"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const firstRestaurantOrders = orders_1.orders[0];
const updateOrders = firstRestaurantOrders.map((order) => {
    return Object.assign(Object.assign({}, order), { isAffordable: order.price < 10 });
});
console.log(updateOrders);
