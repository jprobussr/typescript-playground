type Product = {
  name: string;
  price: number;
  inStock: boolean;
  preOrder: boolean;
};

const product: Product = {
  name: 'wireless mouse',
  price: 44,
  inStock: true,
  preOrder: true,
};

const getProductPrice = (product: Product): number => {
  product.price += 10;
  return product.price;
}

const selectedPrice = getProductPrice(product)
console.log(selectedPrice)