import React from 'react';
import {Link, useRouteMatch } from "react-router-dom";
const bgCss={
  height: '100%',
  width: '160px',
  position: 'fixed',
  zIndex: '1',
  top: '0',
  left:'0' ,
  backgroundColor: '#140e40',
  overflowX: 'hidden',
  paddingTop: '150px',
  paddingLeft:'30px'
}
const linkCss={
  color:'white'
}

function SideBar(){
  let match = useRouteMatch();
  return <div style={bgCss}>
    <Link to={`${match.url}/AllPatients`} style={linkCss}>Patients</Link><br/>
    <Link to={`${match.url}/addPatients`} style={linkCss}>Add Patient</Link><br/>
    <Link to={`${match.url}/updateProfile`} style={linkCss}>Update Profile</Link><br/>
    <Link to={`${match.url}/suredelete`} style={linkCss}>Delete Account</Link><br/>
  </div>
}
export default SideBar