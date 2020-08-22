import React from 'react'
import DBimage from './DBimage'

const DBimages = (props) => {

    const renderImages = props.images.map((image, index) => <DBimage key={index} url={image.attributes.image} /> )

    return (
        <div>
            {renderImages}
        </div>
    )
}

export default DBimages
