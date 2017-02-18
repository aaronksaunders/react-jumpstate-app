import {State, Effect, Actions} from 'jumpstate'
import axios from 'axios';

/**
 *
 */
export default State({
    // Initial State
    initial: {
        users: [],
        error : null,
        loading: false
    },
    // Actions
    loadRandomUsersSuccess (state, payload) {
        return {...state, users: payload.data.results, error: null}
    },
    loadRandomUsersError (state, payload) {
        return {...state, users: [], error: payload.message}
    },
    showLoading (state, payload) {
        return {...state, loading: payload}
    }

})


// Create an asynchronous increment action
/**
 *
 */
const loadRandomUsers = Effect('loadRandomUsers', (payload) => {
    Actions.showLoading(true)
    axios.get('https://randomuser.me/api/?results=50')
        .then(Actions.loadRandomUsersSuccess)
        .catch(Actions.loadRandomUsersError)
        .finally(() => Actions.showLoading(false))
});


// POLYFILL
Promise.prototype['finally'] = function (f) {
    return this.then(function (value) {
        return Promise.resolve(f()).then(function () {
            return value;
        });
    }, function (err) {
        return Promise.resolve(f()).then(function () {
            throw err;
        });
    });
}