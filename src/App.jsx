import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import UnderConstruction from './components/UnderConstruction';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hompage from './components/Hompage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/page-not-found" component={NotFound} />
          <Route path="/" exact component={Hompage} />
          <Redirect to="/page-not-found" />
        </Switch>
        <div className="space" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
