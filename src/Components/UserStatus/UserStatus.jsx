import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export default function  UserStatus(props) {
    if (props.user_id) {
        return (
            <>
                LOGGED IN AS { props.user_id }
                <Link to="/login">Logout</Link>
            </>
        )
    } else {
        return (
            <>
                NOT LOGGED IN
                <Link to="/login">Login</Link>
            </>
        )
    }
}