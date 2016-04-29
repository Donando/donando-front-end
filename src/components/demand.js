import React, { PropTypes } from 'react';
import Ngo from 'components/ngo';

const Demand = ({demand}) => {
	return (
		<div className='demand'>
			{demand.data}
			{demand.created_at}
			{demand.id}
			<Ngo ngo={demand.ngo}/>
		</div>
	) 
}

Demand.propTypes = {
  demand: PropTypes.object.isRequired
};

export default Demand;
