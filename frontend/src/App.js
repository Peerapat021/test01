import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepages from "./pages/Homepages";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
