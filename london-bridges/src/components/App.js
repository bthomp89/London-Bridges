import History from "./History/History";
import Home from "./Home/Home";
import Team from "./Team/Team";
import Events from "./Events/Events";
import "./styles.css";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function isActive(page) {
    if (window.location.href.includes(page)) return true;
}

function App() {
    const [open, setOpen] = useState(false);

    function toggleMobileNav() {
        setOpen((prev) => !prev)
    }

  return (
    <div>
        <div class="navbar">
            <div class="logo"></div>
            <nav className={`links-container ${open && "active"}`}>
                <a href="/home" className={isActive('home') ? 'active' : ''} onClick={toggleMobileNav}>Home</a>
                <a href="/events" className={isActive('events') ? 'active' : ''} onClick={toggleMobileNav}>Events</a>
                <a href="/team" className={isActive('team') ? 'active' : ''} onClick={toggleMobileNav}>Our Team</a>
            </nav>
            <button className={`hamburger ${open && "active"}`} onClick={toggleMobileNav}></button>
        </div>

      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
