import React from 'react'

const Search = (props) => {
    return (
        <div className='search-container'>
            <input type='text' onChange={props.handleTyping} value={props.inputValue}/>
            <button>Search</button>
        </div>
    )
}

export default Search
