import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./style.css";
import Music from '../components/Subcomponents/Music/index'
import Tour from '../components/Subcomponents/Tour/index'
import BandPhoto from "../components/Subcomponents/Bandphoto";


function Index() {
 
  
  
  return (


    <div>
      <div className="mt-5">
        <div className="p-5">
        <BandPhoto/>
         <Tour/>
         <br/>
         <Music/>
        </div>
      </div>
    </div>








  );
}

export default Index;
