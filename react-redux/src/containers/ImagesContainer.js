import React from 'react'
import SearchBar from '../components/SearchBar'
import Images from '../components/Images'
import { connect } from 'react-redux'

class ImagesContainer extends React.Component {
    render() {
        return (
            <div>
                <SearchBar addImage={this.props.addImage} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { images: state.images}
}

const mapDispatchToProps = dispatch => ({
    addImage: img => dispatch({ type: "ADD_IMAGE", img})
})

export default connect(mapStateToProps, mapDispatchToProps)(ImagesContainer)