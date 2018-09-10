import axios from "axios/index";

const URL = 'https://randomuser.me/api/?nat=gb&results=5'
export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_CREW_MEMBERS_LOAD_REQUEST = 'ACTION_SEARCH_CREW_MEMBERS_LOAD_REQUEST';
export const ACTION_SEARCH_CREW_MEMBERS_LOAD_SUCCESS = 'ACTION_SEARCH_CREW_MEMBERS_LOAD_SUCCESS';
export const ACTION_SEARCH_CREW_MEMBERS_LOAD_FAILURE = 'ACTION_SEARCH_CREW_MEMBERS_LOAD_FAILURE';


export function searchTextChangedAction(text) {
    return {
        type: ACTION_SEARCH_TEXT_CHANGED,
        payload: {text}
    };
}

export function loadCrewMembersAction(searchText) {
    return (dispatch) => {
        dispatch({type: ACTION_SEARCH_CREW_MEMBERS_LOAD_REQUEST});
            axios.get(URL)
                .then((response) => {
                  console.log(response);
                    const {data: {results}} = response;
                    dispatch({
                        type: ACTION_SEARCH_CREW_MEMBERS_LOAD_SUCCESS,
                        payload: {crewMembers: results.map(item => ({
                          ...item,
                          hiringStatus: 'applied',
                          }))}
                    });
                })
                .catch((err) => dispatch({type: ACTION_SEARCH_CREW_MEMBERS_LOAD_FAILURE, payload: {err}}))
    };
}
