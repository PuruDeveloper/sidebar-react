import logo from './logo.svg';
import './styles.css';
import { BrowserRouter as Router,  Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className='app-left'>
        <Sidebar />
      </div>
      <div className='app-right'>
        <div className='header'>
          <h1>Header</h1>
        </div>
        <Router>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          <Route exact path="/home"><Home /></Route>
        </Router>
        <div className='footer'>
          <h1>Footer</h1>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
