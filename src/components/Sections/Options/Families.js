import React, { Fragment } from 'react';
import styles from './Families.module.css';
import classes from './AllPackages.module.css';

const Families = () => {
	return (
		<Fragment>
			<div className={`${styles.families} ${classes.packagesHero}`} />
		</Fragment>
	);
};

export default Families;
