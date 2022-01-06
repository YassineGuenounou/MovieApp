import React from 'react'
import { Container } from 'react-bootstrap'
import MovieCard from '../Components/MovieCard'


const MovieList = ({searchRating,  movies,searchCondition}) => {
    
    return (

        
        
        <Container style={{display:'flex',flexWrap:'wrap',justifyContent:"space-around",paddingBottom:'2rem',marginTop:"4em"}}>
            {movies
            .filter((movie)=>movie.name.toLowerCase().includes(searchCondition.toLowerCase()) && movie.rating>=searchRating)
            .map((movie)=>(
                <MovieCard movie={movie}/>
            )).reverse()}
        </Container>
    )
}

export default MovieList
