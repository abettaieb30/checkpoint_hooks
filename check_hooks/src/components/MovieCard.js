import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({movie}) {
  return (
    <Card className="card" >
      <Card.Img className="poster" variant="top" src={movie.poster} />
        <Card.Title> <p className="title">{movie.title}</p></Card.Title>
        <Card.Text className="desc"> <p>Description:</p>  {movie.description} </Card.Text>       
        <ListGroup.Item className="yeat">Year: {movie.year}</ListGroup.Item>
        <ListGroup.Item className="yeat">
        <StarRatingComponent
        name="star" 
        value = {movie.rate}/>
          </ListGroup.Item>  
        
        
    </Card>
  );
}

export default MovieCard;
