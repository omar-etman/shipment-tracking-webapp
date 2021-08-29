import '../styles/App.css';
import HeaderNav from './HeaderNav';
import ShipmentTracker from './ShipmentTracker';
import DetailsTable from './DetailsTable';
import IssueReport from './IssueReport';
import ShipmentAddress from './ShipmentAddress';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <div className ="App__body">
        <div  className="App__body__tracker">
          <ShipmentTracker/>
        </div>
        <div className ="App__body__info">
          <div className="info__table">
            <DetailsTable />
          </div>
          <div className="info__details">
            <ShipmentAddress/>
            <IssueReport/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
