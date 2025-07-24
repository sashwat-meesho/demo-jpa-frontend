import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentTable from './components/StudentTable';
import AddStudent from './components/AddStudent';
import StudentSearch from './components/StudentSearch';
import ClearSearchData from './components/ClearSearchData';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/add">Add Student</Link> | <Link to="/students">View Students</Link> | <Link to="/search">Search Students</Link>
        </nav>

        {/* Clear Search Data - Available on all pages */}
        <div style={{ margin: '20px 0', padding: '10px', borderBottom: '1px solid #ccc' }}>
          <ClearSearchData />
        </div>

        <Routes>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/students" element={<StudentTable />} />
          <Route path="/search" element={<StudentSearch />} />
          <Route path="/" element={
            <div>
              <h1>Welcome to Student Management System</h1>
              <p>Use the navigation above to add, view, or search students.</p>
            </div>
          } />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
