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
         <h3>Seattle - 8/12 8pm - The Crocodile</h3>
         <br></br>
         <h3>Portland - 8/13 8pm - The Rose Theater</h3>
         <br></br>
           <h3>Sacramento - 8/15 9pm - Getty's Bar</h3>
         <br></br>
           <h3>Oakland - 8/16 9pm - Shaker's Saloon</h3>
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