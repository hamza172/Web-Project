import React from 'react';
import {useRouteMatch} from "react-router-dom";
import axios from "axios";

const bgCss={
  paddingTop:'30px',
  paddingLeft:'200px'
}



function ArtistPage(){
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
       {loadArt()}
    {art.map(a => (
        <ArtWork 
        key ={a._id}
        title={a.paintingTitle}
        price={a.price}
        desc ={a.description}

        />
      ))}

   </div>
    
}
export default ArtistPage