let Account1 = {Number:"000256784", Balance:790}
let Account2 = {Number:"000986056", Balance:5600}
let Account3 = {Number:"001546238", Balance:78065}
let Account4 = {Number:"030987456", Balance:120910}

let accNumber = prompt("What is your account Number.?");

if (accNumber == Account1.Number) {
    alert(Account1.Balance)
} else if (accNumber == Account2.Number) {
    alert(Account2.Balance)
} else if (accNumber == Account3.Number) {
    alert(Account3.Balance)
} else if (accNumber == Account4.Number) {
    alert(Account4.Balance)
}
else{
    alert("WTF")
}
