import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Post from "./Post";
import { getSubRedditPosts } from "@/api/posts";
import { useQuery } from "@tanstack/react-query";
import SkeletonPost from "./SkeletonPost";

interface SubRedditViewProps {
	subReddit: string;
	setSubReddits: React.Dispatch<React.SetStateAction<string[]>>;
}

interface PostData {
	id: string;
	title: string;
	author: string;
	created_utc: number;
}

const SubReddit: React.FC<SubRedditViewProps> = ({
	subReddit,
	setSubReddits,
}) => {
	const { data, isLoading, error, refetch, isRefetching } = useQuery({
		queryKey: ["subReddits", subReddit],
		queryFn: () => getSubRedditPosts(subReddit),
	});

	const deleteSubReddit = () => {
		setSubReddits(prev => {
			const updatedSubReddits = prev.filter(sub => sub !== subReddit);
			localStorage.setItem("subReddits", JSON.stringify(updatedSubReddits));
			return updatedSubReddits;
		});
	};

	return (
		<div className="h-full w-1/4 shrink-0 snap-start p-2 rounded-md lg:w-1/3 md:1/2 sm:w-full transition-transform  duration-200">
			<div className="h-full p-2 rounded-lg border bg-card text-card-foreground shadow-sm bg-white flex flex-col">
				{/* header for the list */}
				<div className="flex justify-between p-2">
					<span className="self-center font-bold text-orange-600">
						r/{subReddit}
					</span>
					<DropdownMenu>
						<DropdownMenuTrigger className="focus:outline-none">
							<Button className="rounded-full h-10 w-10" variant={"ghost"}>
								<DotsVerticalIcon />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="font-primary relative right-10">
							<DropdownMenuItem onClick={() => refetch()}>
								Refresh
							</DropdownMenuItem>
							<DropdownMenuItem onClick={deleteSubReddit}>
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* list of posts */}
				<div className="flex-1 overflow-y-auto scrollbar-hide">
					<div className="grid grid-cols-1 gap-2">
						{(isLoading || isRefetching) &&
							Array.from({ length: 5 }).map((_, i) => <SkeletonPost key={i} />)}

						{error && <div>Error: {error.message}</div>}
						{data &&
							data.data.children.map(({ data }: { data: PostData }) => (
								<Post
									key={data.id}
									title={data.title}
									author={data.author}
									timestamp={data.created_utc}
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubReddit;
