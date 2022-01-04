import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
	return (
		<Fragment>
			<h1>This is the packages page!</h1>
			<Link to='/'>Back</Link>
		</Fragment>
	);
};

export default Packages;
