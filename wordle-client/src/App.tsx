import React from "react";
import Game from "./pages/game";
import SignIn from "./pages/sign-in";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {

  const user = false;
  return (
    <Routes>
      {user && <Route path="*" element={<SignIn/>} />}
      {!user && <Route path="*" element={<Game/>} />}
    </Routes>
  );
};

export default App;

