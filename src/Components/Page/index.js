import React from 'react';
import User from '../../Util/User';
import ApiComponent from '../ApiComponent.js';
import Content from './Page.jsx';

export default class Theaters extends ApiComponent {
    
    constructor(props) {
        super(props);

        this.url = '/api/theme';

        this.container_className = 'page';

        this.state = {...this.state, ...({
            user_id: User.getUserId()
        })}
    }

    buildQS() {
        return {
        };
    }

    onLoginClick(ev, id) {
        ev.preventDefault();

        User.pretendLogin(id);

        this.setState({
            user_id: id
        });
    }

    onLogoutClick(ev) {
        ev.preventDefault();

        User.pretendLogout();

        this.setState({
            user_id: null
        });
    }

    render() { 

        let style = {};
        if (this.state.loaded) {
            style = {
                backgroundImage: `url('${this.state.data.image}')`
            }
        }

        return (
            <div className="page" style={ style }>
                <Content 
                    data={ this.state.data } 
                    onLoginClick={ this.onLoginClick.bind(this) }
                    onLogoutClick={ this.onLogoutClick.bind(this) }
                />
            </div>
        );
    }

}
