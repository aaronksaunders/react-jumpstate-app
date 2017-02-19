import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router, IndexRoute} from 'react-router'
import Root from './Root';
import  App from './App';
import QueryUsers from './components/QueryUsers'
import QueryStuff from './components/QueryStuff'
import './index.css';

import * as firebase from 'firebase';

import {Provider} from 'react-redux'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {CreateJumpstateMiddleware} from 'jumpstate'
import CounterState from './state/counter'
import UsersState from './state/users'
import StuffState from './state/stuff'



const firebaseConfig = {
    apiKey: "AIzaSyC7XBiaPpX3tbmsO7oofWsNYK7ZP3fkkzU",
    authDomain: "new-web-project-45936.firebaseapp.com",
    databaseURL: "https://new-web-project-45936.firebaseio.com",
    storageBucket: "new-web-project-45936.appspot.com",
    messagingSenderId: "882846816313"
};

firebase.initializeApp(firebaseConfig);


const states = {
    counter: CounterState,
    users: UsersState,
    stuff: StuffState
};
const store = createStore(
    combineReducers(states),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        CreateJumpstateMiddleware()
    )
);

/*
 ReactDOM.render(
 <Provider store={store}>
 <App />
 </Provider>,
 document.getElementById('root')
 );
 */

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={App}/>
                <Route path="/query-users" component={QueryUsers}/>
                <Route path="/query-stuff" component={QueryStuff}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);