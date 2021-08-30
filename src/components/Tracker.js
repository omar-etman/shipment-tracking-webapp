import React from 'react'
import '../styles/Tracker.css'
import TrackingBar from './TrackingBar'

function Tracker() {
    return (
        <div className='tracker'>
                <div className='tracker__header'>
                    <div className='tracker__header__cell'>
                        <p>Shipment Number</p>
                        <p>current state/</p>
                    </div>
                    <div className='tracker__header__cell'>
                        <p>last update</p>
                        <p>timestamp/</p>
                    </div>
                    <div className='tracker__header__cell'>
                        <p>trader's name</p>
                        <p>--------</p>
                    </div>
                    <div className='tracker__header__cell'>
                        <p>Delivery date</p>
                        <p>promisedDate</p>
                    </div>
                </div>
                <div className='tracker__footer'>
                    <div className ='tracker__footer__bar'>
                        <TrackingBar/>
                    </div>
                </div>
        </div>
    )
}

export default Tracker
