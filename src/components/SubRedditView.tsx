import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Post from "./Post";

interface RedditPost {
	id: string;
	title: string;
	summary: string;
	timestamp: string;
	author: string;
}

const posts: RedditPost[] = [
	{
		id: "1",
		title: "The Great Gatsby: A Timeless Classic",
		summary:
			"Discussing F. Scott Fitzgerald's masterpiece and its enduring appeal.",
		author: "u/literatureLover",
		timestamp: "2023-04-15T14:30:00Z",
	},
	{
		id: "2",
		title: "New Sci-Fi Release: 'Quantum Dreams'",
		summary:
			"A review of the latest mind-bending science fiction novel by Sarah Chen.",
		author: "u/scifi_enthusiast",
		timestamp: "2023-04-14T18:45:00Z",
	},
	{
		id: "3",
		title: "The Art of War: Sun Tzu's Timeless Wisdom",
		summary:
			"Exploring the ancient Chinese military treatise and its modern applications: what can we learn from Sun Tzu?",
		author: "u/history_buff",
		timestamp: "2023-04-14T10:15:00Z",
	},
	{
		id: "1",
		title: "The Great Gatsby: A Timeless Classic",
		summary:
			"Discussing F. Scott Fitzgerald's masterpiece and its enduring appeal.",
		author: "u/literatureLover",
		timestamp: "2023-04-15T14:30:00Z",
	},
	{
		id: "2",
		title: "New Sci-Fi Release: 'Quantum Dreams'",
		summary:
			"A review of the latest mind-bending science fiction novel by Sarah Chen.",
		author: "u/scifi_enthusiast",
		timestamp: "2023-04-14T18:45:00Z",
	},
	{
		id: "3",
		title: "The Art of War: Sun Tzu's Timeless Wisdom",
		summary:
			"Exploring the ancient Chinese military treatise and its modern applications: what can we learn from Sun Tzu?",
		author: "u/history_buff",
		timestamp: "2023-04-14T10:15:00Z",
	},
	{
		id: "1",
		title: "The Great Gatsby: A Timeless Classic",
		summary:
			"Discussing F. Scott Fitzgerald's masterpiece and its enduring appeal.",
		author: "u/literatureLover",
		timestamp: "2023-04-15T14:30:00Z",
	},
	{
		id: "2",
		title: "New Sci-Fi Release: 'Quantum Dreams'",
		summary:
			"A review of the latest mind-bending science fiction novel by Sarah Chen.",
		author: "u/scifi_enthusiast",
		timestamp: "2023-04-14T18:45:00Z",
	},
	{
		id: "3",
		title: "The Art of War: Sun Tzu's Timeless Wisdom",
		summary:
			"Exploring the ancient Chinese military treatise and its modern applications: what can we learn from Sun Tzu?",
		author: "u/history_buff",
		timestamp: "2023-04-14T10:15:00Z",
	},
	{
		id: "1",
		title: "The Great Gatsby: A Timeless Classic",
		summary:
			"Discussing F. Scott Fitzgerald's masterpiece and its enduring appeal.",
		author: "u/literatureLover",
		timestamp: "2023-04-15T14:30:00Z",
	},
	{
		id: "2",
		title: "New Sci-Fi Release: 'Quantum Dreams'",
		summary:
			"A review of the latest mind-bending science fiction novel by Sarah Chen.",
		author: "u/scifi_enthusiast",
		timestamp: "2023-04-14T18:45:00Z",
	},
	{
		id: "3",
		title: "The Art of War: Sun Tzu's Timeless Wisdom",
		summary:
			"Exploring the ancient Chinese military treatise and its modern applications: what can we learn from Sun Tzu?",
		author: "u/history_buff",
		timestamp: "2023-04-14T10:15:00Z",
	},
	// Add more sample posts as needed
];

const SubRedditView = () => {
	return (
		<div className="h-full w-1/4 shrink-0 snap-start p-2 rounded-md lg:w-1/3 md:1/2 sm:w-full">
			<div className="h-full p-2 rounded-lg border bg-card text-card-foreground shadow-sm bg-white flex flex-col">
				{/* header for the list */}
				<div className="flex justify-between p-2">
					<span className="self-center">r/books</span>
					<DropdownMenu>
						<DropdownMenuTrigger className="focus:outline-none">
							<Button className="rounded-full h-10 w-10" variant={"ghost"}>
								<DotsVerticalIcon />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="font-primary relative right-10">
							<DropdownMenuItem>Refresh</DropdownMenuItem>
							<DropdownMenuItem>Delete</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* list of posts */}
				<div className="flex-1 overflow-y-auto scrollbar-hide">
					<div className="grid grid-cols-1 gap-2">
						{posts.map(post => (
							<Post
								key={post.id}
								title={post.title}
								summary={post.summary}
								author={post.author}
								timestamp={post.timestamp}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubRedditView;
