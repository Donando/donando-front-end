import React, { PropTypes } from 'react';

const Ngo = ({ngo}) => {
	return (
		<div className='ngo'>
			<div>
				{ngo.name}
			</div>
			<div>
				{ngo.address}
			</div>
			<div>
				{ngo.direction}
			</div>
			<div>
				{ngo.hours}
			</div>
			<div>
				{ngo.phone}
			</div>
			<div>
				{ngo.website}
			</div>
		</div>
	) 
}

Ngo.propTypes = {
  ngo: PropTypes.object.isRequired
};

export default Ngo;
