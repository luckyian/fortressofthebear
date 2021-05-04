import React from "react";
import Project from "../components/Project";
import data from "../data/projects.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Videos() {


  return (

    <Container>
      <Card>


        <div className="video-responsive">
          <iframe width="1200" height="800" 
          src="https://www.youtube.com/embed/Tks_1uCO5kA" 
          title="YouTube video player" 
          frameborder="10px" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
        </div>

      </Card>

      <Card className="video-responsive">

      <iframe width="1200" 
      height="800" 
      src="https://www.youtube.com/embed/PxUjErnINU4" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>

      </Card >

      <Card className="video-responsive">

      <iframe 
      width="1200" 
      height="800" 
      src="https://www.youtube.com/embed/4YQh_7LYg-g" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>
      </Card >

      {/* <Card className="portfolioCard">
        
          <Project _id={data.projects[3]._id}
            cardTitle={data.projects[3].cardTitle}
            cardText={data.projects[3].cardText}
            src={data.projects[3].src}
            alt={data.projects[3].alt}
            github={data.projects[3].github}
            project={data.projects[3].project}
          />
        
      </Card >
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[4]._id}
            cardTitle={data.projects[4].cardTitle}
            cardText={data.projects[4].cardText}
            src={data.projects[4].src}
            alt={data.projects[4].alt}
            github={data.projects[4].github}
            project={data.projects[4].project}
          />
        
      </Card >
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[5]._id}
            cardTitle={data.projects[5].cardTitle}
            cardText={data.projects[5].cardText}
            src={data.projects[5].src}
            alt={data.projects[5].alt}
            github={data.projects[5].github}
            project={data.projects[5].project}
          />
        
      </Card > */}

    </Container >

  );

}

export default Videos;
