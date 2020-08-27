import React from 'react'
import { connect } from 'react-redux'
const Home = () => {
    return (
            <div className="ui segment" style={{width: "40%",
        backgroundColor: "lightblue",
        fontSize: "50px", left: "450px", top: "250px"}}>
        Welcome to PhotoOps
        </div>
    )
}


export default connect()(Home)