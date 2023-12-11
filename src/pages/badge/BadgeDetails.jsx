import React from 'react';
import { useParams } from 'react-router-dom';
import DetailsInfo from '../../modules/details/DetailsInfo';

export const BadgeDetails = (props) => {
	const { id } = useParams();
	return <DetailsInfo id={id} control={'badge'} />;
};
