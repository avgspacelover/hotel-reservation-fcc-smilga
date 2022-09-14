
import './App.css';


//import { Link } from "react-router-dom";

import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { SingleRoom } from './pages/SingleRoom';
import { ErrrorPage } from './pages/ErrorPage';
import {Route, Switch} from 'react-router-dom';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rooms/" component={Rooms}></Route>
          <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
          <Route component={ErrrorPage}></Route>
          
        </Switch>




      
    </div>
  );
}

export default App;
