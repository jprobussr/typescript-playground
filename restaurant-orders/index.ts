import { orders, PriceBracket, type Order } from './orders';
import { restaurants } from './restaurants';



restaurants.forEach((restaurant) => {
  const distance = Number(restaurant.distance);

  const priceLabel =
    restaurant.priceBracket === PriceBracket.Low ? 'Affordable' : 'Premium';

  const location = distance <= 5 ? 'Nearby' : 'Far Away';

  console.log(
    `${restaurant.name} | ${priceLabel} | ${restaurant.deliveryTimeMinutes} min | ${location} | Open ${restaurant.openHour}:00-${restaurant.closeHour}:00`
  );
});

