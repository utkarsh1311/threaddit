import { Plus } from "lucide-react";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const AddSubReddit = () => {
	const [open, setOpen] = useState(false);

	const formSchema = z.object({
		subredditName: z
			.string()
			.min(2, { message: "Subreddit name must be at least 2 letters" })
			.max(50),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			subredditName: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		setOpen(!open);
		console.log(values);
	}

	const handleClose = (): void => {
		form.reset();
		setOpen(!open);
	};

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogTrigger className="absolute bottom-10 right-10 h-16 w-16 rounded-full shadow-md grid place-content-center bg-black">
				<Plus color="white" strokeWidth={3} />
			</DialogTrigger>
			<DialogContent className="w-96 rounded-lg ">
				<DialogHeader>
					<DialogTitle className="text-left mb-4 text-xl">
						Enter the subreddit name
					</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="subredditName"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="sr-only">Subreddit Name</FormLabel>
									<FormControl>
										<Input className="h-10" placeholder="" {...field} />
									</FormControl>
									<FormDescription>
										Enter the name of the subreddit you want to add with r/.
									</FormDescription>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="w-full bg-zinc-900 shadow-md text-zinc-100" type="submit">
							Submit
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default AddSubReddit;
