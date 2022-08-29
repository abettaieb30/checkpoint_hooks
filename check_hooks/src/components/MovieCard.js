
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';


function MovieCard({movie, showDesc}) {
  
  return (
   
    <Card className="card" onClick={(e)=>showDesc(e.target.value)} >
      <Card.Img className="poster" variant="top" src={movie.poster} />
        <Card.Title> <p className="title">{movie.title}</p></Card.Title>       
        <ListGroup.Item className="yeat">Year: {movie.year}</ListGroup.Item>
        <ListGroup.Item className="yeat">
        <StarRatingComponent
        name="star" 
        value = {movie.rate}/>
  
          </ListGroup.Item>     
       <button>  <Link to ={`/desc/${movie.id}`}>description and trailer</Link></button> 
    </Card>
   
  );
}

export default MovieCard;
