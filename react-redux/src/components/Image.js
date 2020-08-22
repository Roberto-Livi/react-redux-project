import React from 'react'
import { storeImage } from '../actions/imageActions'
import { connect } from 'react-redux'


const Image = (props) => {

    const addUrlToUser = (url) => {
        fetch(`http://localhost:3000/users/${props.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(url)
        })
    }

    const verifyDuplicate = (url) => {
        if (props.images.includes(url) === false) {
            addUrlToUser(url);
        }
        return props.images.includes(url) ? null : props.storeImage(url);
    };

    return (
        <div>
        <div style={{ position: "relative"}}>
            <img style={{ maxWidth: "100%", padding: 4}} onClick={() => verifyDuplicate(props.url)} src={props.url} alt=''/>
        </div>
        </div>
    )
}

const mapStateToProps = ({ images, id }) => {
    return { images, id }
}

export default connect(mapStateToProps, { storeImage })(Image)




// import React from 'react'
// import { storeImage, deleteImage } from '../actions/imageActions'
// import { connect } from 'react-redux'


// const Image = (props) => {

//     const addUrlToUser = (url) => {
//         fetch(`http://localhost:3000/users/${props.id}`, {
//             method: 'PATCH',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(url)
//         })
//     }

//     const deleteUrlFromUser = (url) => {
//         fetch(`http://localhost:3000/users/${props.id}`, {
//             method: 'DELETE',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(url)
//         })
//         props.deleteImage(url)
//     }

//     const verifyDuplicate = (url) => {
//         if (props.images.includes(url) === false) {
//             addUrlToUser(url);
//         }
//         return props.images.includes(url) ? null : props.storeImage(url);
//     };

//     return (
//         <div>
//         <div style={{ position: "relative"}}>
//             <img style={{ maxWidth: "100%", padding: 4}} onClick={() => verifyDuplicate(props.url)} src={props.url} alt=''/>
//             { props.showDeleteButton
//             ? <button onClick={() => deleteUrlFromUser(props.url)} style={{ position: "absolute", top: 10, left: 10 }}>X</button>
//             : null
//             }
//         </div>
//         </div>
//     )
// }

// const mapStateToProps = ({ images, id }) => {
//     return { images, id }
// }

// export default connect(mapStateToProps, { storeImage, deleteImage })(Image)

