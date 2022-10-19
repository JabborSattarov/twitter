import React from 'react';
import './modal.css';

const Modal = ({ data }) => {
	let { title, description } = data;
	return (
			<div className="ModalOverlay">
                <div className="modal">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
		
	);
};

export default Modal;
