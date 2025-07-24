import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentTable() 
{
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('❌ Error fetching students:', error);
      });
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.email} - Age: {student.age} - State: {student.state} - id: {student.id} - {student.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentTable;

