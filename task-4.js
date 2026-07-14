// function buyTickets(quantity, ticketPrice) {
//     return `You bought ${quantity} tickets for ${quantity * ticketPrice}`
// }



// console.log(buyTickets(4, 20));
// // "You bought 4 tickets for 80 dollars!"

// console.log(buyTickets(2, 35));
// // "You bought 2 tickets for 70 dollars!"

// console.log(buyTickets(1, 100));
// // "You bought 1 tickets for 100 dollars!"

// function calculateOrder(product, price, delivery) {
//     return `Your ${product} will cost ${price + delivery}`
// }

// console.log(calculateOrder("Laptop", 800, 50));
// // "Your Laptop will cost 850 dollars."

// console.log(calculateOrder("Phone", 500, 20));
// // "Your Phone will cost 520 dollars."

function getElementHeight(content, padding, border) {
    return (Number.parseInt(content)) + (Number.parseInt(padding) * 2) + (Number.parseInt(border) * 2)
}

console.log(getElementHeight("100px", "10px", "5px"));
// 130

console.log(getElementHeight("50px", "2px", "1px"));
// 56

console.log(getElementHeight("200px", "0px", "0px"));
// 200