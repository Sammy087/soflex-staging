// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/other" component={OtherPage} />
      </Switch>
    </Router>
  );
}

export default App;
