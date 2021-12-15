import React from "react";
import "./Home.css";
import video from '../../assets/video/vid.mp4'

const Home = () => {
  
  return (
    <div>
      <video autoPlay muted loop width="100%" src={video}></video>
      <div className="home-image"></div>
      
    </div>
  );
};

export default Home;
