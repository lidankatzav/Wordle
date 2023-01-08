import React from "react";
import Game from "./pages/game";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {

  return (
    <Routes>
      <Route path="*" element={<Game/>} />
    </Routes>
  );
}

export default App;

