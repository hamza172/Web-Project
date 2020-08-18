import React from 'react';
import axios from "axios";
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const linkCss={
    color:'black',
    marginLeft:'20px'
}
function SignForm({addUserNameFlag}){
    const [validated, setValidated] = React.useState(false);

  const handleSubmit= (e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
     
    }

    setValidated(true);
    axios
      .post("")
      .then(res => {
        console.log(res.data);
      });
    
   
  }
    return<Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group  controlId="userName">
         <Form.Control required type="text" placeholder={addUserNameFlag} />
      </Form.Group>
    <Form.Group  controlId="formGroupEmail">
            
      <Form.Control required type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
      <Form.Control required type="password" placeholder="Password" />
    </Form.Group>
   

    <Button variant="primary"   type="submit"> Submit</Button>
                <Link  style={linkCss} to='./signup'>Sign Up</Link>
  <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
  </Form>
}
export default SignForm