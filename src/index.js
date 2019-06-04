import ReactDom from "react-dom";
import React from "react";
import App from "./components/App";
import Provider from "react-redux/es/components/Provider";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./redux/reducers";

//Hooks up Redux development tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Redux store for storing state across the app
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);