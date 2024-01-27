import React from 'react';
import { Link } from 'react-router-dom';
import extern from '../../../assets/images/externEmployee.jpg';
import intern from '../../../assets/images/internEmployee.jpg';
import click from '../../../assets/images/click.png';

export const SelectionPage = () => {
	return (
		<div className="view-center">
			<div className="flexbox">
				<div className="card-box">
					<Link className="menu-link link-selection" to={`/login`}>
						<div className="row">
							<div className="col-5 ">
								<img src={intern} className="employee-image" alt="" />
							</div>
							<div className="col-7">
								<h1 className="link">INTERN</h1>
								<img src={click} className="click-image" alt="inter_image" />
						
								
							</div>
						</div>
					</Link>
				</div>
				<div className="card-box">
					<Link className="menu-link link-selection" to={`/introduction`}>
						<div className="row">
							<div className="col-5">
								<img src={extern} className="employee-image" alt="" />
							</div>
							<div className="col-7">
								<h1 className="link">EXTERN</h1>
								<img src={click} className="click-image" alt="extern_image" />
							</div>
						</div>
					</Link>
				</div> 
			</div>
		</div>
	);
};
