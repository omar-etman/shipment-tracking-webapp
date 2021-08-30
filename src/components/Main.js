import React from 'react';
import Info from './Info';
import Report from './Report';
import Address from './Address';
import Tracker from './Tracker';
import fetchShipment from '../utils/API';
import '../styles/Main.css';

function Main (props) {

    const {Numbers} = props

    return (
        <div className="main__body">
            <div className="main__body__trackContainer">
                <Tracker/>
            </div>
            <div className ="main__body__info">
                <div className="info__table">
                    <Info
                        Numbers={Numbers}
                    />
                </div>
                <div className="info__details">
                    <div className="details__address">
                    <Address/>
                    </div>
                    <div className="details__report">
                    <Report/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
