import React, {PropTypes} from 'react'
import ListStuffComponent from './ListStuffComponent'
import {Actions} from 'jumpstate'
import { browserHistory } from 'react-router'

/* http://localhost:3000/query?test=hehehe */
export default function QueryStuff(props) {
    return (
        <div>
            <p>
                <button onClick={ () => Actions.loadFirebaseStuff() }>Load Stuff</button>
                <button onClick={ () => Actions.addFirebaseStuff() }>Add Stuff</button>
                <button onClick={ () => browserHistory.push("/") }>Go Home</button>
            </p>
            <ListStuffComponent />
        </div>
    )
}