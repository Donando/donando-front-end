import React from 'react';
import { connect } from 'react-redux';
import { openModal } from 'redux/reducers/modal';
import ModalContainer from 'containers/modalContainer';
//THIS IS JUST A FILLER MAP THIS WILL BE REPLACED!!!
const TESTMap = ({openModal}) => {
	return (
		<div className='map'>
			<img src='https://www.webniraj.com/wp-content/uploads/2013/05/Interactive-Google-Maps.png'
				onClick={ ()=> openModal() } />
			<ModalContainer />
		</div>
	) 
}

export default connect(
	null,
	{openModal} 
)(TESTMap);