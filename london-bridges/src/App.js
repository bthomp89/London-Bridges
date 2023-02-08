import * as React from "react";
import Team from "./components/Team";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/team"
          element={<Team />}
        />
      </Routes>
    </Router>
  );
}

export default App;
