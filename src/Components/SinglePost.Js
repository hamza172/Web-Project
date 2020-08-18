import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {useRouteMatch} from "react-router-dom";
function SinglePost(props){
    let match = useRouteMatch();
    const { params: { title } } = match;
    return<div>
        <Container>
            <Row>
                <Col><image src='https://dummyimage.com/vga'></image></Col>
                <Col md="auto">
                    <h2>{title}</h2>
                    <h3>Patient Name : lorem Ipsum</h3> 
                    

                </Col>
   
             </Row>
        </Container>
        
    </div>
}
export default SinglePost