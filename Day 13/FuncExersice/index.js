const square = (number) => { //Coge un numerico wapo y te lo multiplica por el mismo.
    return number * number;
}

const hypotenuse = (a,b) => {
    return Math.sqrt (square(a) + square(b));
}


const salary = (a, b, c) => {
    return a * b * c;
}

const taxed_salary = (salary, tax) => {
    return salary * (1 - tax);
}


