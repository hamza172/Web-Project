import React from 'react';
import axios from "axios";
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const divCss={
    margin:'50px',
    marginRight:'250px',
    marginLeft:'250px'
}
const linkCss={
    color:'black',
    marginLeft:'20px'
}

function SignUp(){
    const [email,setEmail]  = React.useState("");
    const [psw,setPsw]  = React.useState("");
    const [userName,setUserName]  = React.useState("");

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

  const handleSubmit= (e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
     
    }

    setValidated(true);
    axios
      .post("http://localhost:8080/user/create_user/"+userName+"/"+email+"/"+psw)
      .then(res => {
        window.location.href = "/login";
      });
    
   
  }
    return <div style={divCss}>
        <h1>Sign Up</h1>
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
      <Form.Label>Password</Form.Label>
      <Form.Control required type="password" placeholder="Password" value={psw} onChange={handlePsw} />
    </Form.Group>
   

    <Button variant="primary"   type="submit"> Sign In </Button>
                <Link  style={linkCss} to='./login'>Sign In</Link>
  <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
  </Form>
    </div>
}
export default SignUp