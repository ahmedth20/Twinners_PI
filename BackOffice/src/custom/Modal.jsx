// Modal.js
import React from 'react';
import './Modal.css'; 

const Modal = ({ children, onClose }) => {
    console.log("Rendering Modal");
    return (
        <div className="modal-backdrop">
            <div className="modal-content" style={{ width: '90%', height: '70%' }}>
                {children}
                <button onClick={onClose} className="modal-close-button">&times;</button>
            </div>
        </div>
    );
};

export default Modal;
