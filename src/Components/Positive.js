import React from 'react';
import '../App.css'; 

const Positive = ({ishidden}) => {
  if(ishidden === false){
     return ( 
        <div id="no-adapter">
          <h1>You're All Set!</h1>
        </div> 
  )} return null; 
} 

export default Positive 