import React from 'react'
import Images from './Images'
import { connect } from 'react-redux'
import '../styling/UserPage.css'


const UserPage = (props) => {

    return (
        <div id="segment" className="ui form segment">
            <h2 id="username">{props.username}</h2>
            <hr />
            <Images showDeleteButton={true} images={props.images} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        images: state.images
    }
}

export default connect(mapStateToProps)(UserPage)