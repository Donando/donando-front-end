import React, { PropTypes } from 'react';

const Demand = ({title}) => {
	return (
		<div className='demand'>
			<h2>{title}
			</h2>
		</div>
	) 
}

Demand.propTypes = {
  title: PropTypes.string.isRequired
};

export default Demand;
