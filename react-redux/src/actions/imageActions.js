// export const fetchImages = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_IMAGE' })
//         fetch('').then(response => {
//             return response.json()
//         }).then(responseJSON => {
//             dispatch({ type: 'ADD_IMAGE', images: responseJSON.images })
//         })
//     }
// }