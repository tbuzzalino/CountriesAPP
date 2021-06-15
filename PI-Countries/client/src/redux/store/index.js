// import { createStore, applyMiddleware, compose } from 'redux';
import countries from "../reducer/index";
// import thunk from 'redux-thunk';

// const store = createStore(countries, compose(applyMiddleware(thunk)));

// export default store;

import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

const store = createStore(
    countries,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
