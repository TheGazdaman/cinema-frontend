import React from 'react';
import Header from '../Header';
import NowPlaying from '../NowPlaying';
import PlayingToday from '../PlayingToday';
import UpcomingMovies from '../UpcomingMovies';

export default class Theater extends React.Component {
    
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

        render () {
            let content = (
                <div className="theatre">
                   
                </div>
            )
        if (!this.state.loading && this.state.loaded) {
            content = (
        
       
        <>
            <Header 
                slug={ props.slug }
                />

                <h1>{ props.data.name }</h1>

                <div className="page__columns">

                    <main>
                        <PlayingToday />

                        <UpcomingMovies />
                    </main>

                    <aside>

                        <NowPlaying />
                        
                    </aside>

                </div>
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
