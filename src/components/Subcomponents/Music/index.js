import React, {Link} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function Music() {



    return (
        <Card className="aboutBack">
        <Card.Body>
          <Card.Title><h1><u>Music</u></h1></Card.Title>
          <div>
         <p>
           
         <br></br>
         <h4><a href={"https://youtu.be/Tks_1uCO5kA"}>Song About Rick and Morty </a></h4>
         <br></br>
         <h4><a href={"https://youtu.be/PxUjErnINU4"}>Willy's Wonderland</a></h4>
         <br></br>
         <h4><a href={"https://youtu.be/4YQh_7LYg-g"}>Flaming Lips Song</a></h4>
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