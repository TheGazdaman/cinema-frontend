import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './Theaters.jsx';

export default class Theaters extends ApiComponent {
    
    constructor(props) {
        super(props);

        this.url = '/api/tableTheatre';

        this.container_className = 'theaters';
    }

    buildQS() {
        return {
        };
    }

    getLoadedContent() {
        return <Content data={ this.state.data } />
    }
}
