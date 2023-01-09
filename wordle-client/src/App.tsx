import React from "react";
import Game from "./pages/game";
import SignIn from "./pages/sign-in";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {

  return (
    <Routes>
      <Route path="*" element={<SignIn/>} />
      <Route path="/game" element={<Game/>} />
    </Routes>
  );
}

export default App;

