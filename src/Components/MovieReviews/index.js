import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './MovieReviews.jsx';

export default class MovieReviews extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/reviews';

        this.container_className = 'movie-reviews';
    }

    buildQS() {
        return {
            id: this.props.movie_id
        };
    }

    getLoadedContent() {
        return <Content data={ this.state.data } />
    }
}
