import React, { useState} from 'react';

import Header from './Header';

import './global.css';

import Login from './pages/login';

function App() {
  const [counter, setCounter] = useState(0);

  function adicionar(){
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <div>
      
      <Login />
    </div> 
  );
}

export default App;
