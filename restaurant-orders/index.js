"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("./orders");
const restaurants_1 = require("./restaurants");
restaurants_1.restaurants.forEach((restaurant) => {
    const distance = Number(restaurant.distance);
    const priceLabel = restaurant.priceBracket === orders_1.PriceBracket.Low ? 'Affordable' : 'Premium';
    const location = distance <= 5 ? 'Nearby' : 'Far Away';
    console.log(`${restaurant.name} | ${priceLabel} | ${restaurant.deliveryTimeMinutes} min | ${location} | Open ${restaurant.openHour}:00-${restaurant.closeHour}:00`);
});
