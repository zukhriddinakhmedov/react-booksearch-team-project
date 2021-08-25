import './App.css';
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyBadge from './components/MyBadge'

function App() {
  return (
    <div>
      <WarningSign text="Something is wrong" />
      <MyBadge text="Hello" color="success" />
    </div>
  );
}

export default App;
