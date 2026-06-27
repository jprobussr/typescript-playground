import { orders, type Order } from './orders';
import { restaurants } from './restaurants';

const firstRestaurantOrders = orders[0];

const updateOrders = firstRestaurantOrders.map((order) => {
  return {
    ...order,
    isAffordable: order.price < 10,
  };
});

console.log(updateOrders);
