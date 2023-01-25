import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
import {gameState} from "../../hooks/IGameState";

export function GamePopup(props: {title: string, body: string, showPopup: boolean, gameState: gameState, setGameState: Function, typeModal: string}) {

    const {title, body , showPopup, gameState, setGameState, typeModal} = props;

    const handleCloseModal = () => {
        if(typeModal === 'lost') {
            gameState.showLost = false;
            const newGameState = Object.create(gameState);
            setGameState(newGameState);
        }
        if(typeModal === 'welcome') {
            gameState.showWelcome = false;
            const newGameState = Object.create(gameState);
            setGameState(newGameState);
        }
        if(typeModal === 'win') {
            gameState.showWelcome = false;
            const newGameState = Object.create(gameState);
            setGameState(newGameState);
        }   
    }

    return (
        <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showPopup}
        onHide={handleCloseModal}
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            {body}
            </p>
            {typeModal === 'welcome' && <Button onClick = {handleCloseModal}>Start Now</Button>}
            {typeModal !== 'welcome' && <Button onClick = {handleCloseModal}>Start New Game</Button>}
        </Modal.Body>
        </Modal>
    );
}
