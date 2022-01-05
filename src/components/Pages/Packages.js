import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import styles from './Packages.module.css';

// Import components
import Card from '../UI/Card';
import PackageItem from '../UI/PackageItem';

const PACKAGES_OPTIONS = [
	{
		id: '0',
		name: 'Seniors',
	},
	{
		id: '1',
		name: 'Family Photos',
	},
	{
		id: '2',
		name: 'Weddings',
	},
	{
		id: '3',
		name: 'Couples',
	},
];

const Packages = () => {
	const packagesList = PACKAGES_OPTIONS.map((option) => (
		<PackageItem id={option.id} key={option.id} name={option.name} />
	));

	return (
		<div>
			<Card>
				{' '}
				<ul>{packagesList}</ul>
			</Card>
		</div>
	);
};

export default Packages;
