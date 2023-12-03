import React from 'react';
import { Eye } from '../../atoms/Eye';
import { Pencil } from '../../atoms/Pencil';
import { Trash } from '../../atoms/Trash';
export const CrudMenu = (props) => {
	return (
		<div className="menu-crud box">
			<Eye linkID={`/${props.pos}-detail/${props.posId}`} />
			<Pencil linkID={`/${props.pos}/${props.posId}`} />
			<Trash linkID={[props.pos, props.posId]} />
		</div>
	);
};
