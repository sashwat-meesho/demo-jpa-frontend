import React, { useState} from 'react';
import axios from 'axios';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, age, state, phone });
    axios.post('http://localhost:8080/students', { name, email, age, state, phone })
      .then(response => {
        console.log('Student added:', response.data);
        setName('');
        setEmail('');
        setAge('');
        setState('');
        setPhone('');
      })
      .catch(error => {
        console.error('❌ Error adding student:', error);
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <div>
          <label>State:</label>
          <input type="text" value={state} onChange={e => setState(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}
export default AddStudent;