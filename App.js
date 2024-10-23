import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginnPage from "./LoginnPage"; // Ensure the correct import path
import RegisterPage from "./RegisterPage"; // Ensure the correct import path
import AccPage from "./AccPage";
import AdminPage from "./AdminPage";
import EditPage from "./EditPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginnPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/display" element={<AccPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/update" element={<EditPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;