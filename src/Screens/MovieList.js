import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import MovieCard from '../Components/MovieCard'


const MovieList = ({searchRating,  movies,searchCondition}) => {
    const mvData = useSelector(state => state.data.data)
    
    return (

        
        
        <Container style={{display:'flex',flexWrap:'wrap',justifyContent:"space-around",paddingBottom:'2rem',marginTop:"4em"}}>
            {mvData
            .filter((movie)=>movie.name.toLowerCase().includes(searchCondition.toLowerCase()) && movie.rating>=searchRating)
            .map((movie)=>(
                <MovieCard movie={movie}/>
            )).reverse()}
        </Container>
    )
}

export default MovieList
