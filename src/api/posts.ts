const BASE_URL = "https://www.reddit.com/r";

const getSubRedditPosts = async (subreddit: string) => {
	const response = await fetch(`${BASE_URL}/${subreddit}.json`);
	const posts = await response.json();

	const postsData = posts.data.children.map(
		({
			data,
		}: {
			data: {
				id: string;
				title: string;
				author: string;
				created_utc: number;
				permalink: string;
			};
		}) => {
			return {
				id: data.id,
				title: data.title,
				author: data.author,
				created_utc: data.created_utc,
				permalink: data.permalink,
			};
		}
	);
	
	return postsData;
};

export { getSubRedditPosts };
