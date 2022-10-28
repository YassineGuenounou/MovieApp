import React from 'react'
import BG from './../Assets/BG5.mp4'

/*import NavigationBar from '../Components/NavigationBar'*/

const Home = () => {
    return (
      <div className="home_bg">
   <video muted loop autoPlay  alt='movies' >
                <source src={BG} type="video/mp4"/>
            </video>            
        </div>
       
         
        
    )
}

export default Home
