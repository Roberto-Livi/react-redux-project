import React from 'react'
import { connect } from 'react-redux'
const Home = () => {
    return (
            <div className="ui segment" style={{width: "47%",
        backgroundColor: "lightblue",
        fontSize: "50px", left: "350px", top: "250px"}}>
        Welcome to PhotoOps
        </div>
    )
}


export default connect()(Home)