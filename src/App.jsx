import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
  return (
    <Router>
      <div>
        {/* Your other routes */}
        <Route path="/users/:username" component={ShowGithubUser} />
      </div>
    </Router>
  );
};

export default App;
