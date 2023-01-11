import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function GamePopup(props: {title: string, body: string}) {

    const {title, body} = props;

    return (
        <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={true}
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            {title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
            {body}
            </p>
            <Button>Start New Game</Button>
        </Modal.Body>
        </Modal>
    );
}
