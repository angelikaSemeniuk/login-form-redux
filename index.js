import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/reducer";
import TestApp from "./components/TestApp";

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <TestApp />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);