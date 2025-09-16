import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Separator } from "../ui/separator"
import FrontNavLinks from "./FrontNavLinks"
import { ThemeButton } from "../theme/ThemeButton"
import LanguageButton from "./LanguageButton"
import UserButton from "./UserButton"
import Logo from "./Logo"

export default function FrontMobileNav() {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						<Logo />
					</SheetTitle>
					<Separator />
				</SheetHeader>
				<nav className="flex flex-col gap-8 px-8">
					<FrontNavLinks />
				</nav>
				<SheetFooter className="flex flex-row items-center justify-between border-t ">
					<ThemeButton />
					<LanguageButton />
					<UserButton />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
