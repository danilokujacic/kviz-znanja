import React from 'react';
import { render } from 'react-dom';
import './assets/index.css';
import App from './App';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import store from './redux';
const history = createBrowserHistory();
render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'),
);
