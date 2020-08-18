import React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import axios from "axios";
import AddPatient from './AddPatients';
import SideBar from './SideBar';
import UpdateProfile from './UpdateProfile';
import DeleteUserPopOver from './DeleteUserPopOver';
import AllPatients from './AllPatients'
const bgCss={
  paddingTop:'30px',
  paddingLeft:'200px',
}



function DoctorPage(){
    let match = useRouteMatch();
   const artistName = match.params.artistName;
   const artistId = match.params.artistId;
   const [art, setArt] = React.useState([]);
   function loadArt(){
    axios
    .get("http://localhost:8080/painting/")
    .then(res => {
      setArt(res.data);
    });
   }
    
    return <div style={bgCss}>
        <SideBar/>
        
<center><h1>Welcome Dr.{artistName}! </h1></center>
   

      <Switch>
      <Route path={`${match.path}/AllPatients`}>
          <AllPatients/>
        </Route>
        <Route path={`${match.path}/addPatients`}>
          <AddPatient/>
        </Route>
        <Route path={`${match.path}/updateProfile`}>
          <UpdateProfile/>
        </Route>
        <Route path={`${match.path}/suredelete`}>
          <DeleteUserPopOver/>
        </Route>
      </Switch>
    </div>
}
export default DoctorPage