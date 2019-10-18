import React from 'react';

import MovieReviews from '../MovieReviews';

export default function Movie(props) {
    return (
        <>
            <h1>MOVIE DETAIL</h1>

            <MovieReviews 
                movie_id={ props.data.id }
            />

        </>
        
    )
}