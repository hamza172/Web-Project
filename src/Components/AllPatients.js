import React from 'react';
import SingleAllPatient from './SingleAllPatient';
import axios from "axios";

const bgCss={
  paddingTop:'30px',
  paddingLeft:'20px',
  paddingRight:'20px'
}



function AllPatients(){
   
   const [art, setArt] = React.useState([]);
   function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));    bytes.forEach((b) => binary += String.fromCharCode(b));    return window.btoa(binary);
    }
   function loadArt(){
    axios
    .get("http://localhost:8080/painting/")
    .then(res => {
      setArt(res.data);
    });
   }
    var base64Flag = 'data:image/jpeg;base64,';

    return <div style={bgCss}>

    {loadArt()}
    {art.map(a => (
        <SingleAllPatient
        imgSrc = {base64Flag+arrayBufferToBase64(a.img.data.data)}
        artist={a.artistName}
        title={a.paintingTitle}
        price={a.price}
        desc ={a.description}
        />
      ))}
    </div>
}
export default AllPatients