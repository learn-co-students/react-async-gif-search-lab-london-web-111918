import React, { Component } from 'react'

const GiftList = props => {
  const { gifs } = props
  return (
    <div>
      <ul className="list-group">
        {gifs.map(gif => <li className="list-group-item" key={gif.id}><img src={gif.images.original.url} /></li>)}
      </ul>
    </div>
  )
}

export default GiftList