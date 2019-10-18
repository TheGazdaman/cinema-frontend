import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Page from '../Page';


export default class App extends React.Component {

    render() {
        return (
            <Page />
        );
    }
}
