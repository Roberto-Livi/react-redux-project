import React from 'react'
import DB from './DB'

const DBimages = (props) => {

    const renderImages = props.images.map((image, index) => <DB key={index} url={image.attributes.image} /> )

    return (
        <div>
            {renderImages}
        </div>
    )
}

export default DBimages
