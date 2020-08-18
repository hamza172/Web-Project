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
function SignIn(){
    const [email,setEmail]  = React.useState("");
    const [psw,setPsw]  = React.useState("");


    const handleEmail=(e)=>{
        setEmail(e.target.value);
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
      .get("http://localhost:8080/users/signin/"+email+"/"+psw)
      .then(res => {
            window.location.href = "/Doctor/"+res.data[0]._id+"/"+res.data[0].artistName;
      });
    
    
    
   
  }
    return <div style={divCss}>
        <h1>Sign In</h1>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group  controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control required type="email" placeholder="Enter email"  value ={email} onChange={handleEmail}/>
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control required type="password" placeholder="Password" value={psw} onChange={handlePsw} />
    </Form.Group>
   

    <Button variant="primary"   type="submit"> Sign In</Button>
                <Link style={linkCss} to='./signup'>Sign Up</Link>
  <Form.Control.Feedback type="invalid">
              User not found!
            </Form.Control.Feedback>
  </Form>
  </div>
}
export default SignIn