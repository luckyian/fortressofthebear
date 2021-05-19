import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Tour() {



    return (
        <Card className="aboutBack">
        <Card.Body className="text">
          {/* <Card.Title><h1><u>Tour</u></h1></Card.Title> */}
          <div >
            <Card.Img src=".\assets\ontour.png" className="p-2" alt="Touring"></Card.Img>
          </div>
          <div>
         <p>
         <h3>Tour Dates TBA</h3>
         <h4>The band will resume touring when the shows are safe for everyone</h4>
         </p>
         <br></br>
         <br></br>
         <p>
              
             

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Tour;