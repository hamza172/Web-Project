import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
const whiteCss={
    color:'white'
}
function Patient(props){
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.src}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <h5>Price: {props.price}</h5>
        {props.desc}
      </Card.Text>
      
      <Button variant="primary"><Link style={whiteCss} to={"/"}>Delete</Link></Button>
    </Card.Body>
  </Card>
}
export default Patient