import React from 'react'
import '../css/search.css'

const Search = (props) => {
  return (
    <div className='search'>
        <input placeholder='Search...' onChange={e => props.setSearchTerms(e.target.value)}></input>
    </div>
  )
}

export default Search