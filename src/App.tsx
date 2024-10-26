import { GitHubLogoIcon } from "@radix-ui/react-icons";
import AddSubReddit from "./components/AddSubReddit";
import SubRedditView from "./components/SubRedditView";
import { Button } from "./components/ui/button";

const App = () => {
	return (
		<div className="grid p-4 place-content-center min-h-screen grid-cols-1 grid-rows-1 font-primary">
			<div className="flex flex-col gap-4 relative">
				<header className="flex justify-between p-4">
					<span className="text-6xl font-extrabold text-zinc-900">
						Threaddit
					</span>
					<Button variant={"ghost"} className="rounded-full h-14 w-14">
						<GitHubLogoIcon className="scale-[2]" />
					</Button>
				</header>
				<div className="flex-grow p-2 bg-card text-card-foreground bg-zinc-50 rounded-md border shadow-sm">
					<div className="h-[calc(100vh-10rem)] flex overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory  rounded-md">
						<SubRedditView />
						<SubRedditView />
						<SubRedditView />
						<SubRedditView />
						<SubRedditView />
					</div>
				</div>
				<AddSubReddit />
			</div>
		</div>
	);
};

export default App;
