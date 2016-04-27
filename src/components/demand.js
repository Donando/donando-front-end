import React, { PropTypes } from 'react';

const Demand = ({title}) => {
	return (
		<div className='demand'>
			{title}
		</div>
	) 
}

Demand.propTypes = {
  title: PropTypes.string.isRequired
};

export default Demand;
