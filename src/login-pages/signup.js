import './login.css';
import '../components/Navbar/nav-bar';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='link-button'  onClick={handleShow}>
      Registration
      </Button>

      <Modal className='sign_form' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='sign_formtitle'> Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email / Mobile Number</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email / Enter Your Number"
                autoFocus
              />
            </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        
        </div>
      ))}
      </Form.Group> 
      <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter your OTP</Form.Label>
              <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        
          <Button className="link-button" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;





