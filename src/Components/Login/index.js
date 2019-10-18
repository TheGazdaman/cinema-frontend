import React from 'react';
import User from '../../Util/User';
import ApiComponent from '../ApiComponent.js';
import Content from './Login.jsx';

export default class Login extends ApiComponent {

    constructor(props) {
        super(props);

        this.should_load = User.getUserId() ? false : true;

        this.url = '/api/users';

        this.container_className = 'login';
    }

    buildQS() {
        return {
        };
    }

    getLoadedContent() {
        return <Content 
            user_id={ User.getUserId() }
            data={ this.state.data } 
            onLoginClick={ this.props.onLoginClick }
            onLogoutClick={ this.props.onLogoutClick }
        />
    }
}
