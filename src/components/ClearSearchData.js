import React, { useState } from 'react';

function ClearSearchData() {
  const [message, setMessage] = useState('');

  const handleClear = async () => {
    try {
      const response = await fetch('http://localhost:8080/students/search/clear', {
        method: 'DELETE'
      });

      if (response.ok) {
        const result = await response.text();
        setMessage(result);
      } else {
        setMessage('❌ Failed to clear Elasticsearch data');
      }
    } catch (error) {
      console.error('Error clearing search data:', error);
      setMessage('❌ Error clearing search data');
    }
  };

  return (
    <div>
      <h2>🧹 Clear Elasticsearch Student Data</h2>
      <button onClick={handleClear}>Clear Data</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ClearSearchData;
