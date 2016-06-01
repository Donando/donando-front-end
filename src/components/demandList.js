import React, { PropTypes } from 'react';
import Demand from './demand';

const DemandList  = ({ demands }) => {
	let components = demands && demands.map(( d, i ) => {
												return <Demand key={i} demand={d}/> 
												})
	return (
			<div>
				{components}
			</div>
		)
}

DemandList.propTypes = {
  demands: PropTypes.array.isRequired
};

export default DemandList;