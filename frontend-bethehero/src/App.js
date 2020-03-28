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
      <Header> Contador: { counter }   </Header>
      <button onClick={adicionar}> Adicionar</button>

      <Login />
    </div> 
  );
}

export default App;
