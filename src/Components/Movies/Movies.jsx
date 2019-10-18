import React from 'react';

import GenreSelection from '../GenreSelection';

export default function Movies(props) {
    return (
        <>
            <h1>MOVIES LIST</h1>

            <GenreSelection 
                onGenreSelect={ props.onGenreSelect }
            />

        </>
        
    )
}