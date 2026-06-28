import { orders, type Order } from './orders';
import { restaurants } from './restaurants';

const firstRestaurantOrders = orders[0];

const addIds = firstRestaurantOrders.map((order, index) => {
  return {
    ...order,
    id: index + 1,
  };
});

console.log(addIds);