import React from "react";

export default class GifSearch extends React.Component {
	state = {
		input: ""
	};

	handleChange = event => {
		this.setState({
			input: event.target.value
		});
	};

	render() {
		return (
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<input
						type="text"
						className="form-control"
						placeholder="Search name ..."
						onChange={this.handleChange}
					/>
					<input
						type="button"
						value="Find Gifs"
						onClick={() => this.props.searchTerm(this.state.input)}
					/>
				</div>
			</div>
		);
	}
}
