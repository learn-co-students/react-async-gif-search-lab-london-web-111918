import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API = 'http://api.giphy.com/v1/gifs/'
const GifSearchKey = 'search?q='
const APIKey = '&api_key=dc6zaTOxFJmzC&rating=g'

export default class GifListContainer extends Component {

  state = {
    searchTerm: '',
    giphysToRender: []
  }

  fetchGiphys = async (linkToGiphys) => {
    return await fetch(linkToGiphys)
    .then(response => response.json())
  }

  async componentDidMount() {
   this.fetchGifs()
  }

  async fetchGifs(){
    const linkToGiphys = API + GifSearchKey + this.state.searchTerm + APIKey
    const giphysToRender = await this.fetchGiphys(linkToGiphys)
    console.log(giphysToRender["data"])
    if (giphysToRender["data"].length > 1) {
      console.log(this.state)
      this.setState({
        giphysToRender: giphysToRender["data"].splice(0, 3)
      })
      console.log(this.state)
    }
  }

  handleFormSubmit = (event) => {
    event.persist()
    console.log(event)
    event.preventDefault()
    this.fetchGifs()
  }

  onChangeInput = (e) => {
    console.log(e.target.value)
    const searchTerm = e.target.value
    this.setState({
      searchTerm
    })
  }

  render(){
    return(
      <div>
        <GifSearch handleFormSubmit={this.handleFormSubmit} searchTerm={this.state.searchTerm} onChangeInput={this.onChangeInput}/>
        <GifList giphysToRender={this.state.giphysToRender}/>
      </div>
    )
  }
}
