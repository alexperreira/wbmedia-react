import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PackageItem.module.css';

const PackageItem = (props) => {
	const navigate = useNavigate();

	return (
		<li className={styles.item}>
			<div>
				<h3 className={styles.name}>{props.name}</h3>
				<button
					className={styles.button}
					onClick={() => {
						navigate(``);
					}}
				></button>
			</div>
		</li>
	);
};

export default PackageItem;
