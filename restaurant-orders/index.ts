import { orders, PriceBracket, type Order } from './orders';
import { restaurants, type Restaurant } from './restaurants';

const getMaxPrice = (price: PriceBracket): number => {
  switch (price) {
    case PriceBracket.Low:
      return 10;
    case PriceBracket.Medium:
      return 20;
    case PriceBracket.High:
      return 30;
  }
};

// Get Orders
const getOrders = (price: PriceBracket, orders: Order[][]): Order[][] => {
  const maxPrice = getMaxPrice(price);
  const filteredOrders: Order[][] = [];

  orders.forEach((restaurantOrders) => {
    const filteredRestaurantOrders = restaurantOrders.filter((order) => {
      return order.price <= maxPrice;
    });
    filteredOrders.push(filteredRestaurantOrders);
  });

  return filteredOrders;
};

const printOrders = (restaurant: Restaurant[], orders: Order[][]): void => {
  restaurants.forEach((restaurant, index) => {
    const restaurantOrders = orders[0];

    if (restaurantOrders.length > 0) {
      console.log(restaurant.name);

      restaurantOrders.forEach((order) => {
        console.log(`- ${order.name}: $${order.price}`);
      });
    }
  });
};

const elgibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elgibleOrders);
