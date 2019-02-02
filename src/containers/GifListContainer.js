import React, { Component } from 'react'
import GifSearch from '../components/GifSearch';
import GiftList from '../components/GifList';

class GiftListContainer extends Component {

  state = {
    gifs: []
  }

  handleGifSearch = (e) => {
    e.preventDefault()
    fetch(`http://api.giphy.com/v1/gifs/search?q=${e.target[0].value}&api_key=dc6zaTOxFJmzC&limit=3`)
      .then(resp => resp.json())
      .then(data => this.setState({ gifs: data.data }))
  }

  render() {
    return (
      <div>
        <GifSearch onGifSearch={this.handleGifSearch} />
        <GiftList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GiftListContainer