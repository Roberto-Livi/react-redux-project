// import React from 'react'
// import { storeImage, deleteImage } from '../actions/imageActions'
// import { connect } from 'react-redux'
// const Image = (props) => {

//     return (
//         <div>
//         <div style={{ position: "relative"}}>
//             <img style={{ maxWidth: "100%", padding: 4}} onClick={() => props.storeImage(props.url)} src={props.url} alt=''/>
//             { props.showDeleteButton
//             ? <button onClick={() => props.deleteImage(props.url)} style={{ position: "absolute", top: 10, left: 10 }}>X</button>
//             : null
//             }
//         </div>
//         </div>
//     )
// }

// export default connect(null, { storeImage, deleteImage })(Image)
