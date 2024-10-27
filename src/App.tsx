import { useState } from "react";
import AddSubReddit from "./components/AddSubReddit";
import Header from "./components/Header";
import SubReddit from "./components/SubReddit";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
							<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
								<h2 className="text-2xl font-bold">No Subreddits added</h2>
								<p className="text-lg">Add a subreddit to get started</p>
							</div>
						)}
						<TransitionGroup component={null}>
							{subReddits.map((subReddit: string) => (
								<CSSTransition key={subReddit} timeout={400} classNames="item">
									<SubReddit
										key={subReddit}
										subReddit={subReddit}
										setSubReddits={setSubReddits}
									/>
								</CSSTransition>
							))}
						</TransitionGroup>
					</div>
				</div>
				<AddSubReddit setSubreddits={setSubReddits} />
			</div>
		</div>
	);
};

export default App;
