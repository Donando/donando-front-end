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
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

export default Ngo;
