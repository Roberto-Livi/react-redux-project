import React from 'react'
import '../styling/Login.css'

class Login extends React.Component {
    render() {
        return (
            <div>

            <form id="form" className="ui form segment">
                <h1 id="heading">PhotoWorks</h1>
                <div className="field">
                    <label>Enter Username</label>
                    <input type="text" name="special-name" />
                </div>
                <div className="ui primary submit button">Submit</div>
                <div className="ui error message">
                </div>
            </form>
            </div>
        )
    }
}

export default Login