import countries from "../reducer/index";

import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

const store = createStore(
    countries,
    compose(
        applyMiddleware(thunk) // Cuando se dispara una accion async la agarra el thunk y evita errores.
    )
);

export default store;
