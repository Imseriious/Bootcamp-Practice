document.addEventListener('DOMContentLoaded' , () => { //when the document is loaded:
    const question = new Question( //We put in the variable question the new class
        'My first question',  //the first parameter is the 'title' we asigned in the class
        'A nice sexy body' //The second parameter is the body
        );

    const app = document.querySelector('#app'); //we select our div with id app.
    question.mount(app); //we use the our selected div with id app and use it as first parameter in our question mount method.
});