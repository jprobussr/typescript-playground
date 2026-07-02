import { orders, PriceBracket, type Order } from './orders';
import { restaurants, type Restaurant } from './restaurants';

// Count the total number of orders

let totalOrders = 0;

orders.forEach((restaurantOrders) => {
  restaurantOrders.forEach((order) => {
    console.log(order.name)
    totalOrders++;
  });
});

console.log(totalOrders);