"use client"

import { frontLinks } from "@/constants/frontLinks"
import { useCurrentLocale } from "@/locales/client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FrontNavLinks() {
	const pathName = usePathname()
	const locale = useCurrentLocale()

	return (
		<>
			{frontLinks.map(({ href, title }, index) => (
				<Link
					href={href}
					key={index}
					className={` ${
						pathName === `/${locale}${href}` ? "text-primary  font-black" : "font-light"
					} text-base lg:text-lg capitalize`}
				>
					{title}
				</Link>
			))}
		</>
	)
}
