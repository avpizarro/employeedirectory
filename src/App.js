import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../src/components/Header';
import Employees from './components/Employees';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faGlobe, faSort } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faGlobe, faSort)


function App() {
  return (
  <div className="container"><Header></Header><Employees/></div>
  );
}

export default App;
