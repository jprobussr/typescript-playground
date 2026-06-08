type Product = {
  name: string;
  price: number;
  preOrder: boolean;
};

const product: Product = {
  name: "hoodie",
  price: 33,
  preOrder: true,
};

const prodcut1: Product = {
  name: "wireless mouse",
  price: 44,
  preOrder: true,
};

prodcut1.price += 100;
console.log(prodcut1.name);
console.log(prodcut1.price);

if (product.preOrder) {
  console.log("We will notify you when this product ships.");
}

if (prodcut1.preOrder) {
  prodcut1.price += 100;
  console.log('You got a reward', prodcut1.price);
}
