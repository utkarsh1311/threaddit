
interface PostProps {
	title: string;
	summary: string;
	author: string;
	timestamp: string;
}

function Post({ title, summary, author, timestamp }: PostProps) {
	return (
		<div className="shadow-sm border rounded-md p-4 bg-white hover:shadow-md transition-shadow">
			<h2 className="text-lg font-semibold mb-2">{title}</h2>
			<p className="text-gray-600 mb-4 text-sm font-secondary">{summary}</p>
			<div className="flex justify-between items-center text-xs text-gray-500">
				<span>{author}</span>
				<span>{timestamp}</span>
			</div>
		</div>
	);
}

export default Post;
