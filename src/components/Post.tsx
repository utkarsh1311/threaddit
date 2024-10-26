
interface PostProps {
	title: string;
	author: string;
	timestamp: number;
}

function Post({ title, author, timestamp }: PostProps) {
	return (
		<div className="shadow-sm border rounded-md p-4 bg-white hover:shadow-md transition-shadow">
			<h2 className="text-lg font-semibold mb-2 text-zinc-700">{title}</h2>
			<div className="flex justify-between items-center text-xs text-gray-500">
				<span>{"u/" + author}</span>
				<span>{new Date(timestamp * 1000).toLocaleString()}</span>
			</div>
		</div>
	);
}

export default Post;
