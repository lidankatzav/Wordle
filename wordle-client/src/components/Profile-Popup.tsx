import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from "../providers/UserContext";
import { TopbarContext } from '../providers/TopbarContext';

export function ProfilePopup() {
  const {user, setUser} = useContext(UserContext);
  const {showProfile, setShowProfile} = useContext(TopbarContext);

  const handleClose = () => setShowProfile(false);

  return (
    <>
      <Modal show={showProfile} onHide={handleClose}>
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
          <Button onClick = {() => setUser([])}>Log Out</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
