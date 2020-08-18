import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StickyMenyBar from './Components/StickyMenyBar';
import Home from './Components/Home.jsx';
import DoctorPage from './Components/DoctorPage.jsx';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import SinglePost from './Components/SinglePost.Js';
import AllPatients from './Components/AllPatients';

function App() {
  return (
    <Router>
        <div>
        <StickyMenyBar/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/Doctor/:artistId/:artistName">
               <DoctorPage/>
            </Route>
            <Route path="/artist/">
            <SignIn/>
            </Route>
            <Route path="/login">
               <SignIn/>
            </Route>
            <Route path="/signup">
               <SignUp/>
            </Route>
            <Route path="/post/:title">
               <SinglePost/>
            </Route>

            <Route path="/">
               <Home/>
             </Route>
          </Switch>
        </div>
        
  </Router>
);
}



export default App;
