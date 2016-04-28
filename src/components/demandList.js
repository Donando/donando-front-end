import React, { PropTypes } from 'react';
import Demand from './demand';

const DemandList  = ({ demands }) => {
	let components = demands.map(( t, i ) => {
											return <Demand key={i} title={t.title}/> 
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
