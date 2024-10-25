import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const SubRedditView = () => {
	return (
		<div className="h-full w-1/4 lg:w-1/3 sm:w-full shrink-0 snap-start p-2 rounded-md ">
			<div className=" h-full  p-2  rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
				<div className="flex justify-between p-4">
					<span className=" self-center">r/books</span>
					<Button className="rounded-full h-10 w-10" variant={"ghost"}>
						<DotsVerticalIcon />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SubRedditView;
