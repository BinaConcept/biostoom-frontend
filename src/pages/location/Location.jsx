import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

export const Location = (props) => {
  const [name, setName] = useState()
	return (
		<React.Fragment>
			{props.location ? (
				<div>
					<label htmlFor="name">Titel</label>
					<input id="name" type="text" placeholder="name" value={name} onChange={evt=> evt.target.value}/>
				</div>
			) : null}
		</React.Fragment>
	);
};
