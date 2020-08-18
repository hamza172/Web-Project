import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
const imgCss={
    borderRadius: '50px'
}
const bgCss={
  margin:'20px',
  padding:'20px',
  backgroundColor: 'white',
  boxShadow: '10px 10px 100px lightgrey'

}
const textcss={
  color:'black'
}
function HomePageCard({imgSrc,Name,someText}){
    return <Container style={bgCss}>
    <Row>
      <Col xs lg="3"> <img src={imgSrc} style={imgCss}  alt='no img' width='100px'  /></Col>
      <Col md="auto">
        <h2 style={textcss}>{Name}</h2>
        <p style={textcss}>{someText}</p>
      </Col>
    </Row>
  </Container>
}
export default HomePageCard