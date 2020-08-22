import React from 'react'
import DBimages from './DBimages'
import { connect } from 'react-redux'

class FetchImages extends React.Component {

    state = {
        images: []
    }

    fetchImages = () => {
            fetch(`http://localhost:3000/users/${this.props.id}`)
                .then((resp) => resp.json())
                .then((data) => this.setState({ images: data.included }))
    }

    componentDidMount(){
        this.fetchImages()
    }

    render() {

        return (
            <div>
                <DBimages images={this.state.images} />
            </div>
        )
    }
}

const mapStateToProps = ({ id }) => {
    return { id }
}

export default connect(mapStateToProps)(FetchImages)