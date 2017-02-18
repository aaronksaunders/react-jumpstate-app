import React  from 'react';
import {connect} from 'react-redux'

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListComponent(props) {
    const listItems = props.users.map((_user) =>
        <ListItem key={_user.login.md5} user={_user}/>
    );

    const styles = { 'display' : 'flex',  flexDirection: 'column'}

    return (
        <div style={styles}>
            {listItems}
        </div>
    );
}

function ListItem(props) {

    return (
        <div style={{'display' : 'flex',flexDirection:'row', padding: 3}}>
            <img  style={{flex: 0, padding: 5}} src={props.user.picture.thumbnail}></img>
            <p style={{flex: 1, padding: 5}}>{props.user.email}</p>
        </div>
    );
}

// wrap my component, get the state...
export default connect(state => {
    return {users: state.users.users}
})(ListComponent)

