const orders = [
    {
        id: 301,
        customer: 'Ava Martinez',
        total: 85,
        status: 'processing',
        isExpress: false,
    },
    {
        id: 302,
        customer: 'Liam Carter',
        total: 145,
        status: 'shipped',
        isExpress: true,
    },
    {
        id: 303,
        customer: 'Noah Williams',
        total: 220,
        status: 'delivered',
        isExpress: true,
    },
    {
        id: 304,
        customer: 'Emma Davis',
        total: 65,
        status: 'processing',
        isExpress: false,
    },
    {
        id: 305,
        customer: 'Mason Clark',
        total: 175,
        status: 'shipped',
        isExpress: false,
    },
    {
        id: 306,
        customer: 'Sophia Turner',
        total: 110,
        status: 'delivered',
        isExpress: true,
    },
];
const shippedRevenue = orders.reduce((total, order) => {
    if (order.status === 'shipped') {
        return total + order.total;
    }
    return total;
}, 0);
console.log(shippedRevenue);
// const expressOrders = orders.filter((order) => {
//   return order.isExpress;
// });
// const highestExpressOrder = expressOrders.reduce((highest, order) => {
//   return order.total > highest.total ? order : highest;
// }, expressOrders[0]);
// console.log(highestExpressOrder);
// const allExpressOrderOver100 = orders.every((order) => {
//   return order.isExpress && order.total > 100;
// });
// console.log(allExpressOrderOver100);
// const nonExpressCustomerNames = orders.filter((order) => {
//   return !order.isExpress;
// }).map((order) => {
//   return order.customer;
// });
// console.log(nonExpressCustomerNames);
// const firstLargeNonExpressOrder = orders.filter((order) => {
//   return !order.isExpress && order.total > 100;
// });
// console.log(firstLargeNonExpressOrder);
// const processingOrderCount = orders.reduce((count, order) => {
//   if (order.status === 'processing') {
//     count += 1;
//   }
//   return count;
// }, 0);
// console.log(processingOrderCount);
// const deliveredOrderRevenue = orders.reduce((total, order) => {
//   if (order.status === 'delivered') {
//     return total += order.total;
//   }
//   return total;
// }, 0);
// console.log(deliveredOrderRevenue);
// const deliveredExpressCustomers = orders.filter((order) => {
//   return order.status === 'delivered' && order.isExpress;
// }).map((order) => {
//   return order.customer;
// });
// console.log(deliveredExpressCustomers);
// const orderTypeCounts = orders.reduce((counts, order) => {
//   if (order.isExpress) {
//     counts.express += 1;
//   } else {
//     counts.standard += 1;
//   }
//   return counts;
// }, {express: 0, standard: 0});
// console.log(orderTypeCounts);
// const hasExpensiveExpressOrders = orders.some((order) => {
//   return order.isExpress && order.total > 200;
// });
// console.log(hasExpensiveExpressOrders);
// const orderStatusCounts = orders.reduce(
//   (count, order) => {
//     if (order.status === 'processing') {
//       count.processing += 1;
//     } else if (order.status === 'shipped') {
//       count.shipped += 1;
//     } else {
//       count.delivered += 1;
//     }
//     return count;
//   },
//   { processing: 0, shipped: 0, delivered: 0 },
// );
// console.log(orderStatusCounts);
// const lowestValueOrder = orders.reduce((lowest, order) => {
//     return order.total <  lowest.total ? order : lowest;
// }, orders[0]);
// console.log(lowestValueOrder);
// const highestValueOrder = orders.reduce((highest, order) => {
//     return order.total > highest.total ? order : highest;
// }, orders[0]);
// console.log(highestValueOrder);
// const expressOrderCount = orders.reduce((count, order) => {
//     if (order.isExpress) {
//       return count + 1;
//     }
//     return count;
// }, 0);
// console.log(expressOrderCount);
// const totalOrderRevenue = orders.reduce((total, order) => {
//     return total + order.total;
// }, 0);
// console.log(totalOrderRevenue);
// const allOrdersHavePositiveTotals = orders.every((order) => {
//     return order.total > 0;
// });
// console.log(allOrdersHavePositiveTotals);
// const hasLargeProcessingOrder = orders.filter((order) => {
//     return order.status === 'processing' && order.total > 75;
// });
// console.log(hasLargeProcessingOrder);
// const expressCustomerNames = orders.filter((order) => {
//     return order.isExpress;
// }).map((order) => {
//     return order.customer;
// });
// console.log(expressCustomerNames);
// const shippedOrders = orders.find((order) => {
//     return order.status === 'shipped';
// });
// console.log(shippedOrders);
// const expensiveOrders = orders.filter((order) => {
//     return order.total > 150;
// });
// console.log(expensiveOrders);
