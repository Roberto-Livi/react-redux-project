import React from 'react'
import '../styling/Login.css'

class Login extends React.Component {

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log("hello");
        fetch("http://localhost:3000/users")

        return window.location.pathname = "/home"
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
                    />
                </div>
                <button className="ui primary submit button">Submit</button>
            </form>
            </div>
        )
    }
}

export default Login