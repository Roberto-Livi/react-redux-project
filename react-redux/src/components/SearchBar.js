import React from "react";
import Image from './Image'
import "../styling/SearchBar.css";

class SearchBar extends React.Component {

    state = { term: '' }

    handleOnChange = (event) => {
        this.setState({ term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearchSubmit(this.state.term)
        this.setState({ term: '' })
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
                <Image />
            </div>
        );
    }
}

export default SearchBar
