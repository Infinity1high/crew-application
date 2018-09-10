import * as SearchActions from '../actions/searchActions';

const initState = {
    content: '',
    crewMembers: []
};

export default  (state = initState, action) => {
    switch (action.type) {
        case SearchActions.ACTION_SEARCH_TEXT_CHANGED:
            return {
                ...state,
                content: action.payload.text,

            };
        case SearchActions.ACTION_SEARCH_CREW_MEMBERS_LOAD_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
    }
};

