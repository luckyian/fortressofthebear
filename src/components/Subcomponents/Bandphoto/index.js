import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";


function BandPhoto() {



    return (
        <Card className="aboutBack">
            <Card.Body>
                
                <div >
                    <Card.Img src=".\assets\fortressofthebear.jpg"  alt="Band Photo"></Card.Img>
                </div>
                <Card className="aboutBack">
                <div className="video-responsive">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/feE8BJPxc1c" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                </iframe>
        </div>
        </Card>
            </Card.Body>
        </Card>
    )
}
export default BandPhoto;