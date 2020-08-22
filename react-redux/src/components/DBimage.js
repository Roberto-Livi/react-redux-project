import React from 'react'
import { deleteImage } from "../actions/imageActions";
import { connect } from "react-redux";

const DBimage = (props) => {

    const deleteUrlFromUser = (url) => {
        fetch(`http://localhost:3000/users/${props.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(url)
        })
        props.deleteImage(url)
    }

    return (

        <div>
        <div style={{ width: "30%", left: 800, marginTop: 200, backgroundColor: "lightskyblue"}}id="segment" className="ui form segment">
            <h1 style={{textAlign: "center", backgroundColor: "lightskyblue" }}>Database Images</h1>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", marginTop: 40}}>
        <div>
        <div style={{ position: "relative"}}>
                <img style={{ marginLeft: 50, maxWidth: "180%", padding: 4 }} src={props.url} alt="" />
                <button onClick={() => deleteUrlFromUser(props.url)} style={{ position: "absolute", top: 10, left: 10, marginLeft: 47 }}>X</button>
            </div>
        </div>
        </div>
        </div>
    )
}

const mapStateToProps = ({ id }) => {
    return { id };
};

export default connect(mapStateToProps, { deleteImage })(DBimage)
