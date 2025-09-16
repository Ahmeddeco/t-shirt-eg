import { ThemeButton } from "../theme/ThemeButton"
import FrontMobileNav from "./FrontMobileNav"
import FrontNavLinks from "./FrontNavLinks"
import LanguageButton from "./LanguageButton"
import Logo from "./Logo"
import UserButton from "./UserButton"

export default function Header() {
	return (
		<header className="fixed z-50 inset-0 h-12 bg-card/90 border-b shadow-md backdrop-blur flex items-center justify-between px-4 lg:px-24">
			<Logo />
			{/* --------------------------- Desktop Navigation --------------------------- */}
			<nav className="lg:flex hidden items-center gap-4">
				<FrontNavLinks />
			</nav>
			{/* ----------------------------- Desktop Buttons ---------------------------- */}
			<div className="lg:flex hidden items-center gap-4">
				<ThemeButton />
				<LanguageButton />
				<UserButton />
			</div>
			{/* ---------------------------- Mobile Navigation --------------------------- */}
			<nav className="lg:hidden block">
				<FrontMobileNav />
			</nav>
		</header>
	)
}
