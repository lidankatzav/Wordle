import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { TopbarContext } from '../../providers/TopbarContext';
import { UserContext } from "../../providers/UserContext";

export function ProfilePopup() {

  const {user, setUser} = useContext(UserContext);
  const {topbarPopus, setTopbarPopus} = useContext(TopbarContext);
  
  const handleClose = () => {
    topbarPopus.showProfile = false;
    const newTopbarPopus = Object.create(topbarPopus);
    setTopbarPopus(newTopbarPopus);
  };

  const handleLogOut = () => {
    setUser([]);
    localStorage.setItem('user', JSON.stringify([]));
  };

  return (
    <>
      <Modal show={topbarPopus.showProfile} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span style={{ fontWeight: 'bold' }}>Name: </span>
            {user[0]}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Email: </span>
            {user[1]}
          </p>
          <Button onClick = {handleLogOut}>Log Out</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
