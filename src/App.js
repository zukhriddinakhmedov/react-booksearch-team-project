import './App.css';
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBadge from './components/MyBadge'

function App() {
  return (
    <div>
      /*Component of WARNINGSIGN*/
      <WarningSign text="Warning,something is wrong" />
      <MyBadge text="Success" color="success" />
    </div>
  );
}

export default App;
