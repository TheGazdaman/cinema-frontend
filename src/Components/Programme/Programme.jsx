import React from 'react';

import MovieDayProgramme from '../MovieDayProgramme/MovieDayProgramme.jsx';

export default function Theater(props) {
    const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    return (
        <>
            <h1>Programme for day ...</h1>

            <table>
                <thead>
                    <tr>
                        <th>Movie</th>
                        {
                            hours.map(hour => {
                                <th className="hour">
                                    { hour }
                                </th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.data.movies.map((item, i) => {
                            <MovieDayProgramme
                                key={ i }
                                movie={ item.movie }
                                times={ item.times }
                            />
                        })
                    }
                </tbody>

            </table>

        </>
        
    )
}