import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import UnderConstruction from './components/UnderConstruction';
import Hompage from './components/Hompage';

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={UnderConstruction} />
          <Route path="/signup" component={UnderConstruction} />
          <Route path="/page-not-found" component={NotFound} />
          <Route path="/" exact component={Hompage} />
          <Redirect to="/page-not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
