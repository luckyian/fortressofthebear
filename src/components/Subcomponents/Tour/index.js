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
            <Card.Img src=".\assets\ontour2.png" className="p-2" alt="Touring"></Card.Img>
          </div>
          <div>
         <p>
         <h3>Tour Dates:</h3>
         <br></br>
         <h4>September 4th, 2021 @ 7pm</h4>
         <h4>Eagle Haven Winery</h4>
         <h4>
          <a href="http://www.eaglehavenwinery.com/">Eagle Haven Winery Info</a>
         </h4>
         <br></br>
         <br></br>
         <br></br>
         <h4>September 24th, 2021 @ 8pm</h4>
         <h4>Conor Byrne Tavern</h4>
         <h4>
           <a href="https://m.facebook.com/events/252791876484339">Facebook Event Info</a>
          </h4>
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