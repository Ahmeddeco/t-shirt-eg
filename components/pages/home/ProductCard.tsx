import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

type Props = {
	isBestSell: boolean
	image: string
	price: string
	title: string
}

export default function ProductCard({ isBestSell, image, price, title }: Props) {
	return (
		<Card
			className={` ${
				isBestSell ? "bg-foreground text-background" : "bg-background text-foreground"
			} w-md aspect-3/4 py-0  relative`}
		>
			{isBestSell && (
				<Button variant={"primary"} className="absolute -top-6 left-0 rounded-md z-10 ">
					best sell
				</Button>
			)}
			<CardContent className="relative  flex flex-col gap-8 items-center justify-center h-full z-20">
				<Image src={image} alt={title} fill className="object-cover " />
			</CardContent>

			{/* ---------------------------------- title --------------------------------- */}
			<div
				className={` ${
					isBestSell
						? " bg-gradient-to-t from-foreground via-foreground  to-transparent"
						: " bg-gradient-to-t from-background via-background  to-transparent"
				} absolute bottom-0 left-0 w-full h-1/3 z-30 flex flex-col items-center justify-end gap-4 py-4 rounded-b-xl `}
			>
				<h2>{title}</h2>
				<div className="flex w-full px-4 items-center justify-between">
					<h4>${price}</h4>
					<Button variant={isBestSell ? "primary" : "default"} size={"default"}>
						add to cart
					</Button>
				</div>
			</div>
		</Card>
	)
}
