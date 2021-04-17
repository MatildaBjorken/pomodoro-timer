import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Timer from './components/timer';
import Task from './task'

function App() {
  return (
    <BrowserRouter>
      <div>
      
        <Switch>
          <Route path="/" component={Timer} exact />
          <Route path="/task" component={Task} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
