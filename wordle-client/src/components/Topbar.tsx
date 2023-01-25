import React, {useContext} from "react";
import { TopbarContext } from "../providers/TopbarContext";
import "../css/topbar.css";

export function Topbar():  JSX.Element {

    const {topbarPopus, setTopbarPopus} = useContext(TopbarContext);

    const showProfile = () => {
      topbarPopus.showProfile = true;
      const newTopbarPopus = Object.create(topbarPopus);
      setTopbarPopus(newTopbarPopus);
    }

    const showInfo = () => {
      topbarPopus.showInfo = true;
      const newTopbarPopus = Object.create(topbarPopus);
      setTopbarPopus(newTopbarPopus);
    } 

    return (
    
    <nav className="navbar navbar-expand-lg navbar">
    <div className="container-fluid justify-content-between">

    {/* Left element */}
    <ul className="navbar-nav flex-row align-items-center me-2 mb-1">

      <li className="nav-item me-3 me-lg-1">
        <button type="button" className="btn btn-secondary" onClick = {() => showProfile()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
        </button>
      </li>

    </ul>

    {/* Center element */}
    <a className="navbar-brand me-2 mb-1 d-flex align-items-center">
        <img
          src="https://camo.githubusercontent.com/9633ba7687fe294301734b7516c64a92cbd756558850330837115ace9c610f3a/68747470733a2f2f692e696d6775722e636f6d2f795870526636302e706e67"
          height="60"
          alt="Wordle Logo"
        />
    </a>

    {/* Right element */}
    <ul className="navbar-nav flex-row align-items-center me-2 mb-1">

      <li className="nav-item me-3 me-lg-1">
        <button type="button" className="btn btn-secondary" onClick = {() => showInfo()} data-mdb-toggle="modal" data-mdb-target="#staticBackdrop" >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
        </button>
      </li>
    </ul>
    </div>
    </nav>

    );
}