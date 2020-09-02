const manageImages = (state = { temporaryImages: [], images: [], username: '', id: ''}, action) => {
    switch(action.type) {
        case 'ADD_IMAGE':
            return { ...state, images: [...state.images, action.imageToSave] };
        case 'ADD_USERNAME':
            return {...state, username: action.un}
        case 'SET_TEMPORARY_IMAGES':
            return {...state, temporaryImages: action.temporaryImages}
        case 'DELETE_IMAGE':
            debugger;
            return {...state, images: state.images.filter(image => image.url !== action.imageToDelete)}
        case 'STORE_ID':
            return { ...state, id: action.id };
        case 'ADD_IMAGES':
            return {...state, images: action.images}
        default:
            return state;
    }
}

export default manageImages