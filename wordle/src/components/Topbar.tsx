import React from "react";

export function Topbar():  JSX.Element {
    return (

    <nav className="navbar navbar-expand-lg navbar bg-dark">
    <div className="container-fluid justify-content-between">

    {/* Left elements: log in & language */}
    <ul className="navbar-nav flex-row align-items-center me-2 mb-1">
      <li className="nav-item me-3 me-lg-1">
        <button type="button" className="btn btn-dark btn-lg btn-floating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
        </button>
      </li>
      <li className="nav-item me-3 me-lg-1">
        <button type="button" className="btn btn-dark btn-lg btn-floating">
                <img src="https://www.nicepng.com/png/full/6-63506_usa-png-clipart-american-flag-icon-png.png" width="60" height="45" className="bi bi-person-circle" />
                {/* Israel --> <img src="https://flagicons.lipis.dev/flags/4x3/il.svg" width="40" height="45" className="bi bi-person-circle" /> */}
        </button>
      </li>
    </ul>

    {/* Center element: wordle logo */}
    <a className="navbar-brand me-2 mb-1 d-flex align-items-center">
        <img
          src="https://camo.githubusercontent.com/9633ba7687fe294301734b7516c64a92cbd756558850330837115ace9c610f3a/68747470733a2f2f692e696d6775722e636f6d2f795870526636302e706e67"
          height="70"
          alt="Wordle Logo"
        />
    </a>

    {/* /* Right elements: info & settings */}
    <ul className="navbar-nav flex-row align-items-center me-2 mb-1">
      <li className="nav-item me-3 me-lg-1">
        <button type="button" className="btn btn-dark btn-lg btn-floating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" className="bi bi-info-lg" viewBox="0 0 16 16">
                    <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                    </svg>
        </button>
      </li>
      <li className="nav-item me-3 me-lg-1">
        <button type="button" className="btn btn-dark btn-lg btn-floating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
        </button>
      </li>
    </ul>
    </div>
    </nav>

    );
}