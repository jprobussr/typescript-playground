type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  {
    name: "Wireless Mouse",
    price: 29.99,
    inStock: true,
  },
  {
    name: "Gaming Keyboard",
    price: 79.99,
    inStock: false,
  },
  {
    name: "USB-C Hub",
    price: 49.99,
    inStock: true,
  },
];

products.forEach((product) => {
  if (product.inStock) {
    console.log(product.name)
  }
})
