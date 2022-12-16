import React from 'react';
import {Topbar} from "./components/Topbar";
import {Board} from "./components/Board";
import {Keyboard} from "./components/Keyboard";

function App() {
  return (
    <>
      <Topbar/>
      <Board/>
      <Keyboard/>
    </>
  );
}

export default App;
