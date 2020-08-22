const manageImages = (state = { temporaryImages: [], images: [], username: '', id: ''}, action) => {
    switch(action.type) {
        case 'ADD_IMAGE':
            return { ...state, images: [...state.images, action.imageToSave] };
        case 'ADD_USERNAME':
            return {...state, username: action.un}
        case 'SET_TEMPORARY_IMAGES':
            return {...state, temporaryImages: action.temporaryImages}
        case 'DELETE_IMAGE':
            return {...state, images: state.images.filter(image => image !== action.imageToDelete)}
        case 'STORE_ID':
            return { ...state, id: action.id };
        default:
            return state;
    }
}

export default manageImages