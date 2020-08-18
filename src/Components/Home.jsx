import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import MainPageSlider from './MainPageSlider';
import HomePageCard from './HomePageCard';
import BestCards from './BestCards';

const topArtistHeadingCss={
  fontWeight: 'bold',
marginLeft:'40%',
paddingTop: '70px',
color:'black'
}

const bgGreyCss={
 backgroundColor: '#eeeeee',
}
const colorBlackCss={
  paddingTop: '70px',
  textAlign:"center",
  color:'#070034',
  fontWeight: 'bold'
}

const text2Css={
  paddingTop: '10px',
  textAlign:'center',
  color:'#070034',
  fontWeight: 'bold'
}



function Home (){
    return <div className="App">
      
    <MainPageSlider></MainPageSlider>
  
  <Container>
    <Row>
      <center><h1 style={colorBlackCss}>PRODUCT FEATURES</h1></center>
      <h2 style={text2Css}>A technology by NASA for the astrounots working in spae shettles</h2>
      
      <BestCards
       src1='https://healthmetryx.com/wp-content/uploads/2020/07/Clarinet-Mask-and-Smartphone-App.png'
       title1='REAL-TIME AIR HAZARD EXPOSURE MONITORING'
       desc1='Healthmetryx provides a wearable Bluetooth monitor that identifies exposure to workplace air hazards and reports their risk via mobile app.'
       src2='https://healthmetryx.com/wp-content/uploads/2020/07/Untitled-1.jpg'
       title2='EARLY DETECTION TESTING FOR WORKERS ON-DEMAND'
       desc2='Early detection is always better than waiting in order to successfully mitigate risk.'
       src3='https://healthmetryx.com/wp-content/uploads/2020/07/Clarinet-Mask-and-Smartphone-App.png'
       title3='SMARTPHONE, DESKTOP, AND TABLET COMPATIBLE'
       desc3='Indicators of thousands of workplace air hazards with nanoscale detection resolution of 1 micron'
      />
    </Row>
  </Container>
  <div style={bgGreyCss} >
    <Container >
    <Row><h1 style={topArtistHeadingCss}>Developers</h1></Row>
      <Row>
        <Col>
              <HomePageCard 
          imgSrc="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/89257088_2558883807555311_7405631178700488704_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=UwBUbE9GYp8AX8IqoyX&_nc_ht=scontent.flhe5-1.fna&oh=8966d5f803a93a175688690c9fdd122b&oe=5F5D5FDD"
          Name="Faizan Waheed"
          someText="FA17-BCS-103"
          />
        </Col>
        <Col>
              <HomePageCard 
          imgSrc="https://scontent.flhe5-1.fna.fbcdn.net/v/t1.0-9/65106657_2807015722673053_8233321108066009088_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=Ny4arAThXcIAX92zpB1&_nc_ht=scontent.flhe5-1.fna&oh=5de77db05c4e6f91b18187b4a20901fe&oe=5F5E2C01"
          Name="Hamza Muazzam"
          someText="FA17-BCS-027"
          />
        </Col>

      </Row>
    
    </Container>
    </div>
  </div>
}
export default Home