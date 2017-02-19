import React, {PropTypes} from 'react'
import ListComponent from './ListComponent'
import {Actions} from 'jumpstate'
import { browserHistory } from 'react-router'

/* http://localhost:3000/query?test=hehehe */
export default function QueryUsers(props) {
    const location = props.location
    return (
        <div>
            <p>
                <button onClick={ () => Actions.loadRandomUsers() }>Load Users</button>
                <button onClick={ () => browserHistory.push("/") }>Go Home</button>
            </p>
            <ListComponent />
        </div>
    )
}