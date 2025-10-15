import { PriceBracket } from "./orders";

export const restaurants = [
  {
    name: 'Jasmine Steak Sushi 🍣',
    priceBracket: PriceBracket.Medium,
    deliveryTimeMinutes: 40,
    openHour: 12,
    closeHour: 23,
    distance: 5,
  },
  {
    name: "Tom's Grill 🍗",
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: 12,
    closeHour: 21,
    distance: 8,
  },
  {
    name: 'Jasmines 🍝',
    priceBracket: PriceBracket.High,
    deliveryTimeMinutes: 60,
    openHour: 18,
    closeHour: 22,
    distance: 1,
  },
  {
    name: 'StarBucks 🥯',
    priceBracket: PriceBracket.Low,
    deliveryTimeMinutes: 20,
    openHour: 0,
    closeHour: 12,
    distance: 2,
  },
  {
    name: 'Los Portales 🥢',
    priceBracket: PriceBracket.Medium,
    deliveryTimeMinutes: 20,
    openHour: 15,
    closeHour: 23,
    distance: 12,
  },
];


export type Restaurant = (typeof restaurants)[0];
