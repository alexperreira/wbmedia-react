import React, { useLayoutEffect, useRef, useState } from 'react';
// import classes from './Hello.module.css';
import styled from 'styled-components';

const Div = styled.div`
	position: absolute;
	top: -1em;
	left: 1.5rem;
	font-size: 5.5rem;
	padding: 0;
	margin: 0;
	color: #ded5cc;
	font-family: 'Raleway';
	text-transform: uppercase;
	z-index: 998;
	transform: translateX(${({ animate }) => (animate ? '0' : '100vw')});
	transition: transform 1s;
	opacity: ${({ animatePercent }) =>
		animatePercent ? `${animatePercent / 100}` : `1`};
	& > h2 {
		margin: 0;
	}
	@media screen and (max-width: 1200px) {
		font-size: 4.5rem;
	}

	@media screen and (max-width: 1024px) {
		font-size: 3.5rem;
		margin-top: 10px;
	}

	@media screen and (max-width: 768px) {
		font-size: 3rem;
		margin: 0;
	}

	@media screen and (max-width: 480px) {
		font-size: 2rem;
		margin-top: 10px;
	}
`;

const Hello = (props) => {
	const [show, doShow] = useState({ item: false });
	const [percentShown, setPercentShown] = useState({ item: 0 });
	const itemRef = useRef(null);

	useLayoutEffect(() => {
		const topPosition = (element) => element.getBoundingClientRect().top;
		const getHeight = (element) => element.offsetHeight;
		const itemPosition = topPosition(itemRef.current);

		const itemHeight = getHeight(itemRef.current);

		const onScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;

			if (itemPosition < scrollPosition) {
				// Element scrolled to
				doShow((state) => ({ ...state, item: true }));

				let itemPercent = ((scrollPosition - itemPosition) * 100) / itemHeight;
				if (itemPercent > 100) itemPercent = 100;
				if (itemPercent < 0) itemPercent = 0;

				setPercentShown((prevState) => ({
					...prevState,
					item: itemPercent,
				}));
			} else if (itemPosition > scrollPosition) {
				// Element scrolled away (up)
				doShow((state) => ({ ...state, item: false }));
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<Div
			animate={show.item}
			animatePercent={percentShown.item}
			ref={itemRef}
			// className={classes.helloDiv}
		>
			<h2>{props.text}</h2>
		</Div>
	);
};

export default Hello;
