import React  from 'react';
import {connect} from 'react-redux'

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListComponent(props) {
    const {users, loading} = props;
    const styles = {'display': 'flex', flexDirection: 'column'}
    const listItems = loading ? <p>LOADING...</p>
        : users.map((_user) =>
            <ListItem key={_user.login.md5} user={_user}/>
        );

    return (
        <div style={styles}>
            {listItems}
        </div>
    );
}

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListItem(props) {
    const {user} = props;
    const styles = {
        container: {'display': 'flex', flexDirection: 'row', padding: 3},
        image: {flex: 0, padding: 5},
        email: {flex: 1, padding: 5}
    }


    return (
        <div style={styles.container}>
            <img style={styles.image} src={user.picture.thumbnail}></img>
            <p style={styles.email}>{user.email}</p>
        </div>
    );
}

// wrap my component, get the state...
export default connect(state => {
    return {
        users: state.users.users,
        loading: state.users.loading
    }
})(ListComponent)

