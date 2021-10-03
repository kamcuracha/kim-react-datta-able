import React, { useState } from 'react';
import { Button, Modal as BSModal }  from 'react-bootstrap';

import { STEPS } from '../../enum/steps';

const Modal = (props) => {
  const stepOnboarding = localStorage.getItem('stepOnboarding');
  const [step, setStep] = useState(!stepOnboarding || stepOnboarding ==='done' ? '1' : props.step);
  // const percentage = ['1', '2', '3', '4'].includes(props.step) && ((props.step / 4) * 100);

  const saveStep = (value) => {
    localStorage.setItem('stepOnboarding', value);
    setStep(value);
  }

  const handleDecrement = () => {
    const newStep = (+step - 1).toString();
    saveStep(newStep);
  }

  const handleIncrement = () => {
    const newStep = (+step + 1).toString();
    saveStep(newStep);
  }

  const handleDone = () => {
    localStorage.setItem('stepOnboarding', 'done');
    props.onHide();
  }

  return (
    <BSModal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <BSModal.Header closeButton>
        <BSModal.Title>Onboarding</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>
        <div className="mb-2" style={{'whiteSpace': 'pre-line'}}>{STEPS[step]}</div>
      </BSModal.Body>
      <BSModal.Footer>
        <span className="px-3">
          Step <span className="h6 font-italic">{step}/4</span>
        </span>
        <Button variant="primary" disabled={step === '1'} onClick={handleDecrement}>Previous</Button>
        {step !== '4'
          ? <Button variant="primary" onClick={handleIncrement}>Next</Button>
          : <Button variant="primary" onClick={handleDone}>Done</Button>
        }
      </BSModal.Footer>
    </BSModal>
  );
};

export default Modal;
