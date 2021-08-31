import '../styles/App.css';
import { useState, useEffect } from 'react';
import Head from './Head';
import Details from './Details';
import fetchShipment from '../utils/API';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';

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
        
        <Router>
          <Head
            Numbers={Nums}
            handleSelect={handleSelect}
          />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path= '/track/:id'>
              <Details
                shipment={shipment}
                trackNum={trackNum}
              />
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App