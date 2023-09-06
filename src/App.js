import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
// import Body from './components/Body/Body.js';
import Game from './components/Game/Game.js';
import UserProvider from './providers/UserProvider';

function App() {
   
  return (
    <>
      <UserProvider>
        {/* <Header /> */}
        <Game />
      </UserProvider>

    </>
  );
}

export default App;
