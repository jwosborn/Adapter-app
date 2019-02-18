import React from 'react';
import './App.css'; 

const Negative = ({ishidden, Devicelist}) => {
  if(ishidden === false){ 
  return (  
       <div id="adapter">
         <h1>You'll need ... Adapter</h1>
           <h2>Contact Classroom Technology at 502-897-4007 or email us by clicking <a href="mailto:classroomtechnology@sbts.edu">here</a></h2>
       </div>
    )
  } return null
}


export default Negative