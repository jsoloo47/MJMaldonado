import { useState } from 'react';

import { WhiteHalf, BlueHalf } from '../../pages/HomePage';
import NavBar from '../../organisms/NavBar/NavBar';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <WhiteHalf />
      <BlueHalf />
    </div>
  );
}

export default App;
