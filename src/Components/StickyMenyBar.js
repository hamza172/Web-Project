import React from 'react'
import  {Navbar}  from 'react-bootstrap';
import  {Nav}  from 'react-bootstrap';
import  {Button}  from 'react-bootstrap';
import {Link} from 'react-router-dom';
const titleCss={
  marginLeft: "10px",
  marginRight: "50px",
  color:"#ffffff",
  fontSize:"32px",
  textDecoration: "none"

}
const linkCss={
  color:"rgb(64 64 64)", 
  textDecoration: "none",
  marginRight:"15px"
}
const whiteLinkCss={
  color:'#fff',
}
const buttonCssHeader={
  backgroundColor: "#00ADEF",
  paddingLeft: '30px',
  paddingRight: '30px',
  borderRadius: '25px',
}

const StickyMenyBar = () =>{
    return <Navbar bg="white"   variant="dark" sticky="top" >
        
    <Link style={titleCss} to="/"> <img src="https://healthmetryx.com/wp-content/uploads/2020/07/Health-Metryx-01-300x75.png" alt="" width="250px"></img></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Link style={linkCss} to="/">Home</Link>
       
        <Button style={buttonCssHeader} variant="outline-light"><Link style={whiteLinkCss} to='/login'>Sign In</Link></Button>
    </Navbar.Collapse>
  </Navbar>
}
export default StickyMenyBar