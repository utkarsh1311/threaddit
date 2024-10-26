import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<header className="flex justify-between p-4">
			<span className="text-6xl font-extrabold text-zinc-900">Threaddit</span>
			<Button variant={"ghost"} className="rounded-full h-14 w-14">
				<GitHubLogoIcon className="scale-[2]" />
			</Button>
		</header>
	);
};

export default Header;
