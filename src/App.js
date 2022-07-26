import './App.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalContent from './components/ModalContent';
// import Modal from './components/Modal';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Open modal</button>
      <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
          contentLabel="My dialog"
          content="content"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
          >
      <ModalContent body='Modal body goes here' title='Modal Title' onClose={toggleModal} />
      </Modal>
    </div>
  );
}

export default App;
