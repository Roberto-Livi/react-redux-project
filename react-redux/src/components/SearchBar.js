import React from 'react'
import { connect } from "react-redux";
import { fetchImages } from "../actions/imageActions";
import "../styling/SearchBar.css";

class SearchBar extends React.Component {

    state = { term: '' }

    handleOnChange = (event) => {
        this.setState({ term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.fetchImages(this.state.term)
        this.setState({ term: '' })
    }
    render() {
        return (
            <div>
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
        )
    }
}

export default connect(null, { fetchImages })(SearchBar);