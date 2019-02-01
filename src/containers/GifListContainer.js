import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends React.Component {
	state = {
		gifs: [],
		searchTerm: ""
	};

	handleSearchedTerm = event => {
		this.setState({
			searchTerm: event
		});
		this.getGifs();
	};

	getGifs = () => {
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${
				this.state.searchTerm
			}&api_key=dc6zaTOxFJmzC&rating=g`
		)
			.then(res => res.json())
			.then(data => this.setState({ gifs: data.data.slice(0, 3) }));
	};

	render() {
		return (
			<div>
				<GifSearch searchTerm={this.handleSearchedTerm} />
				<GifList gifs={this.state.gifs} />
			</div>
		);
	}
}
