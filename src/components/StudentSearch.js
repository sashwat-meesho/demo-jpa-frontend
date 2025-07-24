import React, { useState } from 'react';
import axios from 'axios';

function StudentSearch() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [age, setAge] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [results, setResults] = useState([]);

  const handleSearchByName = () => {
    axios.get(`http://localhost:8080/students/search?name=${name}`)
      .then(res => setResults(res.data))
      .catch(err => console.error('Error:', err));
  };

  const handleSearchById = () => {
    axios.get(`http://localhost:8080/students/search/id?id=${id}`)
      .then(res => setResults([res.data])) // wrap single object in array
      .catch(err => console.error('Error:', err));
  };

  const handleSearchByAge = () => {
    axios.get(`http://localhost:8080/students/search/age?age=${age}`)
      .then(res => setResults(res.data))
      .catch(err => console.error('Error:', err));
  };

  const handleSearchByAgeRange = () => {
    axios.get(`http://localhost:8080/students/search/age/between?minAge=${minAge}&maxAge=${maxAge}`)
      .then(res => setResults(res.data))
      .catch(err => console.error('Error:', err));
  };

  return (
    <div>
      <h2>🔍 Search Students</h2>

      {/* Name */}
      <div>
        <input placeholder="Search by name" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleSearchByName}>Search Name</button>
      </div>

      {/* ID */}
      <div>
        <input placeholder="Search by ID" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={handleSearchById}>Search ID</button>
      </div>

      {/* Age */}
      <div>
        <input placeholder="Search by age" value={age} onChange={e => setAge(e.target.value)} />
        <button onClick={handleSearchByAge}>Search Age</button>
      </div>

      {/* Age Range */}
      <div>
        <input placeholder="Min Age" value={minAge} onChange={e => setMinAge(e.target.value)} />
        <input placeholder="Max Age" value={maxAge} onChange={e => setMaxAge(e.target.value)} />
        <button onClick={handleSearchByAgeRange}>Search Age Range</button>
      </div>

      {/* Result */}
      <ul>
        {results.map((student, index) => (
          <li key={index}>
            <strong>{student.name}</strong> | Age: {student.age} | Email: {student.email} | ID: {student.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentSearch;
