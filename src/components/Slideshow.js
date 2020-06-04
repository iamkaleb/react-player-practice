import React from 'react'
import ReactGoogleSlides from "react-google-slides";
 
const Slideshow = () => {
  return (
    <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/13i9lv7r6sW1g8ggwYi3fqUjmA_RyDydSRSvVW-KqTNk/edit?usp=sharing"
      slideDuration={5}
      showControls
      loop
    />
  );
}

export default Slideshow