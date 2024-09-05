import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export const LogoutModal = ({show,handleClose,handleLogout}) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to log out? You will be signed out of your account and may need to log in again to access the application.
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className='logout-btn'>
            Close
          </button>
          <button className='logout-btn-active' onClick={handleLogout}>Logout</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
