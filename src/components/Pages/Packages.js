import React from 'react';
import Options from '../UI/Options';
import styles from './Packages.module.css';

const Packages = () => {
	return (
		<div className={styles.packages}>
			<div className={styles.container}>
				<Options />
			</div>
		</div>
	);
};

export default Packages;
