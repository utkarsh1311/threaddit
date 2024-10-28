import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
	return (
		<header className="flex justify-between p-4 sm:px-1">
			<span className="text-6xl font-extrabold text-zinc-900 sm:text-4xl sm:font-bold">Threaddit</span>

			<a
				href="https://github.com/utkarsh1311/threaddit"
				aria-label="GitHub Repository"
				target="_blank"
				className="p-4 grid place-content-center rounded-full hover:bg-gray-100 h-10 w-10"
			>
				<GitHubLogoIcon className="scale-[2]" />
			</a>
		</header>
	);
};

export default Header;
