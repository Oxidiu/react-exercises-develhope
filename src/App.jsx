import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Welcome } from './Welcome';
import ShowGithubUser from './ShowGithubUser';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/users/:username" element={<ShowGithubUser/>}/>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
