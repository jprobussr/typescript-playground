import { orders, PriceBracket, type Order } from './orders';
import { restaurants } from './restaurants';


const restaurantByOpenHour = [...restaurants].sort((a, b) => {
  return Number(a.openHour) - Number(b.openHour);
});

console.log(restaurantByOpenHour);