import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Welcome } from './Welcome';
import ShowGithubUser from './ShowGithubUser';
import Counter from "./Counter"
import { GithubUserList } from './GithubUserList';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        
        <Route path="/counter" element={<Counter/>}/>
        <Route path="*" element={<div>404 - Not Found</div>}/>
        <Route path="/users" element={<GithubUserList/>}>
          <Route path="/users/:username" element={<ShowGithubUser/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
