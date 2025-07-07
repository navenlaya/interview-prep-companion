import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Connecting to backend...');

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#2b6cb0' }}>Interview Prep Companion</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        Backend says: {message}
      </p>
    </div>
  );
}

export default App;
