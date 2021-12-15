import React from "react";
import "./Home.css";
import video2 from "../../assets/video/vid2.mp4";
import { Carousel } from 'antd';
const Home = () => {
 
  return (
    <div>
      <Carousel style={{width: "100%",  backgroundColor: "rgba(202, 185, 185, 0.3)"}} autoplay>
          
          <img src="https://i.ytimg.com/vi/ah0LZ_5zUrk/maxresdefault.jpg" alt="" />
      
        
          <img src="https://avatars.mds.yandex.net/get-zen_doc/1587860/pub_5d2610d04e057700b625b8d8_5d27207643bee300ae835339/scale_1200" alt="" />
        
        
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/85664358970509.5a115b3f61c33.jpg" alt="" />
        
        
          <img src="https://thepage.fra1.digitaloceanspaces.com/live/media/106323/conversions/04_PA2020_01_0005_RGB_HD-r0-large.jpg?v=1604011514" alt="" />
       
      </Carousel>
      <div className="home-image">
        <img style={{height: '500px', width: "70%" }} src="https://images.milledcdn.com/2019-12-25/0UDQ_kMFCm99L57A/an6_N3dTCKLE.gif" alt="" />
      </div>
      <video
        className="vid"
        autoPlay
        muted
        loop
        width="100%"
        src={video2}
      ></video>
      
      
        
      
    </div>
  );
};

export default Home;
