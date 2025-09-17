import React from "react"
import FrontNavLinks from "./FrontNavLinks"
import Logo from "./Logo"
import { Separator } from "../ui/separator"
import SocialLinks from "./SocialLinks"

export default function Footer() {
	return (
		<footer className="min-h-96 bg-foreground text-background flex flex-col items-center justify-center gap-8">
			<Logo />
			<nav className="flex items-center gap-8">
				<FrontNavLinks />
			</nav>
			<h6 className="text-center w-lg text-pretty text-muted-foreground">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolore vero? Modi magnam quisquam deserunt qui
				obcaecati natus facilis, rerum debitis quo sed iure eligendi veniam? Ducimus quam rem placeat!
			</h6>
			<Separator className="container mx-auto bg-muted-foreground" />
			<nav className="flex items-center gap-8">
				<SocialLinks />
			</nav>
			<h6 className="text-center w-lg text-pretty text-muted-foreground capitalize">
				©️Copyright 2025 - All rights reserved
			</h6>
		</footer>
	)
}
