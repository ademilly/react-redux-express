import React from 'react';
import { Router, Route } from 'react-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import TheApp from './reducers';

let store = createStore(TheApp, { value: 'Hello'});

const Routes = (props) => (
    <Provider store={ store }>
        <Router { ...props }>
            <Route path="/" component={ App } />
        </Router>
    </Provider>
);

export default Routes;
