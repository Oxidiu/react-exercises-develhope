import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FilteredList from './FilteredList';
import Counter from './Counter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FilteredList} />
        <Route path="/counter" component={Counter} />
      </Switch>
    </Router>
  );
};

export default App;
