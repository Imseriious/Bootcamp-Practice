//Random 1-6 Nr
let random = () => {
    let result = Math.floor(Math.random()*6) +1;

    let diceElm = document.querySelector('#dice');

    if (result == 1){
        diceElm.style.backgroundImage = 'url(img/side1.png)';
    } else if (result == 2){
        diceElm.style.backgroundImage = 'url(img/side2.png)';
    } else if (result == 3){
        diceElm.style.backgroundImage = 'url(img/side3.png)';
    } else if (result == 4){
        diceElm.style.backgroundImage = 'url(img/side4.png)';
    } else if (result == 5){
        diceElm.style.backgroundImage = 'url(img/side5.png)';
    } else if (result == 6){
        diceElm.style.backgroundImage = 'url(img/side6.png)';
    }

}




