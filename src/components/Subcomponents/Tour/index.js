import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Tour() {



    return (
        <Card className="aboutBack">
        <Card.Body>
          <Card.Title><h1><u>Tom Stegeman</u></h1></Card.Title>
          <div className="float-left" >
            <Card.Img src=".\assets\handyman.jpg" className="p-2" alt="Tom"></Card.Img>
          </div>
          <div>
         <p>
           Hi! I'm Tom and I'm a handyman, do construction and provide landscape services.
         <br></br>
         <br></br>
         I have worked building and maintaining various sctructures over the last 15 years.
         <br></br>
         <br></br>
         Growing up on a farm taught me the skills I use and honed my work-ethic.  I work hard, and I can work hard for
         you on any projects you need done or repairs to existing plan or design.
         <br></br>
         <br></br>
         More words to describe yourself here.
         </p>
         <br></br>
         <br></br>
         <p>
              <h3><u>Contact Info</u></h3>
              <h4>Email: ivegottaguyseattle@gmail.com</h4>
              <h4>Phone: 206-739-6775</h4>
             

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Tour;