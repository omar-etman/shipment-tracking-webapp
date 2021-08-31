import React from 'react'
import '../styles/Tracker.css'
import TrackingBar from './TrackingBar'
import Moment from 'react-moment'
import { textFormat } from '../utils/textFormat'
function Tracker(props) {

    const {trackNum, steps, status, lastUpdate, deliveryDate} = props
    return (
        <div className='tracker'>
                <div className='tracker__header'>
                    <div className='tracker__header__cell1'>
                        <p>Shipment Number:{trackNum}</p>
                        <div className='header__cell__status'>{status ? textFormat[status.state] : "state" }</div>
                    </div>
                    <div className='tracker__header__cell2'>
                        <p>last update</p>
                        <p>
                            <Moment format="YYYY/MM/DD">{lastUpdate}</Moment>
                             <span>at</span>
                            <Moment format="hh:mm">{lastUpdate}</Moment>
                        </p>
                    </div>
                    <div className='tracker__header__cell3'>
                        <p>Delivery date</p>
                        <Moment format="YYYY/MM/DD">{deliveryDate}</Moment>
                    </div>
                </div>
                <div className='tracker__footer'>
                    <div className ='tracker__footer__bar'>
                        <TrackingBar
                            steps={steps}
                        />
                    </div>
                </div>
        </div>
    )
}

export default Tracker
