import React from 'react'

const GifList = (props) => {
  return(
      <div>
        <ul>
        {props.giphysToRender.length > 0 ? props.giphysToRender.map(gif => <li><img src={gif.images.original.url} alt={gif.id} /></li>) : null }
        </ul>
      </div>
  )
}

export default GifList
