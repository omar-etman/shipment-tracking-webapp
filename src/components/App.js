import '../styles/App.css';
import { useState, useEffect } from 'react';
import Head from './Head';
import Main from './Main';
import fetchShipment from '../utils/API';

function App() {

  const trackingNums = ['6636234', '7234258', '9442984','1094442'] 
  const [trackNums, setTrackNum] = useState('')


  
  //
  
  return (
    <div className="App">

        <Head
          Numbers={trackNums}
        />


        <Main
          Numbers={trackNums}
        />

    </div>
  );
}

export default App;
