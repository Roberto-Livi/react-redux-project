import React from 'react'
import Image from './Image'

const Images = (props) => (

    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", marginTop: 40}}>
        {props.images.map((image, index) => <Image showDeleteButton={props.showDeleteButton} key={index} url={image}/>)}
    </div>
    )


export default Images