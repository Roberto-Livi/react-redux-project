const manageImages = (state = { temporaryImages: [], images: [], username: '', id: ''}, action) => {
    switch(action.type) {
        case 'ADD_IMAGE':
            console.log("ADD_IMAGE");
            return { ...state, images: [...state.images, action.imageToSave] };
        case 'ADD_USERNAME':
            console.log("ADD_USERNAME");
            return {...state, username: action.un}
        case 'SET_TEMPORARY_IMAGES':
            console.log("SET_TEMP");
            return {...state, temporaryImages: action.temporaryImages}
        case 'DELETE_IMAGE':
            console.log("DELETE");
            return {...state, images: state.images.filter(image => image !== action.imageToDelete)}
        case 'STORE_ID':
            console.log("STORE_ID");
            return { ...state, id: action.id };
        case 'ADD_IMAGES':
            console.log("ADD_IMAGES");
            return {...state, images: action.images}
        default:
            return state;
    }
}

export default manageImages