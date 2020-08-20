import React from "react";
import "../styling/SearchBar.css";

class SearchBar extends React.Component {

    state = { term: '' }

    handleOnChange = (event) => {
        console.log(this.state.term);
        this.setState({ term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div id="segment" className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input
                    type="text"
                    value={this.state.term}
                    onChange={(event) => this.handleOnChange(event)}
                    />
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar
