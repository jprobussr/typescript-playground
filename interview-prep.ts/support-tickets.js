const supportTickets = [
    {
        id: 101,
        customerName: 'Maya Thompson',
        issue: 'Cannot reset password',
        priority: 'high',
        isResolved: false,
    },
    {
        id: 102,
        customerName: 'Ethan Brooks',
        issue: 'Billing address is incorrect',
        priority: 'medium',
        isResolved: true,
    },
    {
        id: 103,
        customerName: 'Sofia Ramirez',
        issue: 'Order has not arrived',
        priority: 'high',
        isResolved: false,
    },
    {
        id: 104,
        customerName: 'Liam Carter',
        issue: 'Needs a copy of receipt',
        priority: 'low',
        isResolved: true,
    },
];
const removeTicket = (id) => {
    return supportTickets.every((ticket) => {
        return ticket.id !== id;
    });
};
console.log(removeTicket(101));
console.log(removeTicket(102));
// const removeTicket = (id: number) => {
//     return supportTickets.filter((ticket) => {
//         return ticket.id !== id;
//     });
// };
// console.log(removeTicket(102));
// const remainingTickets = supportTickets.filter((ticket) => {
//    return ticket.id !== 102;
// });
// console.log(remainingTickets);
// const updatedTickets = supportTickets.map((ticket) => {
//   if (ticket.id === 103) {
//     return {
//         ...ticket,
//         isResolved: true,
//         issue: 'shipped another order'
//     };
//   };
//   return ticket;
// });
// console.log(updatedTickets);
// const unresolvedTicketCount = supportTickets.filter((ticket) => {
//     return ticket.isResolved === false;
// }).length;
// console.log(unresolvedTicketCount);
// const hasUrgentTicket = supportTickets.some((ticket) => {
//     return ticket.priority === 'high' && !ticket.isResolved;
// });
// console.log(hasUrgentTicket);
// const selectedTicket = supportTickets.find((ticket) => {
//     return ticket.id === 103;
// });
// console.log(selectedTicket);
// const unresolvedTickets = supportTickets.filter((ticket) => {
//     return ticket.isResolved === false;
// });
// console.log(unresolvedTickets);
// const ticketSummaries = supportTickets.map((ticket) => {
//   return {
//     id: ticket.id,
//     customerName: ticket.customerName,
//     priority: ticket.priority,
//   };
// });
// console.log(ticketSummaries);
