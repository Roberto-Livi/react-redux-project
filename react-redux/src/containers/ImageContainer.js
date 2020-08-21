import React from "react";
import SearchBar from '../components/SearchBar'
import Images from '../components/Images'
import { connect } from 'react-redux'

const ImageContainer = (props) => {
        return (
            <div id="segment" className="ui segment">
                <SearchBar />
                <Images images={props.temporaryImages} />
            </div>
        );
}

const mapStateToProps = state => ({
    temporaryImages: state.temporaryImages
})

export default connect(mapStateToProps)(ImageContainer)
