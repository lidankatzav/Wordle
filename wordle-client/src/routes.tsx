import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Game from "./pages/game";
import SignIn from "./pages/sign-in";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: 'sign-in',
                element: <SignIn/>
            },
            {
                path: 'game',
                element: <Game/>
            }
        ]
    }
]);
