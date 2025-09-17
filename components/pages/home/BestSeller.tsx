import { Button } from "@/components/ui/button"
import { productCards } from "@/constants/cards"
import { CircleChevronRight } from "lucide-react"
import Link from "next/link"
import ProductCard from "./ProductCard"

export default function BestSeller() {
	return (
		<section className="bg-card  min-h-[80vh] py-12">
			<div className="container mx-auto flex flex-col gap-12">
				{/* ---------------------------------- title --------------------------------- */}
				<div className="flex flex-col lg:flex-row items-end justify-between w-full">
					<div className="flex flex-col gap-6">
						<h2>
							best seller <br /> t-Shirt <span className="text-primary">online shop </span>
						</h2>
						<p className="max-w-lg">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis molestiae, fuga, ullam, rerum cumque
							mollitia sequi aperiam asperiores consectetur exercitationem quasi maxime eligendi! Ad nam ratione non,
							soluta ipsam ab.
						</p>
					</div>
					<Button asChild variant={"link"}>
						<Link href={"/our-products"}>
							see all products
							<CircleChevronRight />
						</Link>
					</Button>
				</div>
				{/* ---------------------------------- cards --------------------------------- */}
				<div className="flex flex-wrap items-center justify-center gap-8">
					{productCards.map(({ isBestSell, image, price, title }, index) => (
						<ProductCard key={index} isBestSell={isBestSell} image={image} price={price} title={title} />
					))}
				</div>
			</div>
		</section>
	)
}
