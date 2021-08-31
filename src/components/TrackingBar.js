import React from 'react'
import '../styles/ProgressBar.css'
function TrackingBar(props) {
    
  const stages = {
    TICKET_CREATED:"تم انشاء الشحنة",
    PACKAGE_RECEIVED:"تم استلام الشحنة من التاجر",
    OUT_FOR_DELIVERY:"الشحنة خرجت للتسليم",
    DELIVERED:"تم التسليم",
    
  }

  const cancelledStages = {
    TICKET_CREATED:"تم انشاء الشحنة",
    PACKAGE_RECEIVED:"تم استلام الشحنة من التاجر",
    DELIVERED_TO_SENDER:"تم الغاء الشحنة من التاجر",
    // OUT_FOR_DELIVERY:"الشحنة خرجت للتسليم",
    
  }
  
  let {steps} = props

  steps = steps && Object.keys(steps).map(key => steps[key].state)

  const successfulDelivery = steps && steps.length && steps[steps.length -1] !==  'DELIVERED_TO_SENDER'

  return (
    <div className="container">
      { successfulDelivery ? 
        <ul className="progressbar">
        {steps && steps.length && Object.keys(stages).map((stage) => (
          <li
            className={steps.indexOf(stage) >= 0 ? 'active' : ''}
            key={stage}
          >
              {stages[stage]}
            </li>
        ))}
      </ul>
      :
      <ul className="progressbar">
        {steps && steps.length && Object.keys(cancelledStages).map((stage) => (
          <li
            className={steps.indexOf(stage) >= 0 && stage !== 'DELIVERED_TO_SENDER' ? 'error' : ''}
            key={stage}
          >
              {stage === 'DELIVERED_TO_SENDER' ? (<div>
                <div>
                    الشحنة خرجت للتسليم 
                </div>
                <div className="error__text">
                  {cancelledStages[stage]}
                </div>
              
              </div>)
              
              :
                cancelledStages[stage]
               }
            </li>

        ))}
        <li>تم التسليم</li>
      </ul>}
    </div>
  );
}

export default TrackingBar

