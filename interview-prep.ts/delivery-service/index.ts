type Delivery = {
  id: number;
  customerName: string;
  city: string;
  distanceMiles: number;
  status: 'pending' | 'in-transit' | 'delivered';
  fee: number;
  isPriority: boolean;
};

const deliveries: Delivery[] = [
  {
    id: 201,
    customerName: 'Elena Brooks',
    city: 'Nashville',
    distanceMiles: 42,
    status: 'delivered',
    fee: 65,
    isPriority: false,
  },
  {
    id: 202,
    customerName: 'Marcus Reed',
    city: 'Memphis',
    distanceMiles: 115,
    status: 'in-transit',
    fee: 140,
    isPriority: true,
  },
  {
    id: 203,
    customerName: 'Priya Patel',
    city: 'Clarksville',
    distanceMiles: 28,
    status: 'pending',
    fee: 45,
    isPriority: false,
  },
  {
    id: 204,
    customerName: 'Darius Coleman',
    city: 'Louisville',
    distanceMiles: 160,
    status: 'delivered',
    fee: 190,
    isPriority: true,
  },
  {
    id: 205,
    customerName: 'Hannah Kim',
    city: 'Nashville',
    distanceMiles: 55,
    status: 'in-transit',
    fee: 80,
    isPriority: false,
  },
  {
    id: 206,
    customerName: 'Owen Mitchell',
    city: 'Bowling Green',
    distanceMiles: 35,
    status: 'pending',
    fee: 50,
    isPriority: true,
  },
];

const deliverySummaries = deliveries.map((delivery) => {
  return {
    customerName: delivery.customerName,
    status: delivery.status,
    fee: delivery.fee,
  };
});

console.log(deliverySummaries);

// const expensivePriorityDeliveries = deliveries.filter((delivery) => {
//   return delivery.isPriority && delivery.fee > 100;
// });

// console.log(expensivePriorityDeliveries);

// const deliveryStatuses = deliveries.map((delivery) => {
//     return delivery.status;
// });

// console.log(deliveryStatuses);

// const nashvilleDeliveries = deliveries.filter((delivery) => {
//     return delivery.city === 'Nashville';
// });

// console.log(nashvilleDeliveries);

// const totalDeliveryFees = deliveries.reduce((total, delivery) => {
//     return  total + delivery.fee;
// }, 0);

// console.log(totalDeliveryFees);

// const allDeliveriesHaveFees = deliveries.every((delivery) => {
//     return delivery.fee > 0;
// });

// console.log(allDeliveriesHaveFees);

// const hasLongDistanceDelivery = deliveries.some((delivery) => {
//     return delivery.distanceMiles > 100;
// });

// console.log(hasLongDistanceDelivery);

// const deliveryCustomerNames = deliveries.map((delivery) => {
//     return delivery.customerName;
// });

// console.log(deliveryCustomerNames);

// const pendingDeliveries = deliveries.find((delivery) => {
//     return delivery.status === 'pending';
// });

// console.log(pendingDeliveries);

// const priorityDeliveries = deliveries.filter((delivery) => {
//     return delivery.isPriority;
// });

// console.log(priorityDeliveries);
