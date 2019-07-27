import React from 'react';
import ReactDOM from 'react-dom';
import Message from './message/message.jsx';
import './index.html';


class Hello extends React.Component {
    render(){
        return ( //Empty tags its divs it means the content is wrapped there.
            <> 
            <h1>Hello world</h1>
            <Message title="My title" body="hello body"/>
            <Message title="My title 2" body="hello body 2"/>
            <Message title="My title 3" body="hello body 3"/>
            </>
        );
    }
}

ReactDOM.render(<Hello />, document.querySelector('#app'));