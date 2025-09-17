import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import SignIn from "./sign-in"
import SignOut from "./sign-out"
import { isSession } from "@/functions/helpers/isSession"

export default async function UserButton() {
	const user = await isSession()

	return (
		<>
			{user ? (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<div className="size-6 relative rounded-full">
							<Image src={user.image!} alt={"user"} fill className="rounded-full object-cover" />
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>
							<div className="w-full aspect-square relative ">
								<Image src={user.image!} alt={"user"} fill className="rounded-lg object-cover" />
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>{user.name}</DropdownMenuItem>
						<DropdownMenuItem>{user.email}</DropdownMenuItem>
						<DropdownMenuItem>
							<SignOut />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			) : (
				<SignIn />
			)}
		</>
	)
}
