import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Music() {



    return (
        <Card className="aboutBack">
        <Card.Body>
          <Card.Title><h1><u>Music</u></h1></Card.Title>
          <div >
            <Card.Img src=".\assets\cambodianrockband.jpg" className="p-2" alt="Music"></Card.Img>
          </div>
          <div>
         <p>
           
         <br></br>
         <h4>Song 1</h4>
         <br></br>
         <h4>Song 2</h4>
         <br></br>
         <h4>Song 3</h4>
         </p>
         <br></br>
         
         <p>
              <h3>Available on iTunes</h3>
              
             

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Music;