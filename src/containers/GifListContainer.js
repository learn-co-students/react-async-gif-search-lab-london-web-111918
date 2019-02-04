import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

export default class GifListContainer extends React.Component {
	state = {
		gifs: [],
		searchTerm: ""
	};

	handleSearchedTerm = event => {
		this.getGifs(event);
	};

	getGifs = event => {
		fetch(
			`http://api.giphy.com/v1/gifs/search?q=${event}&api_key=dc6zaTOxFJmzC&rating=g`
		)
			.then(res => res.json())
			.then(data =>
				this.setState({
					searchTerm: event,
					gifs: data.data.slice(0, 3)
				})
			);
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
