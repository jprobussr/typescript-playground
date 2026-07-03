import { orders, PriceBracket, type Order } from './orders';
import { restaurants, type Restaurant } from './restaurants';



const maxPrice = 20;
const affordableOrders: Order[][] = [];

orders.forEach((restaurantOrders) => {
  const affordableMeals = restaurantOrders.filter((order) => {
    return order.price >= maxPrice;
  });
  affordableOrders.push(affordableMeals);
});

console.log(affordableOrders);


