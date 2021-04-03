import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Header from '../src/components/Header';
import EmpTable from './components/EmpTable';


function App() {
  return (
  <div className="container"><Header></Header><EmpTable/></div>
  );
}

export default App;
