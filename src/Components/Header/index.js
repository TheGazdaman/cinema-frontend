import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './Header.jsx';

export default class Header extends ApiComponent {
    
    constructor(props) {
        super(props);

        this.url = '/api/openstatus';
    }

    buildQS() {
        return {
            slug: this.props.slug
        };
    }

    render() { 
        return (
            <Content data={ this.state.data } />
        );
    }

}
