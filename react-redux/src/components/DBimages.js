import React from 'react'
import { fetchDBImages } from '../actions/imageActions'
import { connect } from 'react-redux'
import DBimage from './DBimage'

class DBimages extends React.Component {

    renderImages = () => {
        return this.props.images.map((url, index) => <DBimage key={index} url={url.attributes.image} /> )
    }

    componentDidMount() {
        this.props.fetchDBImages(this.props.id)
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
