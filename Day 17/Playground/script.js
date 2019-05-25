class Product { 
    constructor(name, price, quantity) { 
        this.name = name; 
        this.price = price;
        this.quantity = quantity;
    }    
}
let buyBtn = document.querySelector('.buy');
let quantityElm = document.querySelector('.quantity')
buyBtn.addEventListener('click', () => {
    let bought = parseInt(this.quantity - 1);
    return quantityElm.innerHTML = parseInt(bought);
});



const Laptop = new Product('Laptop', 999, 20);
const Keyboard = new Product('Keyboard', 80, 30);
const Mouse = new Product('Mouse', 49, 10);
const Smartphone = new Product('Smartphone s9', 599, 5);
const Charger = new Product('Charger', 5, 50);
const Techbook = new Product('TechBook', 29, 100);
const Backpack = new Product('Backpack', 120, 7);
