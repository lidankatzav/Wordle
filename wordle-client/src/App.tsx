import React, {useEffect, useState} from "react";
import Game from "./pages/game";
import SignIn from "./pages/sign-in";
import { Routes, Route } from "react-router-dom";
import {UserContext} from "./providers/UserContext";
import {PopupsContext} from "./providers/PopupsContext";
import {WelcomePopup} from "./components/Popups/Welcome-Popup";
import {useGame} from "./hooks/useGame";

function App(): JSX.Element {

  const [user, setUser] = useState([]);
  const {showWelcome, setShowWelcome, showWin} = useGame();
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      if(storedUser.length === 2) {
        setShowWelcome(true);
      }
    }
  }, []);

  return (
    <UserContext.Provider value = {{user, setUser}}>
    <PopupsContext.Provider value = {{showWelcome, setShowWelcome}}>
    <WelcomePopup/>
    <Routes>
      {user.length === 0 && <Route path="*" element={<SignIn/>} />}
      {user.length !== 0 && <Route path="*" element={<Game/>} />}
    </Routes>
    </PopupsContext.Provider>
    </UserContext.Provider>
  );
};

export default App;

