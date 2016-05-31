import React, { PropTypes } from 'react';

const Notification = ({notification}) => {
	return (
		<div className = 'notification'>
			{notification.message}
		</div>
	) 
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired
};

export default Notification;
