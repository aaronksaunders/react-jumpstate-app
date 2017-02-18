import React, {Component} from 'react';
import {connect} from 'react-redux'

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListComponent(props) {
    const listItems = props.users.map((_user) =>
        <li key={_user.login.md5}>{_user.email}</li>
    );

    return (
        <div >
            {listItems}
        </div>
    );
}

// wrap my component, get the state...
export default connect(state => {
    return {users: state.users.users}
})(ListComponent)

