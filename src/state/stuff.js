import {State, Effect, Actions} from 'jumpstate'
import axios from 'axios';

import * as firebase from 'firebase';

/**
 *
 */
export default State({
    // Initial State
    initial: {
        stuffList: [],
        error: null,
        loading: false
    },
    // Actions
    loadStuffSuccess (state, payload) {
        return {...state, stuffList: payload, error: null}
    },
    loadStuffError (state, payload) {
        return {...state, stuffList: [], error: payload.message}
    },
    addStuffSuccess (state, payload) {
        return {...state, stuffItem: payload, error: null}
    },
    addStuffError (state, payload) {
        return {...state, stuffItem: null, error: payload.message}
    },
    showLoading (state, payload) {
        return {...state, loading: payload}
    }

})


// Create an asynchronous increment action
/**
 *
 */
const loadFirebaseStuff = Effect('loadFirebaseStuff', (payload) => {
    Actions.showLoading(true)

    var result = [];
    // load data from firebase...
    firebase.database().ref('stuff').orderByKey().once('value', (_snapshot) => {

        _snapshot.forEach((_childSnapshot) => {
            // get the key/id and the data for display
            var element = _childSnapshot.val();
            element.id = _childSnapshot.key;

            result.push(element);
        });

        Actions.loadStuffSuccess(result);
        Actions.showLoading(false);

    }).catch((_error) => {
        Actions.loadStuffError(_error);
        Actions.showLoading(false);
    })

});

const addFirebaseStuff = Effect('addFirebaseStuff', (payload) => {

    const newPostKey = firebase.database().ref().child('stuff').push().key;

    const updates = {};
    updates['/stuff/' + newPostKey] = {
        'location': 'location ' + Date.now(),
        'name': 'Any Name'
    };

    firebase.database().ref().update(updates).then((_response) => {
        Actions.addStuffSuccess({...updates['/stuff/' + newPostKey], id: newPostKey});
        Actions.showLoading(false);
    }).catch((_error) => {
        Actions.addStuffError(_error);
        Actions.showLoading(false);
    })
});

