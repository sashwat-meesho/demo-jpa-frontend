import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentTable from './components/StudentTable';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/add">Add Student</Link> | <Link to="/students">View Students</Link>
        </nav>

        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/students" element={<StudentTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
