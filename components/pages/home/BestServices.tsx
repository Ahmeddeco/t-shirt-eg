import { servicesCard } from "@/constants/cards"
import ServicesCard from "./ServicesCard"
import { Button } from "@/components/ui/button"
import { CircleChevronRight } from "lucide-react"
import Link from "next/link"

export default function BestServices() {
	return (
		<section className=" bg-input dark:bg-card">
			<div className="container mx-auto flex flex-col gap-2 lg:gap-12 items-center justify-center py-12">
				{/* ---------------------------------- title --------------------------------- */}
				<section className="flex lg:flex-row flex-col items-end justify-between w-full">
					<div className="flex flex-col gap-4">
						<h2>
							we always provide <br />
							<span className="text-primary"> best services</span>
						</h2>
						<p className="max-w-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil id mollitia quisquam totam molestias
							possimus modi esse .
						</p>
					</div>
					<Button asChild variant={"link"}>
						{/* TODO edit link */}
						<Link href={"#"}>
							load more
							<CircleChevronRight />
						</Link>
					</Button>
				</section>
				{/* ---------------------------------- cards --------------------------------- */}
				<div className="flex flex-col gap-8 lg:flex-row lg:justify-between items-center w-full">
					{servicesCard.map(({ description, icon, title, titleBr, bgReverse, iconColor }, index) => (
						<ServicesCard
							key={index}
							icon={icon}
							title={title}
							titleBr={titleBr}
							description={description}
							bgReverse={bgReverse}
							iconColor={iconColor}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
