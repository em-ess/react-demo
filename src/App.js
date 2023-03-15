import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {
  // Create count state
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header setCount={setCount}/>
      <Counter count={count}/>
    </div>
  );
}

export default App;
