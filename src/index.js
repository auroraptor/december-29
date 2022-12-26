import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from "./routers";
import store from "./store"
import {Provider} from 'react-redux';
import {START_URL} from "./constants";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={START_URL}>
            <MainRouter/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
