import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './NowPlaying.jsx';

export default class NowPlaying extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/screenings/now';

        this.container_className = 'now-playing';
    }

    buildQS() {
        return {
        };
    }

    getLoadedContent() {
        return <Content data={ this.state.data } />
    }
}
