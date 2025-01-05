import React from 'react'
import img1 from "../images/digital.jpg";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img2 from "../images/img2.png";
import img3 from "../images/img3.jpg";
const About = () => {
  return (
    <>
     <Carousel >
      <Carousel.Item className='mainAbout'>
      <img src={img2} width="100%" height="500px"/>
        <Carousel.Caption>
          
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} width="100%" height="500px"/>
        <Carousel.Caption>
         
        
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>





   
    <div id='main' style={{marginTop:"100px"}} >
        <div id='box2'>
           <img src={img1} alt="" />
        </div>
        <div style={{paddingLeft:"80px", fontSize:"10px" }}>
          
                <h1>Digital Marketing</h1>
         
        
                <h3 >
                Amsaaf Digital Marketing is a specialized division of Amsaaf that focuses on helping businesses enhance their online presence and digital visibility. As a startup, we are agile and adaptable, leveraging the latest marketing technologies and strategies to deliver results-driven campaigns. We understand the importance of digital marketing in today’s world, and we work closely with our clients to build engaging, targeted, and high-conversion marketing strategies across multiple platforms.
                </h3>
          

        </div>


    </div>
<hr />

    <div id='main' style={{marginTop:"100px"}}>
       <div>
        <h3 style={{fontSize:"35px"}}>
        Whether you're a small business looking to establish your brand online or a larger organization aiming to refine your digital marketing strategy, Amsaaf provides end-to-end services that meet your goals
        </h3>
       </div>
        <div style={{paddingLeft:"80px", fontSize:"10px" }}>
          
        <div id='box2'>
           <img src={img1} alt="" />
        </div>

        </div>


    </div>


   



  


        
    </>
  )
}

export default About
