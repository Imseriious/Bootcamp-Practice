let userPay = parseInt(prompt("Hourly Pay"));
let userHours = parseInt(prompt("How many Hours per day?"));
let userDays = parseInt(prompt("How many days per month?"));

let bruto = (userPay * userHours) * userDays;
let tax = bruto * 0.25;
let neto = bruto - tax;

console.log(neto);