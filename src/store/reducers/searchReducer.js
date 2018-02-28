import * as SearchActions from '../actions/searchActions';

const initState = {
    content: '',
    photos: []
};

export default  (state = initState, action) => {
    switch (action.type) {
        case SearchActions.ACTION_SEARCH_TEXT_CHANGED:
            return {
                ...state,
                content: action.payload.text,

            };
        case SearchActions.ACTION_SEARCH_PHOTOS_LOAD_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};