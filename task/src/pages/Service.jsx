import React from 'react'
import img2 from "../images/service-1.jpg";
import img3 from "../images/service.jpg";
import Carousel from 'react-bootstrap/Carousel';

const Service = () => {
  return (
    <>
    <Carousel>
    <Carousel.Item>
    <img src={img2} width="100%" height="500px"/>
      <Carousel.Caption>
        
   
      </Carousel.Caption>
    </Carousel.Item>
   
   
  </Carousel>




  <div id='main' style={{marginTop:"100px"}}>
        <div id='box2'>
           <img src={img3} alt="erw" style={{height:"600px"}}/>
        </div>
        <div style={{paddingLeft:"80px", fontSize:"5px" }}>
          
                <h1>Social Media Management</h1>
         
        
                <h3 >
                
        Amsaaf offers comprehensive social media management services that cover all aspects of social media presence, from content creation and publishing to community management and performance analytics. We manage profiles across popular platforms like Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube. Our team creates compelling content, fosters engagement, and ensures consistent branding across all channels. We also track and analyze metrics to refine strategies for optimal results.
        Social Media Advertising
        We help businesses run highly targeted advertising campaigns on social media platforms. Our team designs and implements Facebook Ads, Instagram Ads, LinkedIn Ads, Twitter Ads, and TikTok Ads to drive brand awareness, lead generation, and sales. We utilize advanced audience segmentation and A/B testing to optimize ad spend and deliver maximum ROI.
                </h3>
          

        </div>


    </div>
    </>

  )
}
export default Service
