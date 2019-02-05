import React from 'react'

const GifSearch = (props) => {
  return(
    <div>
      <form onSubmit={(event) => props.handleFormSubmit(event)}>
        <label>
          Search:
          <input type='text' name='search' value={props.searchTerm} onChange={props.onChangeInput}/>
        </label>
        <input type='submit' value="submit" />
      </form>
    </div>
  )
}

export default GifSearch
