import React from 'react';
import ReactDOM from 'react-dom';
import  App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { CreateJumpstateMiddleware } from 'jumpstate'
import CounterState from './state/counter'
import UsersState from './state/users'

const states = {
    counter: CounterState,
    users : UsersState
}
const store = createStore(
    combineReducers(states),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        CreateJumpstateMiddleware()
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
