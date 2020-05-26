import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import Projects from "./pages/projects"
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch> 
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
