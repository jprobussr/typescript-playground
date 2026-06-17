type Product = {
  name: string;
  price: number;
  inStock: boolean;
  category: string;
  rating: number;
};

const products: Product[] = [
  {
    name: "Wireless Mouse",
    price: 29.99,
    inStock: true,
    category: "Electronics",
    rating: 4.6,
  },
  {
    name: "Gaming Keyboard",
    price: 79.99,
    inStock: false,
    category: "Electronics",
    rating: 4.8,
  },
  {
    name: "USB-C Hub",
    price: 49.99,
    inStock: true,
    category: "Accessories",
    rating: 4.3,
  },
];

const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

const getStockStatus = (inStock: boolean): string => {
  if (inStock) {
    return "It currently is in stock.";
  } else {
    return "The item is out of stock at the moment.";
  }
};

const generateProductSummary = (product: Product): string => {
  return `${product.name} is a ${product.category} product priced at ${formatPrice(
    product.price,
  )}. ${getStockStatus(product.inStock)}`;
};

// console.log(generateProductSummary(products[0]));

const productSummaries: string[] = products.map((product: Product): string => {
  return generateProductSummary(product);
});

productSummaries.forEach((summary: string) => {
  console.log(summary);
});


const inStockProducts: Product[] = products.filter((product: Product): boolean => {
  return product.inStock;
});

console.log(inStockProducts);