import React, { useState} from 'react';
import './global.css';
import Routes from './Routes';

function App() {
  const [counter, setCounter] = useState(0);

  function adicionar(){
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>

      <Routes />
    </div> 
  );
}

export default App;
