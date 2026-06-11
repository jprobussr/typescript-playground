type Product = {
  name: string;
  price: number;
  inStock: boolean;
  category: string;
  rating: number;
};

const product: Product = {
  name: 'Wireless Mouse',
  price: 29.99,
  inStock: true,
  category: 'Electronics',
  rating: 4.6,
};

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

const getStockStatus = (inStock: boolean): string => {
  if (inStock) {
    return 'It is currently in stock.';
  } else {
    return 'It is currently out of stock.';
  }
};

const generateProductSummary = (product: Product): string => {
  return `${product.name} is a ${
    product.category
  } product priced at ${formatPrice(product.price)}. It has a rating of ${
    product.rating
  } stars. ${getStockStatus(product.inStock)}`;
};

console.log(generateProductSummary(product));