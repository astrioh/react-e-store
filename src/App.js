import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
      
    </div>
  );
}

export default App;
