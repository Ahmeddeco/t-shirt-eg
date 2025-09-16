import { Button } from "@/components/ui/button"
import { House } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
	return (
		<div className="h-dvh flex flex-col items-center justify-center gap-4">
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Button asChild>
				<Link href="/">
					<House />
					Return Home
				</Link>
			</Button>
		</div>
	)
}
