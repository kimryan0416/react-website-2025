// Packages
import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Custom items: Screens, Components, Hooks, and CSS
import { Home, Portfolio } from "./screens";
import { Nav, ScrollToTop } from "./components";
import { useMobile } from './hooks';
import './App.css';

// App declaration. SEPARATE FROM index.js, where MobileProvider is.
const App = () => {
  const isMobile = useMobile();
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
