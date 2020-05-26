import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch> 
          <Route exact path="/" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
