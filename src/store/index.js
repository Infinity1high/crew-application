import {createStore} from "redux";

import reducers from './reducers';
import middleware from './middleware';

const store = createStore(
    reducers,
    undefined,
    middleware
);

// TODO: ...

console.log(store.getState());

export default store;