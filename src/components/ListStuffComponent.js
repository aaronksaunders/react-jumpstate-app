import React  from 'react';
import {connect} from 'react-redux'

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListStuffComponent(props) {
    const {stuffList, loading} = props;
    const styles = {'display': 'flex', flexDirection: 'column'}
    const listItems = loading ? <p>LOADING...</p>
        : stuffList.map((_stuff) =>
            <ListItem key={_stuff.id} stuff={_stuff}/>
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
    const {stuff} = props;
    const styles = {
        container: {'display': 'flex', flexDirection: 'row', padding: 3},
        image: {flex: 0, padding: 5},
        email: {flex: 1, padding: 5}
    }


    return (
        <div style={styles.container}>
            <p style={styles.email}>{stuff.name}</p>
            <p style={styles.email}>{stuff.location}</p>
        </div>
    );
}

// wrap my component, get the state...
export default connect(state => {
    return {
        stuffList: state.stuff.stuffList,
        loading: state.stuff.loading
    }
})(ListStuffComponent)

