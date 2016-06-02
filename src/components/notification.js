import React, { PropTypes } from 'react';

const Notification = ({message}) => {
	return (
		<div className = 'notification'>
			{message}
		</div>
	) 
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;
