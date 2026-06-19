type PizzaSize = 'small' | 'medium' | 'large';

type Pizza = {
  name: string;
  price: number;
  size: PizzaSize;
  isAvailable: boolean;
};

type Order = {
  id: number;
  pizzaName: string;
  quantity: number;
};

const orders: Order[] = [
  {
    id: 1,
    pizzaName: 'Cheese Pizza',
    quantity: 2,
  },
  {
    id: 2,
    pizzaName: 'Pepperoni Pizza',
    quantity: 1,
  },
];

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
    isAvailable: false,
  },
  {
    name: 'Veggie Pizza',
    price: 13.99,
    size: 'medium',
    isAvailable: false,
  },
];

const expensivePizza = menu.find((pizza) => {
  return pizza.price > 14;
});

console.log(expensivePizza);