import React from 'react';
import ApiComponent from '../ApiComponent.js';
import Header from '../Header';
import Content from './Programme.jsx';

export default class Programme extends ApiComponent {

    constructor(props) {
        super(props);

        this.url = '/api/programme';

        this.container_className = 'programme';
    }

    buildQS() {
        let { slug } = this.props.match.params;

        return {
            theater: slug
        };
    }

    render() { 

        let { slug } = this.props.match.params;

        return (
            <div className={ this.container_className }>

                <Header 
                    slug={ slug }
                />

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
