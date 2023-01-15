import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useGame} from "../../hooks/useGame";

export function GamePopup(props?: {title: string, body: string, showPopup: boolean, setShowFunc: Function}) {

    const {title, body, showPopup, setShowFunc} = props;
    const {resetGame} = useGame();

    const handleCloseModal = () => {
        setShowFunc(false);
    }
    
    const handleNewGame = () => {
        resetGame();
        handleCloseModal();
    };

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
            <Button onClick = {handleNewGame}>Start New Game</Button>
        </Modal.Body>
        </Modal>
    );
}
