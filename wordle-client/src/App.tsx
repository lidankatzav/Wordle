import React, {useState} from "react";
import Game from "./pages/game";
import SignIn from "./pages/sign-in";
import { Routes, Route } from "react-router-dom";
import {UserContext} from "./providers/UserContext";

function App(): JSX.Element {

  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value = {{user, setUser}}>
    <Routes>
      {user.length === 0 && <Route path="*" element={<SignIn/>} />}
      {user.length !== 0 && <Route path="*" element={<Game/>} />}
    </Routes>
    </UserContext.Provider>
  );
};

export default App;

