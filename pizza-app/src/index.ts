type Pizza = {
  name: string;
  price: number;
  size: string;
  isAvailable: boolean;
};

const menu: Pizza[] = [
  {
    name: 'Cheese Pizza',
    price: 12.99,
    size: 'medium',
    isAvailable: true,
  },
  {
    name: 'Pepperoni Pizza',
    price: 14.99,
    size: 'large',
    isAvailable: true,
  },
  {
    name: 'Veggie Pizza',
    price: 13.99,
    size: 'medium',
    isAvailable: false,
  },
];

const foundPizza = menu.find((pizza) => {
  return pizza.name === 'Pepperoni Pizza';
});

console.log(foundPizza);

const availablePizza = menu.filter((pizza) => {
  return pizza.isAvailable;
});

const getAvailabilityText = (available: boolean): string => {
  if (available) {
    return 'In Stock';
  }

  return 'Sold Out';
};

const formatPizza = (pizza: Pizza): string => {
  return `${pizza.name} - $${pizza.price} - Available: ${getAvailabilityText(pizza.isAvailable)}`;
};

menu.forEach((pizza) => {
  console.log(formatPizza(pizza));
});

availablePizza.forEach((pizza) => {
  console.log(formatPizza(pizza));
});
