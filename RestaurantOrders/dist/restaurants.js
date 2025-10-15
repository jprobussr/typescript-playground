"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurants = void 0;
const orders_1 = require("./orders");
exports.restaurants = [
    {
        name: 'Jasmine Steak Sushi 🍣',
        priceBracket: orders_1.PriceBracket.Medium,
        deliveryTimeMinutes: 40,
        openHour: 12,
        closeHour: 23,
        distance: 5,
    },
    {
        name: "Tom's Grill 🍗",
        priceBracket: orders_1.PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: 12,
        closeHour: 21,
        distance: 8,
    },
    {
        name: 'Jasmines 🍝',
        priceBracket: orders_1.PriceBracket.High,
        deliveryTimeMinutes: 60,
        openHour: 18,
        closeHour: 22,
        distance: 1,
    },
    {
        name: 'StarBucks 🥯',
        priceBracket: orders_1.PriceBracket.Low,
        deliveryTimeMinutes: 20,
        openHour: 0,
        closeHour: 12,
        distance: 2,
    },
    {
        name: 'Los Portales 🥢',
        priceBracket: orders_1.PriceBracket.Medium,
        deliveryTimeMinutes: 20,
        openHour: 15,
        closeHour: 23,
        distance: 12,
    },
];
