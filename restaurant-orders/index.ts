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
    default:
      throw new Error('Invalid PriceBracket');
  }
};

const getOrders = (price: PriceBracket, orders: Order[][]): Order[][] => {
  const filteredOrders: Order[][] = [];
  const maxPrice = getMaxPrice(price);

  orders.forEach((restaurantOrders) => {
    const filteredRestaurantOrders = restaurantOrders.filter((order) => {
      return order.price <= maxPrice;
    });
    filteredOrders.push(filteredRestaurantOrders);
  });
  return filteredOrders;
};

const printOrders = (restaurants: Restaurant[], orders: Order[][]): void => {
  restaurants.forEach((restaurant, index) => {
    const restaurantOrders = orders[index];

    if (restaurantOrders.length > 0) {
      console.log(restaurant.name);

      restaurantOrders.forEach((order) => {
        console.log(`- ${order.name}: $${order.price}`);
      });

      console.log('');
    }
  });
};

const result = getOrders(PriceBracket.Low, orders);

printOrders(restaurants, result);
