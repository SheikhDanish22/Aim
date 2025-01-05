import React from 'react'
import img3 from "../images/service.jpg";

const Content = () => {
  return (
    <>
      <div style={{
        position: 'relative',
        backgroundImage: `url(${img3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh" // Adjust the height as needed
      }}>
        {/* Overlay with low opacity */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust opacity (0 to 1)
        }}></div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          color: 'white', // Make text visible
          padding: '20px',
        }}>
          <h1>asdasaas</h1>
        </div>
      </div>
    </>
  )
}

export default Content;
