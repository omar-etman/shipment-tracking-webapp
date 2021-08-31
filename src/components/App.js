import '../styles/App.css';
import { useState, useEffect } from 'react';
import Head from './Head';
import Main from './Main';
import fetchShipment from '../utils/API';

function App() {

  const Nums = ['6636234', '7234258', '9442984','1094442'] 
  const [trackNum, setTrackNum] = useState('')
  const [shipment, setShipment] = useState([])

  useEffect(() => {
    async function fetchData() {
        const request = await fetchShipment(trackNum);
        console.log(request)
        setShipment(request.data);
        debugger
    }
    fetchData();
}, [trackNum])

  
  const handleSelect = (e) => {
    setTrackNum(e)
  }
  
  return (
    <div className="App">
        <Head
          Numbers={Nums}
          handleSelect={handleSelect}
        />
        <Main
          shipment={shipment}
          trackNum={trackNum}
        />
    </div>
  );
}

export default App;
