import React from 'react';
import Info from './Info';
import Report from './Report';
import Address from './Address';
import Tracker from './Tracker';
import '../styles/Main.css';

function Main (props) {

    const {shipment, trackNum} = props

    return (
        <div className="main__body">
            <Tracker
                trackNum={trackNum}
                steps={shipment.TransitEvents}
                status={shipment.CurrentStatus}
                lastUpdate={shipment.timestamp}
                deliveryDate={shipment.PromisedDate}
            />
            <div className ="main__body__info">
                <div className="info__table">
                    <Info
                        steps={shipment.TransitEvents}                      
                    />
                </div>
                <div className="info__details">
                    <Report/>
                </div>
            </div>
            
        </div>
    )
}

export default Main
