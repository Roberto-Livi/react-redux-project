const manageImages = (state = { images: []}, action) => {
    switch(action.type) {
        case 'ADD_IMAGE':
            const image = {
                images: action.img
            }
            return {...state.images, image}
        default:
            return state;
    }
}

export default manageImages