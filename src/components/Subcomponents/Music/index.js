import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Music() {



  return (
    <Card className="aboutBack">
      <Card.Body className="text">
        <Card.Title><h1><u>Music</u></h1></Card.Title>
        <div>
          <iframe src="https://open.spotify.com/embed/artist/68nQzX54fhdo5YPPiseAJA"
            width="100%"
            height="400"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media">

          </iframe>
          <h3>Available on iTunes</h3>





        </div>

      </Card.Body>
    </Card>
  )
}
export default Music;