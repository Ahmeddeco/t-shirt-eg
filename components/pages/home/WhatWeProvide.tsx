import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export default function WhatWeProvide() {
	return (
		<section className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 lg:h-[60vh] h-auto lg:pb-0">
			<div className="relative lg:w-1/2 w-full h-full  aspect-square ">
				<Image src={"/WhatWeProvide.webp"} alt={"What We Provide"} fill className="object-cover" />
				<Star
					color="#d4d4d4"
					fill="#d4d4d4"
					size={420}
					className="absolute -z-10 -left-24 lg:-left-28 lg:top-12 -top-12 "
				/>
			</div>
			<div className="lg:w-1/2 w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
				<h2>
					we always provide <br />
					<span className="text-primary"> best services</span> for you
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quis necessitatibus maxime praesentium
					facere laboriosam numquam repellat iste enim architecto fugit nostrum quae quo ducimus totam itaque voluptatum
					quam modi culpa natus fugiat accusantium unde impedit? Sint optio enim expedita recusandae quos assumenda
					saepe nemo nostrum et consequatur?
				</p>
				<Button variant={"primary"}>learn more</Button>
			</div>
		</section>
	)
}
