import React from 'react'
import '../styles/Tracker.css'
import TrackingBar from './TrackingBar'
import Moment from 'react-moment'
import { dictionary } from '../utils/dictionary'
import 'moment/locale/ar'
function Tracker(props) {

    const {trackNum, steps, status, lastUpdate, deliveryDate} = props
    return (
        <div className='tracker'>
                <div className='tracker__header'>
                    <div className='tracker__header__cell1'>
                        <p>رقم الشحنة : {trackNum}</p>
                        <div className='header__cell__status'>{status ? dictionary[status.state] : "state" }</div>
                    </div>
                    <div className='tracker__header__cell2'>
                        <p>اخر تحديث</p>
                        <p>
                            <Moment format="YYYY/MM/DD">{lastUpdate}</Moment>
                             <span> </span>
                            <Moment format="hh:mm a">{lastUpdate}</Moment>
                        </p>
                    </div>
                    <div className='tracker__header__cell3'>
                        <p>تاريخ التسليم</p>
                        <Moment format="YYYY/MM/DD" locale="ar">{deliveryDate}</Moment>
                        <br/>
                        {<Moment format="dddd" locale="ar">{deliveryDate}</Moment>}
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
