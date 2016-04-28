import React from 'react';

const TextSearch = ({ onAdd }) => {
	let text;
	return (
		<form>
			<input type='text-search' ref={node => {text = node}} required/>
			<input value='search' 
						type='text'
						onClick={ ()=> {
							onAdd(text.value);
							text.value = ''; }}/>
		</form>
	)
};

TextSearch.propTypes = {
  name: PropTypes.string.isRequired
};

export default TextSearch