import React from 'react'
import { Button, Card } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import { useNavigate } from 'react-router';
//import {movies} from './../App';
import { useDispatch} from 'react-redux';
import { Delete } from '../Slices/TaskSlice';


const MovieCard = ({movie}) => {
  /*const mvData = useSelector(state => state.data.data)*/
  const dispatch = useDispatch()
  const handleDelete=({id})=>{
    dispatch(Delete({id}))

}
  const navigate=useNavigate();
    return (
        <Card style={{ width: '21%',marginLeft:'2rem' ,marginTop:"1rem",
        boxShadow: "0px -1px 13px 2px #000000"
         }}>
  <Card.Img variant="top" src={movie.posterurl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      <div>
      - If you want to see the full description and the trailer of the movie , please click on the <strong style={{color:"#0dcaf0"}}>Trailer Button</strong> .
      </div>
      <div>
        - If you want to delete it , please click on the <strong style={{color:"red"}}>Red Butoon</strong> bellow .
      </div>
    </Card.Text>
    <ReactStarsRating
       isEdit={false}
      value={movie.rating}
      />
    

  </Card.Body>
  
  <Button style={{marginBottom:"10px",marginTop:"2px",marginLeft:"40px",marginRight:"40px"}}variant="outline-info" onClick={()=>navigate(`/Movies/${movie.id}`)}>Trailer</Button>
     
     <div style={{paddingBottom:"10px"}}>
     
<Button variant='danger' onClick={()=>handleDelete({id:movie.id})}>⌫</Button>
</div>   


</Card>
    );
};

export default MovieCard;
