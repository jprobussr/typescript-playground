type Product = {
  name: string;
  price: number;
  inStock: boolean;
  category: string;
  rating: number;
};

const products: Product[] = [
  {
    name: 'Wireless Mouse',
    price: 29.99,
    inStock: true,
    category: 'Electronics',
    rating: 4.6,
  },
  {
    name: 'Gaming Keyboard',
    price: 79.99,
    inStock: false,
    category: 'Electronics',
    rating: 4.8,
  },
  {
    name: 'USB-C Hub',
    price: 49.99,
    inStock: true,
    category: 'Accessories',
    rating: 4.3,
  },
];

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

const getStockStatus = (inStock: boolean): string => {
  if (inStock) {
    return 'The product you seek is in stock.';
  } else {
    return 'The product you seek is not in stock';
  }
};

// const firstProductSummary: string = `${products[0].name} is a ${products[0].category} product priced at ${formatPrice(products[0].price)}. ${getStockStatus(products[0].inStock)}`;

// console.log(firstProductSummary);

const generateProductSummary = (product: Product): string => {
  return `${product.name} is ${product.category} product priced at ${formatPrice(product.price)}. ${getStockStatus(product.inStock)}`;
};

// products.forEach((product) => {
//   console.log(generateProductSummary(product));
// });

const productSummaries: string[] = products.map((product: Product): string => {
  return generateProductSummary(product);
});

console.log('=== All Products ===');

productSummaries.forEach((summary: string) => {
  console.log(summary);
});

const inStockProducts: Product[] = products.filter(
  (product: Product): boolean => {
    return product.inStock === true;
  },
);

// console.log(inStockProducts);

const inStockSummaries: string[] = inStockProducts.map(
  (product: Product): string => {
    return generateProductSummary(product);
  },
);

console.log('');
console.log('=== In-Stock Products ===');

inStockSummaries.forEach((summary: string) => {
  console.log(summary);
});
