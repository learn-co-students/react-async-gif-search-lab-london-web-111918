import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.props.onGifSearch} className='form-inline'>
        <input onChange={this.handleChange} type='text' className="form-control mb-2 mr-sm-2" placeholder="Search Gifs" value={this.state.searchTerm} />
        <button type='submit' className="btn btn-primary mb-2">Find Gifs</button>
      </form>
    )
  }
}

export default GifSearch