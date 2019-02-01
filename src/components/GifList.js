import React from "react";

export default class GifList extends React.Component {
	render() {
		return (
			<div>
				{this.props.gifs.map(gif => (
					<img
						key={`${gif.id}`}
						src={`${gif.images.original.url}`}
						alt={`${gif.id}`}
					/>
				))}
			</div>
		);
	}
}
