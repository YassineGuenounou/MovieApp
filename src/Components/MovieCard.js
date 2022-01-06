import React from 'react'
import { Button, Card } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import { useNavigate } from 'react-router';
import {movies} from './../App'

const MovieCard = ({movie}) => {
  const navigate=useNavigate();
    return (
        <Card style={{ width: '21%',marginLeft:'2rem' ,marginTop:"1rem",
        boxShadow: "0px -1px 13px 2px #000000"
         }}>
  <Card.Img variant="top" src={movie.posterurl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.description.substring(0,10)+"..."}
    </Card.Text>
    <ReactStarsRating
       isEdit={false}
      value={movie.rating}
      />
    

  </Card.Body>
  <Button style={{marginBottom:"30px",marginTop:"20px",marginLeft:"40px",marginRight:"40px"}}variant="outline-info" onClick={()=>navigate(`/Movies/${movie.id}`)}>Trailer</Button>

</Card>
    );
};

export default MovieCard;
