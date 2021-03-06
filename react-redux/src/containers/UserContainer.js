import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import '../styling/Login.css'

class UserContainer extends React.Component {

    state = {
        username: '',
        submitted: false
    }

    handleOnChange = (event) => {
        this.setState({ username: event.target.value})
    }


    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addUsername(this.state.username)
        this.usernameToRailsApi(this.state.username)
        this.setState({ submitted: true})
    }

    usernameToRailsApi = (username) => {
        fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(username)
    })
            .then(resp => resp.json())
            .then(data => this.props.storeId(data.id))
    }

    render() {
        return (
            <div>
            <form onSubmit={(e) => this.handleOnSubmit(e)} id="form" className="ui form segment">
                <h1 id="heading">PhotoOps</h1>
                <div className="field">
                    <label>Enter Username</label>
                    <input
                    type="text"
                    onChange={(event) => this.handleOnChange(event)}
                    />
                </div>
                <button className="ui primary submit button">Submit</button>
            </form>
            {this.state.submitted ? <Redirect to="/home" /> : null}
            </div>
        )
    }
}

const mapStateToProps = ({username }) => {
    return { username }
}

const mapDispatchToProps = dispatch => ({
    addUsername: un => dispatch({ type: "ADD_USERNAME", un}),
    storeId: id => dispatch({ type: "STORE_ID", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)