import './App.css';
import { useState } from 'react';
import MovieList from './Screens/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Screens/Home';
import Description from './Screens/Description';




function App() {
  
  const [searchCondition, setSearchCondition] = useState("")
  const [searchRating, setSearchRating] = useState(0)
  return (
  
  
    <div className="App" style={{backgroundColor:"grey"}}>
      
      
      <BrowserRouter>
      <NavigationBar searchRating={searchRating} setSearchRating={setSearchRating} setSearchCondition={setSearchCondition}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Movies" element={<MovieList searchRating={searchRating}  searchCondition={searchCondition}/>}/>
        <Route path="/Movies/:id"  element={<Description />}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
