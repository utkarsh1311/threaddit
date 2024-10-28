interface PostProps {
	title: string;
	author: string;
	timestamp: number;
	url: string;
}

const BASE_URL = "https://reddit.com/";

function Post({ title, author, timestamp, url }: PostProps) {
	return (
		<a
			href={BASE_URL + url}
			target="_blank"
			className="shadow-sm border rounded-md p-4 bg-white hover:shadow-md transition-shadow sm:p-2"
		>
			<h2 className="text-md font-semibold mb-2 text-zinc-800  sm:mb-4 ">{title}</h2>
			<div className="flex justify-between items-center text-xs text-zinc-500">
				<span className="">{"u/" + author}</span>
				<span>{new Date(timestamp * 1000).toDateString()}</span>
			</div>
		</a>
	);
}

export default Post;
