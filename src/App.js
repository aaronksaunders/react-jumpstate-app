import React, {Component} from 'react';
import {connect} from 'react-redux'

import {Actions} from 'jumpstate'
import ListComponent from './components/ListComponent'


import './App.css';


/**
 *
 */
class App extends Component {
    render() {
        return (
            <div className="App-intro">
                <p>{ this.props.users.loading ? "LOADING..." : ""}</p>
                <p>{ this.props.users.error ? this.props.users.error : ""}</p>
                <p>{this.props.counter.count}</p>
                <button onClick={ () => Actions.decrement() }>Decrement</button>
                <button onClick={ () => Actions.increment() }>Increment</button>
                <button onClick={ () => Actions.loadRandomUsers() }>Increment</button>
                <div>
                    DATA
                </div>
                <ListComponent />
            </div>
        );
    }
}

/**
 *
 */
export default connect(state => {
    return {
        counter: state.counter,
        users: state.users
    }
})(App)


