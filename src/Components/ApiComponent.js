import React from 'react';
import config from '../config.js';

const queryString = require('query-string');

export default class ApiComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.should_load = true;

        this.url = null;

        this.container_className = '';
    }

    logError(text) {
        let css = "background: #f5b4b4; color: #750606; font-weight: bold";

        console.log('%c HACKATHON ERROR: ' + text + ' ', css);
    }

    buildAbsUrl(url) {
        let base = config.base_url.replace(/[\/]+$/, ''),
            qs = queryString.stringify(this.buildQS());

        url = url.replace(/^[\/]+/, '');

        return base + (url ? '/' + url : '') + (qs ? '?' + qs : '');
    }

    buildQS() {
        return {};
    }

    componentDidMount() {
        if (this.should_load) {
            this.loadData();
        }
    }

    loadData() {
        if (this.url) {
            const url = this.buildAbsUrl(this.url);
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
            })

            fetch(url)
                .then(response => {
                    if (response.status == 404) {
                        throw 'The endpoint at ' + url + ' was not found';
                    } else {
                        return response.text()
                    }
                })
                .then(text => {
                    try {
                        const data = JSON.parse(text);
                        return data;
                    } catch(err) {
                        throw 'The response received from ' + url + ' is not a JSON string';
                    }
                })
                .then(data => {
                    this.setState({ 
                        loaded: true,
                        data: data
                    })
                })
                .catch(error => {
                    this.logError(error);
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    render() { 
        return (
            <div className={ this.container_className }>
                { this.getContent() }
            </div>
        );
    }

    getLoadingContent() {
        return (
            <div className="loader">
                <div className="indicator"><div></div><div></div><div></div><div></div></div>
                Loading
            </div>
        )
    }

    getLoadedContent() {
        // to be implemented in extending components
        this.logError('Implement getLoadedContent method in this component');
        
        return '';
    }

    getContent() {
        if (this.should_load && (this.state.loading || !this.state.loaded)) {

            return this.getLoadingContent();
        
        } else {

            return this.getLoadedContent();

        }
    }

}