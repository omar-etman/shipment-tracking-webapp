import {useState, useEffect} from 'react';
import Info from './Info';
import Report from './Report';
import Tracker from './Tracker';
import '../styles/Main.css';
import fetchShipment from '../utils/API';
import { useParams } from 'react-router-dom';

function Details (props) {

    const trackNum = props.match.params.id 
    
    const [shipment, setShipment] = useState([])
    
    
    useEffect(() => {
        async function fetchData() {
            
            const request = await fetchShipment(trackNum);
            console.log(trackNum)
            setShipment(request.data);
        }
        fetchData();

    }, [trackNum])


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

export default Details
