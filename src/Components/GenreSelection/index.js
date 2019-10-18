import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './GenreSelection.jsx';

export default class GenreSelection extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/genres';

        this.container_className = 'genre-select';
    }

    buildQS() {
        return {
        };
    }

    getLoadedContent() {
        return <Content data={ this.state.data } />
    }
}
