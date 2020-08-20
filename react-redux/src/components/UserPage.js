import React from 'react'
import { connect } from 'react-redux'
import '../styling/UserPage.css'


const UserPage = (props) => {
    return (
        <div id="segment" className="ui form segment">
            <h2 id="username">{props.username}</h2>
            <hr />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(UserPage)