import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'; 
import  BestSignleCard from './BestSignleCard';
const containCss={
  marginTop:'50px',
  marginBottom :'90px'
}
function BestCards(props){
    return <Container style={containCss}>
      <Row>
        <Col>
        <BestSignleCard
          src={props.src1}
          title={props.title1}
          desc={props.desc1}
        />
        </Col>
        <Col>
        <BestSignleCard
         src={props.src2}
         title={props.title2}
         desc={props.desc2}
        />
        </Col>
        <Col>
        <BestSignleCard
          src={props.src3}
          title={props.title3}
          desc={props.desc3}
        />
        </Col>
      </Row>
    </Container>
}
export default BestCards