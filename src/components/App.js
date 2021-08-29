import '../styles/App.css';
import HeaderNav from './HeaderNav';
import ShipmentTracker from './ShipmentTracker';
import DetailsTable from './DetailsTable';
import IssueReport from './IssueReport';

function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <div className ="App__body">
        <ShipmentTracker/>
        <div className ="body__details">
          <DetailsTable/>
          <IssueReport/>
        </div>

      </div>
    </div>
  );
}

export default App;
