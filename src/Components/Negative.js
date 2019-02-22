import React from 'react';

const Negative = ({ishidden, Devicelist, deviceTarget, getDeviceAdapter}) => {
  



    const adapterLinkHDMI = Devicelist.find(x => x.name === deviceTarget).linkHDMI;
   // const adapterLinkVGA = Devicelist.find(x => x.name === deviceTarget).linkVGA;

  if(ishidden === false){ 
  return (  
       <div id="adapter">
         <h1>You'll need a <br/>
          {
            getDeviceAdapter
          } <br/>
         Adapter</h1>
           <h2>Contact Classroom Technology at 502-897-4007 or email us by clicking <a href="mailto:classroomtechnology@sbts.edu">here</a></h2>
            <h2>You can also buy one by clicking <a  rel="noopener noreferrer" target="_blank" href={adapterLinkHDMI} >here</a></h2>
       </div>
    )
  } return null
}


export default Negative