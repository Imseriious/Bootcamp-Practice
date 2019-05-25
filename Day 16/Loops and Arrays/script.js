const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];


/*

--Average of the numbers--
let calculate = () => {
    let total = 0;

    for (let i=0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
    
};   
console.log(calculate())


--The sum of the numbers in the array--
const sum = () => {
    let total = 0;
    for (i=0; i < numbers.length; i++) {
    total += numbers[i];
    }
return total;
}

console.log(sum());


--Only numbers divisile by 3--

let div3 = numbers.filter(function(a){
    return a%3===0;
});

console.log(div3);



--Aboslute numbers--
for (i=0; i < numbers.length; i++) {
    console.log(Math.abs(i));
}


--Negative numbers
let neg = numbers.filter(function(i){
    return i < 0;
})

console.log(neg); 

*/