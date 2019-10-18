import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './Movies.jsx';

export default class Movies extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/movies';

        this.container_className = 'movies-list';
    }

    buildQS() {
        return {
        };
    }

    render() { 

        return (
            <div className={ this.container_className }>
                <Header />

                { this.getContent() }
            </div>
        );
    }

    getLoadedContent() {
        return <Content 
            data={ this.state.data } 
        />
    }
}
