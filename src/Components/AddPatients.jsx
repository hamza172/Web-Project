import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from "axios";
import {useRouteMatch} from "react-router-dom";
const divCss = {
  margin: '50px',
  marginRight: '250px',
  marginLeft: '250px'
}
const H1Css = {
  marginBottom: '50px'
}


function AddPatient(props) {
  let match = useRouteMatch();
  const urlArtistName = match.params.artistName;
  const artistId = match.params.artistId;


  const [artTitle, setArtTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [objType, setObjType] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [img, setImg] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();

    }
    setValidated(true);
   ///painting/upload_product/:objType/:artistName/:objTitle/:objPrice/:objDesc/:height/:width/:genre 
    axios
    // '/painting/upload_product/:objType/:artistName/:objTitle/:objPrice/:objDesc/:height/:width/:genre/:tags'
      .post("http://localhost:8080/painting/upload_product/"+objType+"/"+urlArtistName+"/"+artTitle+"/"+
      price+"/"+description+"/"+height+"/"+width+"/"+genre+"/"+tags)
      .then(res => {
        window.location.href = "/artist/"+artistId+"/"+urlArtistName;
      });
  }

  
  const handleArtTitle = (e) => {
    setArtTitle(e.target.value);
  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handlePrice = (e) => {
    setPrice(e.target.value);
  }
  const handleObjType = (e) => {
    setObjType(e.target.value);
  }
  const handleTags = (e) => {
    setTags(e.target.value);
  }

  const handleGenre = (e) => {
    setGenre(e.target.value);
  }
  const handleWidth = (e) => {
    setWidth(e.target.value);
  }

  const handleHeight = (e) => {
    setHeight(e.target.value);
  }
  const handleImg = (e) => {
    setImg(e.target.value);
    console.log(img);
  }


  return <div style={divCss}>
    <center><h1 style={H1Css}>Post your Craft</h1></center>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
        <Form.Group  controlId="artTitle" >
          <Form.Control required placeholder="Artwork Title" value={artTitle} onChange={handleArtTitle} />
        </Form.Group>
     
      <Form.Row> <Form.Group as={Col} controlId="price">
        <Form.Control required placeholder="Price" value={price} onChange={handlePrice} />
      </Form.Group>
        <Form.Group as={Col} controlId="description">
          <Form.Control required placeholder="Description" value={description} onChange={handleDescription} />
        </Form.Group>
      </Form.Row>


      <Form.Group controlId="tags">
        <Form.Control required placeholder="Comma seperated tags" value={tags} onChange={handleTags} />
      </Form.Group>


      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Control required as="select" value={objType} onChange={handleObjType} >
            <option>Object Type...</option>
            <option>Painting</option>
            <option>Sculpture</option>
            <option>Ceramics</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Control required as="select" value={genre} onChange={handleGenre} >
            <option>Genre...</option>
            <option>None</option>
            <option>Calligraphy</option>
            <option>Folk</option>
            <option>Abstract</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control required type='number' placeholder="Width" value={width} onChange={handleWidth} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Control required type='number' placeholder="Height" value={height} onChange={handleHeight} />
        </Form.Group>
      </Form.Row>
      <Form.Group id="formGridCheckbox">
        <Form.Check required type="file" value={img} onChange={handleImg} />
      </Form.Group>

      <Button variant="primary" type="submit"> Submit</Button>
      <Form.Control.Feedback type="invalid">
        Please choose a username.
            </Form.Control.Feedback>
    </Form>

  </div>
}



export default AddPatient