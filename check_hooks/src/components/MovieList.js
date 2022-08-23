import React from 'react'
import AddMovie from './AddMovie';
import MovieCard from './MovieCard'

function MovieList({movies}) {
  return (
    <div className='list'>
      
      {movies.map((movie,i) => <MovieCard key={i} movie={movie}/>)}
    </div>
  )
}

export default MovieList
