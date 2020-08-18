
import React from 'react';
import axios from "axios";
import {useRouteMatch} from "react-router-dom";
import {Container,Row,Col,Button} from 'react-bootstrap';
const redCss={
  color:'red'
}

function DeleteUserPopOver() {
  let match = useRouteMatch();
  const urlArtistName = match.params.artistName;
  const artistId = match.params.artistId;
  const handleSubmit= ()=>{
 
    axios
      .delete("http://localhost:8080/user/delete_user/:id"+artistId)
      .then(res => {
        console.log(res);
        window.location.href = "/signup/";
      });
    
   
  }
  const moveBack= ()=>{
    window.location.href = "/artist/"+artistId+"/"+urlArtistName;
  }


  return (
    <> 
    <center><h3 style={redCss}>Are you sure you want to delete your account?</h3></center>
   <Container>
     <Row className="justify-content-md-center">
       <Col xs lg="1">
      <center><Button onClick={handleSubmit}>Yes</Button></center> 
       </Col>
       <Col md="auto">
          <Button onClick={moveBack}>Cancel</Button>
       </Col>
     </Row>
   </Container>
      
    </>
  );
}
export default DeleteUserPopOver