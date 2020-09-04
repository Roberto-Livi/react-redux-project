import React from 'react'
import { fetchDBImages } from '../actions/imageActions'
import { connect } from 'react-redux'
import DBimage from './DBimage'

class DBimages extends React.Component {

    constructor(props) {
        super(props)
        this.props.fetchDBImages(this.props.id)
    }

    renderImages = () => {
        console.log(this.props.images);
        return this.props.images.map((url, index) => <DBimage key={index} url={url} /> )
    }

    render() {
    return (
        <div>
            {this.renderImages()}
        </div>
    )
    }
}

const mapStateToProps = ({ images, id }) => {
    return { images, id }
}

export default connect(mapStateToProps, { fetchDBImages })(DBimages)
