import React from 'react';
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
function BestSignleCard(props){
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.src}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        <h2>Artist Name: {props.artist}</h2>
        {props.desc}
      </Card.Text>
    </Card.Body>
  </Card>
}
export default BestSignleCard