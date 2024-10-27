import { Skeleton } from "./ui/skeleton";

const SkeletonPost = () => {
	return (
		<div className="flex flex-col space-y-3 border p-2 rounded-md">
			<Skeleton className="h-[100px] w-full rounded-xl animate-pulse" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[200px] animate-pulse" />
				<Skeleton className="h-4 w-[250px] animate-pulse" />
			</div>
		</div>
	);
};

export default SkeletonPost;
