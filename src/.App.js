import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  const prevName = useRef('');

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    prevName.current = name;
  });

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>

      <div>The component render number: {renderCount.current} </div>
    </div>
  );
}
