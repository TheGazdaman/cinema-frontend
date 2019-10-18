import React from 'react';
import Header from '../Header';

export default function Login(props) {
    let content = '';
    if (props.user_id) {
        content = (
            <div className="logout">
                <button onClick={ props.onLogoutClick }>Logout</button>
            </div>
        )
    } else {
        content = (
            <div className="user-select">
                <h1>Select a user to log in</h1>
                {
                    props.data.map((user) => (
                        <div key={ user.id } className="user-select__user">
                            <div className="user-select__username">{ user.name }</div>

                            <button className="user-select__login-as"
                                onClick={ (ev) => props.onLoginClick(ev, user.id) }
                            >Login</button>
                        </div>
                    ))
                }
            </div>
        )
    }

    return (
        <>
            <Header />

            { content }
        </>
    )
}