//Firstway
const show = () => {
    const textElm = document.querySelector('.text');
    textElm.className ='text';
}
const hide = () => {
    const textElm = document.querySelector('.text');
    textElm.className ='texthidden';
}


document.addEventListener('DOMContentLoaded', () =>{
    const padlockElm = document.querySelector('#padlock');
    padlockElm.addEventListener('mouseenter',show);
    padlockElm.addEventListener('mouseleave',hide);


});

//////////Anotherway
const reveal = (show) => { //We create a function for later... //show can be true or false
    const message = document.querySelector('.text'); //We define with queryselector what is message
        if  (show) { //if show its true :
            message.className = 'text'; //we set message element with is the one with class .text now and put it to the class with name text.
        } else { //if its flase :
            message.className = 'texthidden'; //we change it to the class .texthidden
        }
}

document.addEventListener('DOMContentLoaded', () =>{ //when the document is loaded we do the function:
    const padlockElm = document.querySelector('#padlock'); //we define what padlock element is.
    padlockElm.addEventListener('mouseenter', () => { //we put an eventlistener to the padlockelm so when mouse eenters it executes a function.
        reveal(true); //this is the function, if the reveal its truee (show) and changes the class to text in the function reveal.
    });
    padlockElm.addEventListener('mouseleave', () => { //another event listener to padlock so when mouse leaves has te function to:
        reveal(false); //look in the function reveal but false (false show) so change the class in that function to hidden.
    });

///Random
const foo = bar => bar(10);
console.log(foo(x => x **2)); //This will console log 100.

//Delay
const foo = () => console.log('hello');
setTimeout(foo, 5000); //setTimeout has 1 value the function, secon value how many millisecondds before its executed.
    
//Interval
setInterval(
    () => console.log('hello'),
    1000
); //First value (Console log) second value (Every 1000ms).