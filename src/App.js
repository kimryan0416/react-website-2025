import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Nav, ScrollToTop } from "./components";
import {
  Home,
  Portfolio,
} from "./screens";

import {
  useMobile,
} from './hooks';

import './App.css';

const App = () => {
  
  const isMobile = useMobile();
  /*
  return (
    <div className={(isMobile)?"App Mobile":"App"}>
      <Nav />
      <main>
        <Routes>
          <Route 
            path="/portfolio" 
            element={<Portfolio />} 
          />
          <Route 
            path="/blog"
            element={<Blog />}
          />
          <Route 
            path="/" 
            element={<Home />} 
          />
          
        </Routes>
      </main>
    </div>
  );
  */
 return (
  <Router>
    <ScrollToTop />
    <div className={(isMobile)?"App Mobile":"App"}>
      <Nav />
      <main>
        <Routes>
          <Route  path="/portfolio/*"  element={<Portfolio />}  />
          <Route  path="/"  element={<Home />} />
        </Routes>
      </main>
    </div>
  </Router>
 );
}


export default App;
