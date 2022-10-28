import React from 'react'
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'

const Description = () => {
    const mvData = useSelector(state => state.data.data)
    const params=useParams()
    let myId=params.id;
    let myMovie=mvData.find((movie)=>movie.id==myId);
    return (
        <div>
        <Alert> <h2>{myMovie.name}</h2></Alert>
        <div className='des'>
            <h2 style={{paddingBottom:"5px"}}>{myMovie.description}</h2>
            <iframe style={{marginBottom:"2em"}} width="560" height="315" src={myMovie.trailer} title="YouTube video player">
            </iframe>
            


        </div>
        
        </div>
        
    )
}

export default Description
