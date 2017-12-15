import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={ !!props.selectedOption }
      contentLabel="Selected Option"
      onRequestClose={ props.handleClick }
      >
      <h3>{ props.selectedOption }</h3>
      <button onClick={ props.handleClick }>Close</button>
    </Modal>
)

export default OptionModal;
