import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../src/components/Header';
import EmpTable from './components/EmpTable';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)


function App() {
  return (
  <div className="container"><Header></Header><EmpTable/></div>
  );
}

export default App;
