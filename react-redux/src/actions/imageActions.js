export const fetchImages = (term) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_IMAGE' })
        fetch(
        `https://api.unsplash.com/search/photos/?client_id=41qvNIGonP9AzHX_83MwRdtSa1zZHbslarJkHcMmFGw&query=${term}`)
        .then((resp) => resp.json())
        .then((data) => dispatch({ type: "SET_TEMPORARY_IMAGES", temporaryImages: data.results.map(image => image.urls.regular)}))
    }
}

export const fetchDBImages = (id) => {
    return(dispatch) => {
    fetch(`http://localhost:3000/users/${id}`)
        .then((resp) => resp.json())
        .then((data) => dispatch({ type: "ADD_IMAGES", images: data.included.map(url => url.attributes.image) }))
    }
}

export const storeImage = (imageToSave) => {
    return (dispatch) => {
        dispatch({ type: "ADD_IMAGE", imageToSave})
    }
}

export const deleteImage = (imageToDelete) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_IMAGE", imageToDelete})
    }
}

export const storeId = (id) => {
    return (dispatch) => {
        dispatch({ type: "STORE_ID", id})
    }
}
