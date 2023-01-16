import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function GamePopup(props?: {title: string, body: string, showPopup: boolean, setShowFunc: Function}) {

    const {title, body, showPopup, setShowFunc} = props;

    const handleCloseModal = () => {
        setShowFunc(false);
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
            <Button onClick = {handleCloseModal}>Start New Game</Button>
        </Modal.Body>
        </Modal>
    );
}
