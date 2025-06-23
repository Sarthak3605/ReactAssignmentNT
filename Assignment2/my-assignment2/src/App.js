import React from 'react';
import './App.css';
import InputField from './Component/InputField';
import Counter from './Component/Counter';
import Toggle from './Component/Toggle';

function App() {
  return (
    <div className="App">
		<Counter/>
		<InputField/>
		<Toggle/>
    </div>
  );
}

export default App;
