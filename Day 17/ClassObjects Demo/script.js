class Person { //------------------------We create a class to use as a blueprint---------
    constructor(firstName, lastName, age) { //--We need a constructor build it and specify the inputs-------
        this.firstName = firstName; // 'This' means 'from this function'  and set it to "Firs Name"
        this lastName = lastName; // Same thing with second.
        this.age = age;
    }

    email() { //We create in the class a function.
        return `${this.firstName.toLowerCase()}@springfield.com`; //Returns in `` so we can use the $ to attach the first name to the email.
    }
}

const homer = new Person('Gigi', 'Lala', 28); //We just create then a variable with word "new" and the class name and proprieties to create the class. 
const marge = new Person('haha', 'secondname', 39); 