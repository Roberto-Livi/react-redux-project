import React from 'react'
import { deleteImage } from "../actions/imageActions";
import { connect } from "react-redux";

class DBimage extends React.Component {

    state = {
        liked: 'Like'
    }

    deleteUrlFromUser = (url) => {
        this.props.deleteImage(url);
        fetch(`http://localhost:3000/users/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(url)
        })
    }

    likedPic = () => {
        if(this.state.liked === "Like") {
            this.setState({ liked: "Liked"})
        } else if(this.state.liked === "Liked"){
            this.setState({ liked: "Like"})
        }
    }

    render() {
    return (

        <div>
        <div style={{ width: "30%", left: 800, marginTop: 200, backgroundColor: "lightskyblue"}}id="segment" className="ui form segment">
            <h1 style={{textAlign: "center", backgroundColor: "lightskyblue" }}>Database Images</h1>
        </div>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", marginTop: 40}}>
        <div>
        <div style={{ position: "relative"}}>
                <img style={{ marginLeft: 50, maxWidth: "180%", padding: 4 }} src={this.props.url} alt="" />
                <button onClick={() => this.deleteUrlFromUser(this.props.url)} style={{ position: "absolute", top: 10, left: 10, marginLeft: 47 }}>X</button>
                <button style={{
                    position: "absolute",
                    left: 20,
                    marginLeft: 50,
                    backgroundColor: this.state.liked === "Like" ? "white" : "red"
                }} onClick={() => this.likedPic()}>{this.state.liked}</button>
            </div>
        </div>
        </div>
        </div>
    )
}
}

const mapStateToProps = ({ id }) => {
    return { id };
};

export default connect(mapStateToProps, { deleteImage })(DBimage)
