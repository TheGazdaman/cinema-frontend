import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Theaters(props) {
    return (

        <>
            <h1>Welcome to Daydream Cinemas</h1>

            <div className="calltoaction">Please select a theater near you</div>

            <ul>
                <li>
                    <Link to="/prague">Prague</Link>
                </li>
                <li>
                    <Link to="/london">London</Link>
                </li>
                <li>
                    <Link to="/brussels">Brussels</Link>
                </li>
            </ul>
        </>

    )
}