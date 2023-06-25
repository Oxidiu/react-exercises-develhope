import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Counter from './Counter';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<h1>Welcome</h1>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
