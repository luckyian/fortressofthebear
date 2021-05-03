import React from "react";
import Project from "../components/Project";
import data from "../data/projects.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function Projects() {


  return (
    
    <Container>
      <Card className="portfolioCard">
        

          <Project _id={data.projects[0]._id}
            cardTitle={data.projects[0].cardTitle}
            cardText={data.projects[0].cardText}
            src={data.projects[0].src}
            alt={data.projects[0].alt}
            
          />
        
      </Card>
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[1]._id}
            cardTitle={data.projects[1].cardTitle}
            cardText={data.projects[1].cardText}
            src={data.projects[1].src}
            alt={data.projects[1].alt}
    
          />
        
      </Card >
      
      <Card className="portfolioCard">
        
          <Project _id={data.projects[2]._id}
            cardTitle={data.projects[2].cardTitle}
            cardText={data.projects[2].cardText}
            src={data.projects[2].src}
            alt={data.projects[2].alt}
           
          />
        
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

export default Projects;
