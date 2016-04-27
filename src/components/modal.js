import React from 'react';
import VisibleDemandList from 'containers/visibleDemandList';
import 'styles/modal.scss'

const Modal = ({closeModal, displayModal}) => {
	return (
		<div className={ displayModal ? 'show-modal ngo-modal' : 'close-modal'}>
			<VisibleDemandList />
			<button onClick={()=> closeModal()}>close this modal</button>
		</div>
	) 
}

export default Modal;