import '../styles/App.css';
import { useState, useEffect } from 'react';
import HeaderNav from './HeaderNav';
import ShipmentTracker from './ShipmentTracker';
import fetchShipment from '../utils/API';

function App() {

  const trackingNums = ['6636234', '7234258', '9442984','1094442'] 
  const [trackNums, setTrackNum] = useState('')

  
  
  //
  
  return (
    <div className="App">

        <HeaderNav 
          Numbers={trackNums}
        />


        <ShipmentTracker
          Numbers={trackNums}
        />

    </div>
  );
}

export default App;
