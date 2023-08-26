import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage'; // Create this component similarly to LoginPage

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
};

export default App;
