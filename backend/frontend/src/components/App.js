import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home'
import FormPage2 from './FormPage2'
import Analytics from './Analytics'
import Results1 from './Results1';
import Results2 from './Results2';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<FormPage2 />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/results1" element={<Results1 />} />
        <Route path="/results2" element={<Results2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App