import React from 'react';
import { Eye } from '../../atoms/Eye';
import { Pencil } from '../../atoms/Pencil';
import { Trash } from '../../atoms/Trash';
export const CrudMenu = (props) => {
	
	return (
		<div className='menu-crud'>
			<Eye linkID={props.eye}/>
			<Pencil linkID={props.pencil}/>
			<Trash linkID={props.trash}/>
		</div>
	);
};
