"use strict";
const orders = [
    {
        item: "Burger",
        category: "food",
        price: 12.99,
        quantity: 2,
        isPaid: true,
    },
    {
        item: "Fries",
        category: "side",
        price: 4.99,
        quantity: 1,
        isPaid: true,
    },
    {
        item: "Lemonade",
        category: "drink",
        price: 3.5,
        quantity: 3,
        isPaid: false,
    },
    {
        item: "Chicken Salad",
        category: "food",
        price: 10.99,
        quantity: 1,
        isPaid: true,
    },
];
const totalUnpaidRevenue = orders.reduce((total, order) => {
    if (order.isPaid === false) {
        return total + order.price * order.quantity;
    }
    return total;
}, 0);
console.log(totalUnpaidRevenue);
