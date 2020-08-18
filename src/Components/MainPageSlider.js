import React from 'react';
import {Carousel} from 'react-bootstrap';
import MainPageSliderCard from './MainPageSliderCard';
const MainPageSlider = () =>{
 return    <Carousel controls="false"> 
  <Carousel.Item>
    <img
       className="d-block w-100"
       src="https://healthmetryx.com/wp-content/uploads/2020/07/bigstock-Friends-Group-Drinking-Cappucc-333328546.jpg"
       alt="First slide"
       width="100%"
       height="550px"
       style={{objectFit:"cover",}}
    />
    <Carousel.Caption>
            
           <MainPageSliderCard
                h1="A Bluetooth Monitor for Hazardous Air Exposure in the Workplace"
                p="HEALTHMETRYX"
                button="Learn More"
            /> 
          
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://healthmetryx.com/wp-content/uploads/2020/07/bigstock-Portrait-of-happy-family-looki-291451024.jpg"
      alt="Second slide"
      width="100%"
       height="550px"
       style={{objectFit:"cover",}}
    />

    <Carousel.Caption>
    <MainPageSliderCard
                h1="Healthmetryx sells a Bluetooth monitor that identifies and reports exposure to airborne hazards via mobile app in real-time."
                p="ABOUT HEALTHMETRYX"
                button="About Us"
            /> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://healthmetryx.com/wp-content/uploads/2020/07/bigstock-Happy-Family-Active-Young-Wo-364999651-1024x576.jpg"
      alt="Third slide"
      width="100%"
       height="550px"
       style={{objectFit:"cover",}}
    />

    <Carousel.Caption>
    <MainPageSliderCard
                h1="Workers have a right to know what they inhale into their bodies while on the job. "
                p="The Air is not empty"
                button="Research"
            /> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
}
export default MainPageSlider