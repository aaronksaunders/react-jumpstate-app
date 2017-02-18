import React, {Component} from 'react';
import {connect} from 'react-redux'

import {Actions} from 'jumpstate'
import ListComponent from './components/ListComponent'


import * as firebase from 'firebase';

import './App.css';


/**
 *
 */
class App extends Component {

    constructor(props) {
        super(props)
         const firebaseConfig = {
            apiKey: "AIzaSyC7XBiaPpX3tbmsO7oofWsNYK7ZP3fkkzU",
            authDomain: "new-web-project-45936.firebaseapp.com",
            databaseURL: "https://new-web-project-45936.firebaseio.com",
            storageBucket: "new-web-project-45936.appspot.com",
            messagingSenderId: "882846816313"
        };

        firebase.initializeApp(firebaseConfig);
    }

    componentDidMount() { // check to see if already signed in.
        const auth = firebase.auth();
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({auth: user});
            } else {
                this.setState({auth: false});
                firebase.auth().signInWithEmailAndPassword('newuser@mail.com', 'password');
            }
        });
    }


    render() {
        const {users, counter} = this.props;

        return (
            <div className="App-intro">
                <p>{ users.error ? users.error : ""}</p>
                <p>{counter.count}</p>
                <button onClick={ () => Actions.decrement() }>Decrement</button>
                <button onClick={ () => Actions.increment() }>Increment</button>
                <button onClick={ () => Actions.loadRandomUsers() }>Load Users</button>
                <button onClick={ () => Actions.loadFirebaseStuff() }>Load Stuff</button>
                <button onClick={ () => Actions.addFirebaseStuff() }>Load Stuff</button>
                <div>
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
        users: state.users,
        stuff: state.stuff
    }
})(App)


