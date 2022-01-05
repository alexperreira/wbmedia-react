import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './PackageItem.module.css';

const PackageItem = (props) => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<li className={styles.item}>
			<div>
				<h3>{props.name}</h3>
				<button
					onClick={() => {
						navigate(`${location}/${props.name}`);
					}}
				></button>
			</div>
		</li>
	);
};

export default PackageItem;
