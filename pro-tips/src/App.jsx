import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import RegistrationForm from './components/RegistrationForm';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/contacts" component={Contacts} />
            <Route path="/registration" component={RegistrationForm} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;