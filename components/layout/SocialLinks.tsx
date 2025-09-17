import { socialLink } from "@/constants/frontLinks"
import Link from "next/link"
import React from "react"

type Props = {}

export default function SocialLinks({}: Props) {
	return (
		<>
			{socialLink.map(({ href, icon, title }) => (
				<Link href={href} key={href} target="_blank">
					{React.createElement(icon, { size: 24 })}
				</Link>
			))}
		</>
	)
}
