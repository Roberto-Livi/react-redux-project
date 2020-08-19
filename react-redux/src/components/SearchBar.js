import React from "react";

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    handleOnChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    render() {
        return <div>
                <form>
                    <input
                    type="text"
                    value={this.state.term}
                    onChange={(event) => this.handleOnChange(event)}
                    />
                    <button></button>
                </form>
                </div>;
    }
}

export default SearchBar
