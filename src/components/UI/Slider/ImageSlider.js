import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageSlider.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;
	const timeout = useRef(null);

	useEffect(() => {
		const nextSlide = () => {
			setCurrent((current) => (current === length - 1 ? 0 : current + 1));
		};

		timeout.current = setTimeout(nextSlide, 3000);

		return function () {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		};
	}, [current, length]);

	const nextSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}

		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
		}
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	console.log(current);

	if (!Array.isArray(slides) || length <= 0) {
		return null;
	}

	return (
		<section className={styles.slider}>
			<IoIosArrowBack className={styles.leftArrow} onClick={prevSlide} />
			<IoIosArrowForward className={styles.rightArrow} onClick={nextSlide} />
			{slides.map((slide, index) => {
				return (
					<div
						className={
							index === current
								? `${styles.active} ${styles.slide}`
								: `${styles.slide}`
						}
						key={index}
					>
						{index === current && (
							<img
								key={index}
								src={slide.image}
								className={styles.image}
								alt=''
							/>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
