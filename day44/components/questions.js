//First thing to create a component create a class
class Question{

    constructor(title,body) { //The constructor with parameters.
        this.title = title;   //We asign the parameters to this class
        this.body = body;
        this.votes = 0;
    }

    render() {
        const element = document.createElement('div'); //We asign to 'element' a create div
        element.className = 'questions'; //we give element the class name questions
        element.innerHTML = `                   
        <div class="votes">
            <button>+</button>
        ${this.votes}</div>
        <div class="content"> 
            <div class="title">${this.title}</div> 
            <div class="body">${this.body}</div>
        </div>
        `;      //inside the element we create a div with class title for the title with the one from the parameters
                //and a div with class body for the body with the body of the parameters

        return element; //we return that new created element.
    }

    mount(parent) { 
        this.element = this.render(); //we take the element from the render
        parent.appendChild(this.element); //we append our element to the parent.
    }

}