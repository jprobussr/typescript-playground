import { orders } from './orders';

let totalOrders = 0;

orders.forEach((restaurantOrders) => {
    restaurantOrders.forEach(() => {
        totalOrders++;
    });
});

console.log(totalOrders);
