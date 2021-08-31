import React from 'react'
import { ProgressBar, Step } from "react-step-progress-bar";
import '../styles/ProgressBar.css'
function TrackingBar(props) {
    
  // const {steps} = props

  // const steps = [
  //   {
  //     status: "created"
  //   },
  //   {
  //     status: "pendingApproval"
  //   },
  //   {
  //     status: "approved"
  //   },
   
  //   {
  //     status: "complete"
  //   }
  // ];
  
  // const transfer = {
  //   status: "approved" // change transfer status to progress bar
  // };


  // const getStepPosition = (transferStatus) => {
  //   return steps.findIndex(({ status }) => status === transferStatus) + 1;
  // };

  return (
    <>
      {/* <div style={{ margin: 50 }}>
        <ProgressBar
          width={750}
          percent={100 * (getStepPosition(transfer.status) / steps.length)}
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
        >
          {steps.map((step, index, arr) => {
            return (
              <Step
                position={100 * (index / arr.length)}
                transition="scale"
                children={({ accomplished }) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      color: "white",
                      backgroundColor: accomplished ? "green" : "gray"
                    }}
                  >
                    {index + 1}
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      </div> */}
      {/* <div className="container">
        <ul className="progressbar">
          <li className="active">Step 1</li>
          <li className="active">Step 2 </li>
          <li className="active">Step 3</li>
          <li>Step 4</li>
        </ul>
      </div> */}

      <div className="container">
        <ul className="progressbar">
          <li className="active">Start</li>
          <li className="active">First Step</li>
          <li className="active">Middle Stage</li>
          <li>Finish</li>
        </ul>
      </div>
    </>
  );
}

export default TrackingBar
