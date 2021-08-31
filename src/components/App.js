import '../styles/App.css';
import { useState } from 'react';
import Head from './Head';
import Details from './Details';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';


function App() {

  
  
  const Nums = ['6636234', '7234258', '9442984','1094442'] 
  const [trackNum, setTrackNum] = useState('')
    
  const handleSelect = (e) => {
    setTrackNum(e)
  }
  
  return (
    <div className="App">
        <Head
          Numbers={Nums}
          handleSelect={handleSelect}
        />
        <Router>
          <Route exact path= '/:id' component={Details}/>
        </Router>
    </div>
  );
}

export default App