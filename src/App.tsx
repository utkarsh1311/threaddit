import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";
import { Plus } from "lucide-react";
import { ScrollArea } from "./components/ui/scroll-area";
import SubRedditView from "./components/SubRedditView";

const App = () => {
	return (
		<div className="grid p-4 place-content-center min-h-screen  grid-cols-1 grid-rows-1 font-primary">
			<div className="flex flex-col gap-4 relative">
				<header className="flex justify-between p-4  ">
					<span className="text-6xl font-extrabold">Threadit</span>
					<Button variant={"ghost"} className="rounded-full h-14 w-14">
						<GitHubLogoIcon className="scale-[2]" />
					</Button>
				</header>
				<ScrollArea className=" flex-grow p-2 rounded-lg border bg-card text-card-foreground shadow-sm bg-neutral-50">
					<div className="h-full flex  scrollbar-hide snap-x snap-mandatory  overflow-y-auto ">
						<SubRedditView />
						<SubRedditView />
					</div>
				</ScrollArea>
				<Button className="absolute bottom-10 right-10 h-16 w-16 rounded-full shadow-md">
					<Plus />
				</Button>
			</div>
		</div>
	);
};

export default App;
