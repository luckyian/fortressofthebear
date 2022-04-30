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
            <Card.Img src=".\assets\Tour2022.jpg" className="p-2" alt="Touring"></Card.Img>
          </div>
          <div>
         <p>

           {/* <h3>TBD</h3> */}
           {/* <h3>Check Back Soon for Upcoming Shows</h3> */}
         <h3>Tour Dates:</h3>
         <br></br>
         <h4>July 14th, 2022 @ 4pm</h4>
         <h4>
          <a href="https://ptmainstreet.org/event/concerts-on-the-dock-2022-07-14/">Concerts on the Dock</a>
         </h4>
         <h4>Port Townsend, WA</h4>
         
         <br></br>
         <br></br>
         <br></br>
         <h4>July 15th, 2022</h4>
         <h4>
         <a href="https://www.facebook.com/PTAnchor/">The Archor Port</a>
         </h4>
         <h4>Port Townsend, WA</h4>
         {/* <h4>
           <a href="https://concrete-wa.com/events/fly-in/">Concrete Fly In</a>
          </h4> */}
         <br></br>
         <br></br>
         <br></br>
         <h4>July 16th, 2022</h4>
         <h4>
           <a href="https://concrete-wa.com/events/fly-in/">Concrete Fly In</a>
          </h4>
         <h4>Concrete, WA</h4>
         
         <br></br>
         <br></br>
         <br></br>
         <h4>August 27th, 2022</h4>
         <h4>
         <a href="https://highdiveseattle.com/">High Dive</a>
         </h4>
         <h4>Seattle, WA</h4>
         <h4>
          {/* <a href="https://highdiveseattle.com/e/calendar/">Concerts on the Dock</a> */}
         </h4>
         <br></br>
         <br></br>
         <br></br>
         <h4>Semptember 3th, 2022 @ 7pm</h4>
         <h4>
          <a href="http://www.eaglehavenwinery.com/summer-concerts.html">Summer Concerts</a>
         </h4>
         
         <h>Outdoor Pavilion</h>
         <h4>
         <a href="http://www.eaglehavenwinery.com/">Eagle Haven Winery</a>
         </h4>
         <h4>Sedro-Woolley, WA</h4>
         
        
              
             

          </p>

        </div>

        </Card.Body>
      </Card>
  )
}
export default Tour;