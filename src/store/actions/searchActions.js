import axios from "axios/index";

const SERVER_URL = '//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=25b80d86579f6db566f53d0712e7f2e6&format=json&nojsoncallback=1';
const AUTH_URL = '&auth_token=72157693954448775-d35f374dee403878&api_sig=b47213a02a43815ac14cc5fdaec821b6';
const TEXT_URL = '&text=';
export const ACTION_SEARCH_TEXT_CHANGED = 'ACTION_SEARCH_TEXT_CHANGED';
export const ACTION_SEARCH_PHOTOS_LOAD_REQUEST = 'ACTION_SEARCH_PHOTOS_LOAD_REQUEST';
export const ACTION_SEARCH_PHOTOS_LOAD_SUCCESS = 'ACTION_SEARCH_PHOTOS_LOAD_SUCCESS';
export const ACTION_SEARCH_PHOTOS_LOAD_FAILURE = 'ACTION_SEARCH_PHOTOS_LOAD_FAILURE';


export function searchTextChangedAction(text) {
    return {
        type: ACTION_SEARCH_TEXT_CHANGED,
        payload: {text}
    };
}

export function loadPhotosAction(searchText) {
    console.log(searchText);
    return (dispatch) => {
        dispatch({type: ACTION_SEARCH_PHOTOS_LOAD_REQUEST});
        var URL;
        if (searchText===''){
            URL = SERVER_URL+AUTH_URL;
        }
        else {
            URL = SERVER_URL+TEXT_URL+searchText;
        }
            axios.get(URL)
                .then((response) => {
                    const {data: {photos: {photo}}} = response;

                    console.log(response);
                    dispatch({
                        type: ACTION_SEARCH_PHOTOS_LOAD_SUCCESS,
                        payload: {photos: photo}
                    });
                })
                .catch((err) => dispatch({type: ACTION_SEARCH_PHOTOS_LOAD_FAILURE, payload: {err}}))
            };
}
//ttps://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=25b80d86579f6db566f53d0712e7f2e6&text=horse&format=json&nojsoncallback=1&auth_token=72157693954448775-d35f374dee403878&api_sig=b342f8968437bb41ce803ea9545ed6ad
//ttps://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=25b80d86579f6db566f53d0712e7f2e6&text=cars&format=json&nojsoncallback=1&auth_token=72157693954448775-d35f374dee403878&api_sig=88edf8a1866aab3fb8c8ddfc3b2f08d7
//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=25b80d86579f6db566f53d0712e7f2e6&format=json&nojsoncallback=1 &text=horse
//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=25b80d86579f6db566f53d0712e7f2e6&format=json&nojsoncallback=1 &auth_token=72157693954448775-d35f374dee403878&api_sig=b47213a02a43815ac14cc5fdaec821b6';