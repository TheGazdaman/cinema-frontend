import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Content from './Movie.jsx';

export default class Movie extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/movie';

        this.container_className = 'movie-detail';
    }

    buildQS() {
        let { id } = this.props.match.params;

        return {
            id: id
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
