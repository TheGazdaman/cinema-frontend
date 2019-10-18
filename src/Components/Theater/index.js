import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './Theater.jsx';

export default class Theater extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/theater';

        this.container_className = 'theater';
    }

    buildQS() {
        let { slug } = this.props.match.params;

        return {
            theater: slug
        };
    }

    getLoadedContent() {
        let { slug } = this.props.match.params;

        return <Content slug={ slug } data={ this.state.data } />
    }
}
