import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
function Errorm() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div >
      <div
        className="legend"
        onClick={() => {
          setmodalIsOpen(true);
        }}
      >
        <button >eeee</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        className="modal-open"
        style={{
          overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0)',
          },
        }}
      >
        <div>
          <button className="modal-close-info" onClick={() => setmodalIsOpen(false)}>
            -
          </button>
        </div>
        <div className="modal-info-text">
          <p>
            The secret to effective time management is...thinking in tomatoes
            rather than hours. 
            <br></br><br></br>
            Do your thing and get to work!
          </p>
          <ul>
            <li>Pick a task</li>
            <li>set a timer</li>
            <li>work until time is up</li>
            <li>take a break</li>
            <li>repeat</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Errorm;
