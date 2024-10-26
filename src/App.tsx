import { useState } from "react";
import AddSubReddit from "./components/AddSubReddit";
import Header from "./components/Header";
import SubReddit from "./components/SubReddit";

const App = () => {
	const [subReddits, setSubReddits] = useState<string[]>(
		JSON.parse(localStorage.getItem("subReddits") || "[]")
	);

	return (
		<div className="grid p-4 place-content-center min-h-screen grid-cols-1 grid-rows-1 font-primary">
			<div className="flex flex-col gap-4 relative">
				<Header />
				<div className="flex-grow p-2 bg-card text-card-foreground bg-zinc-50 rounded-md border shadow-sm">
					<div className="h-[calc(100vh-10rem)] flex overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory  rounded-md">
						{subReddits.length === 0 && (
							<div className="flex items-center justify-center w-full">
								<h1 className="text-2xl text-gray-500">No subreddits added</h1>
							</div>
						)}
						{subReddits.map((subReddit: string) => (
							<SubReddit key={subReddit} subReddit={subReddit} />
						))}
					</div>
				</div>
				<AddSubReddit setSubreddits={setSubReddits} />
			</div>
		</div>
	);
};

export default App;
