let items = [
    "apples","bananas","milk","bread",
];

let list = document.querySelector(".list");
let div = document.createElement("div");
div.setAttribute('class','item');

var i;
for (i = 0; i < items.length; i++) {
  div.innerHTML += items[i] + "<br>";
}; 

list.appendChild(div);