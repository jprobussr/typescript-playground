import { orders, type Order } from './orders';

const affordableOrders: Order[][] = [];

orders.forEach((restaurantOrders) => {
  const affordableMeals = restaurantOrders.filter((order) => {
    return order.price < 10;
  });

  affordableOrders.push(affordableMeals);
});

console.log(affordableOrders);
