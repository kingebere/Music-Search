import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import './App.css';
import NavBar from './Components/Layout/NavBar';
import Index from './Components/Layout/Index'
import Lyrics from "./Components/tracks/Lyrics";
import {Provider} from './Context';
function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <NavBar/>
      <div className='container' >
<Switch>
       <Route exact path='/' component={Index}/>
       <Route exact path='/lyrics/track/:id' component={Lyrics}/>
</Switch>
     </div>
     
    </React.Fragment>
        
    </Router>
    </Provider>
    
       
    
  );
}

export default App;
