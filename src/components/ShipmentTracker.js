import React from 'react';
import DetailsTable from './DetailsTable';
import IssueReport from './IssueReport';
import ShipmentAddress from './ShipmentAddress';
import fetchShipment from '../utils/API';
import '../styles/ShipmentTracker.css';

function ShipmentTracker(props) {

    const {Numbers} = props

    return (
        <div className="main__body">
            <div className="main__tracker__container">
                <p>shipment tracker here</p>
            </div>
            <div className ="main__body__info">
                <div className="info__table">
                    <DetailsTable 
                        Numbers={Numbers}
                    />
                </div>
                <div className="info__details">
                    <div className="details__address">
                    <ShipmentAddress/>
                    </div>
                    <div className="details__report">
                    <IssueReport/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShipmentTracker
