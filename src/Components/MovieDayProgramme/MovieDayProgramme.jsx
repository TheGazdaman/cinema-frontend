import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

export default function MovieDayProgramme(props) {
    let match = useRouteMatch();
    const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    return (

        <tr>
            <td className="movie">
                { props.movie.name }
            </td>
            {
                hours.map(hour => {
                    <td className="hour">

                    </td>
                })
            }

        </tr>

    )
}