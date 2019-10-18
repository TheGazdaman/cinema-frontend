import React from 'react';
import User from '../../Util/User';
import ApiComponent from '../ApiComponent.js';
import Content from './UserStatus.jsx';

export default class UserStatus extends ApiComponent {

    constructor(props) {
        super(props);

        this.should_load = User.getUserId() ? true : false;

        this.url = '/api/user';

        this.container_className = 'user-status';
    }

    buildQS() {
        return {
            id: User.getUserId()
        };
    }

    getLoadedContent() {
        return <Content 
            user_id={ User.getUserId() }
            data={ this.state.data } 
        />
    }
}
