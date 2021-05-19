import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import BandPhoto from "../components/Subcomponents/Bandphoto";
import Card from 'react-bootstrap/Card';


function Contact() {
 
  
  
  return (


    <div>
      <div className="mt-5">
          <h1 className="text2">Contact</h1>
      <BandPhoto/>
        <div className="p-5">
        <Card className="aboutBack">
        <Card.Body className="text">
            <h3>Merchandise:</h3>
            <h4>merch@fortressofthebear.com</h4>
            <br/>
            <h3>Touring/Booking:</h3>
            <h4>booking@fortressofthebear.com</h4>
            <br/>
            <h3>All Other Inquiries:</h3>
            <h4>info@fortressofthebear.com</h4>
        </Card.Body>
      </Card>
        </div>
      </div>
    </div>








  );
}

export default Contact;