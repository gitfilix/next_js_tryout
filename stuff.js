console.log('hi reduce example');


var orders = [
    { amount: 340 },
    { amount: 440 },
    { amount: 440 },
    { amount: 640 },
    { amount: 540 },
    { amount: 40 }
]

var totalAmount = orders.reduce( (sum, order)=> {
    console.log('hello', sum, order);
    return sum + order.amount;
}, 0)

// var totalAmount = 0
// for (var i = 0; i < orders.length; i++) {
//     totalAmount += orders[i].amount
// }

console.log("totalAmount", totalAmount);
