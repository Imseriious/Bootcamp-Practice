import React, { Component } from 'react'
import './App.scss'

import Search from '../Search/Search.jsx'

class App extends Component {
    state = {
        searchInput: '',
        randomArticle: undefined,
        searchResults: [],
    }

    handleTyping = (e) => {
        this.setState({
            searchInput: e.target.value,
        })
    }

    handleSearchClick = () => {
        console.log('Searching')
    }

    componentDidMount() {
        // Load random article here.
    }

    render() {
        return (
            <div className='app-container'>
                <h1>Wikipedia Search</h1>
                <Search
                    handleTyping={this.handleTyping}
                    inputValue={this.state.searchInput}
                    handleSearchClick={this.handleSearchClick}
                />
            </div>
        )
    }
}

export default App;
