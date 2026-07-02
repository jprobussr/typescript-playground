import { orders, PriceBracket, type Order } from './orders';
import { restaurants, type Restaurant } from './restaurants';

const getAffordableOrders = (maxPrice: number): Order[][] => {
  const affordableOrders: Order[][] = [];

  orders.forEach((restaurantOrders) => {
    const affordableMeals = restaurantOrders.filter((order) => {
      return order.price <= maxPrice;
    });
    affordableOrders.push(affordableMeals);
  });

  return affordableOrders;
};

console.log(getAffordableOrders(16));


