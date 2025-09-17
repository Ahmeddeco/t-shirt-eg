import { socialLink } from "@/constants/frontLinks"
import Link from "next/link"
import React from "react"

export default function SocialLinks() {
	return (
		<>
			{socialLink.map(({ href, icon }) => (
				<Link href={href} key={href} target="_blank">
					{React.createElement(icon, { size: 24 })}
				</Link>
			))}
		</>
	)
}
