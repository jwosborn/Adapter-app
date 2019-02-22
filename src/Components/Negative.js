import React from 'react';

const Negative = ({ishidden, Devicelist, deviceTarget, getDeviceAdapter, needsVGAAdapter, needsHDMIAdapter}) => {



// Dynamic Link Population currently returns Undefined
const adapterLinkHDMI = Devicelist.find(x => x.name === deviceTarget).linkHDMI;
const adapterLinkVGA = Devicelist.find(x => x.name === deviceTarget).linkVGA;
const displayLinkHDMI =  <h2>You can buy an HDMI adapter by clicking <a  rel="noopener noreferrer" target="_blank" href={adapterLinkHDMI} >here</a></h2>
const displayLinkVGA =  <h2>You can buy an VGA adapter by clicking <a  rel="noopener noreferrer" target="_blank" href={adapterLinkVGA} >here</a></h2>
const getAdapterLink = () => {
      if (needsHDMIAdapter === true && needsVGAAdapter === false) {
        return displayLinkHDMI
      } else if (needsHDMIAdapter === false && needsVGAAdapter === true) {
        return displayLinkVGA
      } else if (needsHDMIAdapter === true && needsVGAAdapter === true) {
        return (
          displayLinkHDMI + '<br />'+ displayLinkVGA
        )
      }
    
  }


  if(ishidden === false){ 
  return (  
       <div id="adapter">
         <h1>
            You'll need a  
            <br/>
                {
                  getDeviceAdapter()
                } 
            <br/>

            Adapter
         </h1>
            <h2>Contact Classroom Technology at 502-897-4007 or email us by clicking <a href="mailto:classroomtechnology@sbts.edu">here</a></h2>
            {
             console.log(getAdapterLink())
            }

       </div>
    )
  } return null
}


export default Negative