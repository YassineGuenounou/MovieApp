import React, { useState } from 'react'
import { Container, Form, Modal, Nav, Navbar,Button } from 'react-bootstrap';
import ReactStarsRating from 'react-awesome-stars-rating';
import { useNavigate } from 'react-router';


const NavigationBar = ({setMovies,movies,setSearchCondition,searchRating,setSearchRating}) => {
  const navigate=useNavigate()
  
  const [show, setShow] = useState(0)
  const [movieToAdd, setMovieToAdd] = useState({
        name:"",
        description:"",
        posterurl:"",
        rating:0

    }

    )
    
    function handleAdd() {
    setMovies([...movies, movieToAdd]);
    setTimeout(() => {
      setShow(false);
    }, 1500);
  }
  

    return (
        <Navbar bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link onClick={()=>navigate("/")} >Home</Nav.Link>
      <Nav.Link onClick={()=>navigate("/Movies")}>Movies</Nav.Link>
      <Nav.Link >Desccripton</Nav.Link>
    </Nav>
    <ReactStarsRating
    onChange={(x)=>setSearchRating(x)}
      value={searchRating}
      />
    <Form.Control type="text" placeholder="Search movie" style={{width:"300px",marginLeft:"1rem"}}
    onChange={(e)=>setSearchCondition(e.target.value)}/>

    </Container>
    <Button variant="dark" onClick={()=>setShow(true)} style={{marginRight:"10px"}} >Add movie</Button>
    <Modal show={show} onHide={()=> setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Movie to add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Label>Movie name</Form.Label>
            <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,name:e.target.value})} type="text" placeholder="Name" />
            <Form.Label>Movie description</Form.Label>

            <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,description:e.target.value})} type="text" placeholder="Description" />
            <Form.Label>Movie URL</Form.Label>

            <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,posterurl:e.target.value})} type="url" placeholder="Poster URL" />
            <Form.Label>Movie rate</Form.Label>


            <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd,rating:e.target.value})} type="number" placeholder="Rating" />


            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setShow(false)}>
            Close
          </Button>
          <Button variant="dark" onClick={handleAdd}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
  </Navbar>
    );
};

export default NavigationBar;
