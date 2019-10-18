import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Theaters extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            loaded: false,
            data: []
        };

        this.url = "http://www.cinemalist.test:8080/api/tableTheatre";
    }
    componentDidMount() {
        this.loadData();    
    }

    loadData() {
        if (this.url) {
            this.setState({ 
                loading: true,
                loaded: false,
                data: []
            })

            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        loaded: true,
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }
    
    render() {
        let content = (
            <div className="theatre">
               
            </div>
        )

        if (!this.state.loading && this.state.loaded) {
            content = (
            <>
                <h1>Welcome to Daydream Cinemas</h1>

                <div className="calltoaction">Please select a theater near you</div>

                <ul>
                    {
                        this.props.data.map((theater, i) => (
                            <li key={ i }>
                            <Link to={ `/${theater.slug}`}>{ theater.name }</Link>
                        </li>
                        ))
                    }
        
                </ul>
            </>
            )
        }

        return (
            <section className="theaters">

            { content }

            </section>
        );
    }

}