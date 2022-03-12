import 'isomorphic-fetch';

const url = `https://www.instagram.com/graphql/query/?query_hash=8c2a529969ee035a5063f2fc8602a0fd&variables=%7B%22id%22%3A%224476803220%22%2C%22first%22%3A12%2C%22after%22%3A%22QVFCd01XY1ZUX3c4Ym5ORUZuNmhILVBLVi1pVGJpeEdDR3ZNMEdJYVFIbXFYVXJSSXh0Tmhfd251X2hBWVBLc0x3ZkxjTlplSGxKR0NiU3o5clFUR1BCWQ%3D%3D%22%7D`;

// const Url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url,permalink&access_token=IGQVJXSmlmWXhkQ2gwMC10c0VseW5BLVN5bjlCMXFOM3ZAMQXNPMlVNaHBRMzA5T3dLdXBMX2RLN2xOTUNvd3VQcFQ2SWU3amcwUWREdjJHWEtfVEc1TEZAqeTBZATU13cThOSnZAvajN6eUlIOG9lWkxfcHhrc01oQ0RUU2ZAR`;

const cache = {
	lastFetch: 0,
	posts: [],
};

async function getPosts() {
	// first see if we have a cache in 30 mins
	const timeSinceLastFetch = Date.now() - cache.lastFetch;
	if (timeSinceLastFetch <= 1800000) {
		return cache.posts;
	}
	const data = await fetch(url).then((res) => res.json());
	const posts = slimUpPosts(data);
	cache.lastFetch = Date.now();
	cache.posts = posts;
	console.log(data);
	return data;
}

function slimUpPosts(response) {
	return response.data.user.edge_owner_to_timeline_media.edges.map((edge) => ({
		thumbnail: edge.node.thumbnail_src,
		url: `https://instagram.com/p/${edge.node.shortcode}`,
		caption: edge.node.edge_media_to_caption.edges[0].node.text,
		id: edge.node.id,
	}));
	// return response.data.map((dat) => ({
	// 	thumbnail: dat.media_url,
	// 	url: dat.permalink,
	// 	caption: dat.caption,
	// 	id: dat.id,
	// }));
}

exports.handler = async function (event, context, callback) {
	const posts = await getPosts();
	callback(null, {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(posts),
	});
};
