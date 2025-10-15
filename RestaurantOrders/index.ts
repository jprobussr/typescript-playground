import { restaurants, Restaurant } from './restaurants';
import { orders, Order, PriceBracket } from './orders';

// getMaxPrice()

const getMaxPrice = (price: PriceBracket): number => {
  switch (price) {
    case PriceBracket.Low:
      return 10;
    case PriceBracket.Medium:
      return 20;
    case PriceBracket.High:
      return 30;
    default:
      throw new Error(`Unhandled PriceBracket: ${price}`);
  }
};

// Practice and Research this function
// getOrders function

const getOrder = (price: PriceBracket, orders: Order[][]): Order[][] => {
  const filteredOrders: Order[][] = [];
  const maxPrice = getMaxPrice(price);

  orders.forEach((restaurantOrders) => {
    const elgible = restaurantOrders.filter((order) => order.price <= maxPrice);
    filteredOrders.push(elgible)
  });

  return filteredOrders;
}

const elgibleOrders = getOrder(PriceBracket.High, orders);
console.log(elgibleOrders);



const printOrders = (restaurants: Restaurant[], orders: Order[][]): void => {
  restaurants.forEach((restaurant, index) => {
    const restaurantOrders = orders[index];

    if (restaurantOrders.length > 0) {
      console.log(restaurant.name);

      restaurantOrders.forEach((order) => {
        console.log(`- ${order.name}: $${order.price}`);
      });

      console.log('---');
    }
  });
};

printOrders(restaurants, elgibleOrders);
