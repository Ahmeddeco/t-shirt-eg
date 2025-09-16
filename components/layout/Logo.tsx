import { Shirt } from "lucide-react"
import Link from "next/link"

export default function Logo() {
	return (
		<Link href="/" className="flex items-end gap-0.5 capitalize ">
			<Shirt className="text-4xl" color="#f97316" fill="#f97316" size={28} />
			<span className="text-xl font-black leading-none">t-shirt</span>
		</Link>
	)
}
