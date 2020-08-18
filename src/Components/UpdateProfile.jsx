import React from 'react';
import axios from "axios";
import {Form,Button} from 'react-bootstrap';
import {useRouteMatch} from "react-router-dom";
const bgCss={
    paddingTop:'30px',
    paddingLeft:'200px',
    paddingRight:'200px'
  }
  
function UpdateProfile(){
  let match = useRouteMatch();
  const artistId = match.params.artistId;
    const [email,setEmail]  = React.useState("");
    const [psw,setPsw]  = React.useState("");
    const [userName,setUserName]  = React.useState("");
    var user;

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleUserName=(e)=>{
        setUserName(e.target.value);
    }
    const handlePsw=(e)=>{
        setPsw(e.target.value);
    }

    const [validated, setValidated] = React.useState(false);
    const loadUpdateForm= (e)=>{
      
      axios
        .get("http://localhost:8080/users/getSingleUser/"+artistId)
        .then(res => {
          user = res.data[0];
          setUserName(user.artistName);
          setEmail(user.email);
        });
      
     
    }

  const handleSubmit= (e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    axios
      .put("http://localhost:8080/user/update_user/"+artistId+"/"+userName+"/"+email+"/"+psw)
      .then(res => {
        window.location.href = "/artist/"+artistId+"/"+userName;
      });
    
   
  }
    return<div style={bgCss}><center><h3>Update</h3>
    {loadUpdateForm()}</center>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group  controlId="formGroupEmail">
      <Form.Label>User Name</Form.Label>
      <Form.Control required type="text" placeholder="User Name" value={userName} onChange={handleUserName}/>
    </Form.Group>
    <Form.Group  controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control required type="email" placeholder="Enter email"  value ={email} onChange={handleEmail}/>
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>New Password</Form.Label>
      <Form.Control required type="password" placeholder="Password" value={psw} onChange={handlePsw} />
    </Form.Group>
   

    <Button variant="primary"   type="submit"> Update</Button>
  <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
  </Form>
  </div>
}
export default UpdateProfile