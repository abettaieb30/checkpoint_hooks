import React from 'react'
import {Link} from 'react-router-dom'
import MovieCard from './MovieCard'

function MovieList({movies,showDesc}) {
  return (<div>
    {/* <Link to="/">Home</Link>  */}
    <div className='list'>
        
      {movies.map((movie,i) => <MovieCard key={i} movie={movie} showDesc={showDesc}/>)}
    </div></div>
  )
}

export default MovieList
