import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const bgCss={
  margin:'20px',
  padding:'20px',
  backgroundColor: 'white',
  boxShadow: '10px 10px 100px lightgrey'

}
const textcss={
  color:'black'
}
function SingleAllPatient({imgSrc,artist,price,title,desc}){
    return <Container style={bgCss}>
    <Row>
      <Col xs lg="3"> <img   alt='No img' width='100px' height /></Col>
      <Col md="auto">
      <h1 style={textcss}>{title}</h1>
        <h3 style={textcss}>{artist}</h3>
        <h6 style={textcss}>{price}Rs</h6>
<p style={textcss}>{desc}</p>
      </Col>
    </Row>
  </Container>
}
export default SingleAllPatient