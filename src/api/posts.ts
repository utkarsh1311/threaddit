const BASE_URL = "https://www.reddit.com/r/";

const getSubRedditPosts = async (subreddit: string) => {
	const response = await fetch(`${BASE_URL}/${subreddit}.json`);
	const posts = await response.json();
	return posts;
};

export { getSubRedditPosts };
