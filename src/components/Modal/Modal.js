import React from 'react';
import { Modal as BSModal }  from 'react-bootstrap';

const Modal = (props) => {
  return (
    <BSModal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BSModal.Header closeButton>
        <BSModal.Title>Modal heading</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        Woohoo, you're reading this text in a modal!
      </BSModal.Body>
    </BSModal>
  );
};

export default Modal;
