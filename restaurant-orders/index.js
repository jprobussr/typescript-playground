"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const firstRestaurantOrders = orders_1.orders[0];
const addIds = firstRestaurantOrders.map((order, index) => {
    return Object.assign(Object.assign({}, order), { id: index + 1 });
});
console.log(addIds);
