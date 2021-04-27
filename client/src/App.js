/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import * as ReactBootstrap from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Dashboard from './components/pages/Dashboard';
import Portfolio from './components/pages/Portfolio';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPortfolio from './components/portfolio/AddPortfolio';
import EditPortfolio from './components/portfolio/EditPortfolio';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component = {Dashboard}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/portfolio/add" component={AddPortfolio}/>
          <Route exact path="/portfolio/edit/:SN" component={EditPortfolio}/>
        </Switch> 
      </div>
    </Router>
  );
}


export default App;
