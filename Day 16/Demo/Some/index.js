document.addEventListener('DOMContentLoaded' , () => {
    const container = document.querySelector('.container');
    container.innerHTML = '<div class="box">Wazzap</box>';

    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = 'Wazzap';

    container.appendChild(box);
});

/////// Random
const nums = [5, 6, 7, 8, 9];
//One way
for(const nums of nums) {
    console.log(num);
}
///One way
const log = (x) => {
    console.log(x);
}
///One way
nums.forEach
    (num => console.log(num));