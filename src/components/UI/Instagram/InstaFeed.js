import React, { useEffect, useState } from 'react';

const url = `/src/functions/instagram.js`;

function useInstagram() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
			});
		// fetch(url)
		// 	.then(async (response) => {
		// 		try {
		// 			const data = await response.json();
		// 			console.log('response data', data);
		// 		} catch (error) {
		// 			console.log('Error happened here!');
		// 			console.log(error);
		// 		}
		// 	})
		// 	.then((data) => {
		// 		setPosts(data);
		// 	});
	}, []);
	return posts;
}

const InstaFeed = () => {
	const gramz = useInstagram();
	return (
		<div>
			{gramz.map((gram) => (
				<a href={gram.url} key={gram.id}>
					<img src={gram.thumbnail} alt={gram.caption} />
				</a>
			))}
		</div>
	);
};

export default InstaFeed;
