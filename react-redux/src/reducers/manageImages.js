const manageImages = (state = { images: [], username: ''}, action) => {
    switch(action.type) {
        case 'ADD_IMAGE':
            const image = {
                images: action.img
            }
            return Object.assign({}, state, { images: [...state.images, image] });
        case 'ADD_USERNAME':
            return Object.assign({}, state, { username: action.un });
        default:
            return state;
    }
}

export default manageImages