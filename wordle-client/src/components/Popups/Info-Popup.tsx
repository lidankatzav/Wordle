import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { TopbarContext } from "../../providers/TopbarContext";
import infopart1 from "../../imgs/info-part1.png";
import infopart2 from "../../imgs/info-part2.png";
import infopart3 from "../../imgs/info-part3.png";


export function InfoPopup() {
  const {showInfo, setShowInfo} = useContext(TopbarContext);

  const handleClose = () => setShowInfo(false);

  return (
    <>

      <Modal show={showInfo} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Play?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          You get five chances (or you choose another) to guess the secret word, 
          and the color of the letters changes to indicate your progress.
          </p>
          <p>
          Each guess must be a vaild 5-letter word.
          </p>
          <p>
          For example:
          </p>
          <img src = {infopart1} height="70" width="300"/>
          <p>
            <span style={{ fontWeight: 'bold' }}>W </span>
            is in the word and in the correct spot.
          </p>
          <img src = {infopart2} height="70" width="300"/>
          <p>
            <span style={{ fontWeight: 'bold' }}>I </span>
            is in the word but in the wrong spot.
          </p>
          <img src = {infopart3} height="70" width="300"/>
          <p>
            <span style={{ fontWeight: 'bold' }}>U </span>
            is not in the wort in any spot.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}
