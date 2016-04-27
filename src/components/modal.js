import React from 'react';
import VisibleDemandList from './../containers/visibleDemandList';
import 'styles/modal.scss'

const Modal = ({display}) => {
	return (
		<div className={ true ? 'show ngo-modal' : 'close'}>
      <VisibleDemandList />
		</div>
	) 
}

export default Modal;
