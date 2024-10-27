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
			className="shadow-sm border rounded-md p-4 bg-white hover:shadow-md transition-shadow"
		>
			<h2 className="text-lg font-semibold mb-2 text-zinc-700">{title}</h2>
			<div className="flex justify-between items-center text-xs text-gray-500">
				<span className="">{"u/" + author}</span>
				<span>{new Date(timestamp * 1000).toDateString()}</span>
			</div>
		</a>
	);
}

export default Post;
