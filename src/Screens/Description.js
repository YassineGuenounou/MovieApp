import React from 'react'
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router'

const Description = ({movies}) => {
    const params=useParams()
    let myId=params.id;
    let myMovie=movies.find((movie)=>movie.id==myId);
    return (
        <div>
        <Alert> <h2>{myMovie.name}</h2></Alert>
        <div className='des'>
            <h2 >{myMovie.description}</h2>
            <img src={myMovie.posterurl} style={{marginBottom:"2em"}}/>


        </div>
        </div>
        
    )
}

export default Description
