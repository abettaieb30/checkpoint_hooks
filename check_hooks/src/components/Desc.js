import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Desc = ({movies}) => {

  const  params = useParams()
  console.log(params)

  const movie = movies.find(el => el.id === params.id )


  return (
         
         
      
        <div >
           
    <Card style={{  width:"100%" , height:"80% "}}>

    
      <Card.Body className='cardbody'>
        
        <Card.Title>Description</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Button style={{  backgroundColor:"honeydew" }} ><Link to={'/'}> Back To Home </Link></Button>
      </Card.Body>
      <div className='trailer'> {movie.trailer}</div>
    </Card> 
    




   
    </div>


  );
}



export default Desc
