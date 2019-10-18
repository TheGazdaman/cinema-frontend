import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './UpcomingMovies.jsx';

export default class UpcomingMovies extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/movies/upcoming';

        this.container_className = 'upcoming-movies';
    }

    buildQS() {
        return {
        };
    }

    getLoadedContent() {
        return <Content data={ this.state.data } />
    }
}
