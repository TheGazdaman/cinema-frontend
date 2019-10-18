import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from '../Login';
import Movies from '../Movies';
import Movie from '../Movie';
import Theaters from '../Theaters';
import Theater from '../Theater';
import Programme from '../Programme';

export default function Page(props) {
    return (

        <>
            <Router>
                <div className="page__content">
                    <Switch>
                        <Route path="/login">
                            <Login 
                                onLoginClick={ props.onLoginClick }
                                onLogoutClick={ props.onLogoutClick }
                            />
                        </Route>
                        <Route path="/movies" component={ Movies } />
                        <Route path="/movie/:id" component={ Movie } />
                        <Route path="/:slug/programme" component={ Programme } />
                        <Route path="/:slug" component={ Theater } />
                        <Route path="/" component={ Theaters } />
                    </Switch>
                </div>
            </Router>
        </>

    )
}