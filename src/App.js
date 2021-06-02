import logo from './logo.svg';
import './styles/main.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
