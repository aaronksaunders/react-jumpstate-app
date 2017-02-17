import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterState from './state/counter'

import './App.css';


class App extends Component {
    render() {
        return (
            <div  className="App-intro">
                <p>title</p>
                <button onClick={ () => CounterState.decrement() }>Decrement</button>
                <button onClick={ () => CounterState.increment() }>Increment</button>
            </div>
        );
    }
}

export default connect(state => {
    return {
        counter: state.counter
    }
})(App)


