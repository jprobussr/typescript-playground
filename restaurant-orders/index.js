"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const restaurantByOpenHour = [...restaurants_1.restaurants].sort((a, b) => {
    return Number(a.openHour) - Number(b.openHour);
});
console.log(restaurantByOpenHour);
