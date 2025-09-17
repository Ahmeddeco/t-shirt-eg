import { Button } from "@/components/ui/button"
import { CloudUpload } from "lucide-react"
import Image from "next/image"
import React from "react"

export default function Hero() {
	return (
		<section className="bg-primary lg:pb-0 ">
			<div className="flex flex-col-reverse gap-12 lg:flex-row justify-center items-center w-full lg:h-[100vh] h-auto container mx-auto  ">
				<div className="lg:w-1/2 w-full h-full flex flex-col gap-4 justify-center items-center lg:items-start ">
					<h3 className="uppercase text-neutral-900">t-shirt print</h3>
					<h1 className="text-neutral-900">
						we print and sale <br />
						your vision
					</h1>
					<h6 className="text-neutral-800 max-w-md text-balance  ">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, vitae ipsam harum accusamus eos provident
						error modi nostrum repellat maxime similique adipisci repellendus excepturi distinctio ut, eaque quidem
						sint. Illo?
					</h6>
					<Button variant={"black"} className="rounded-full">
						upload your design
						<CloudUpload />
					</Button>
				</div>
				<div className="relative lg:w-1/2 w-full lg:h-full h-96 ">
					<Image
						src={"/hero1.webp"}
						alt={"hero"}
						fill
						className="object-cover bg-radial from-white via-transparent to-transparent "
					/>
				</div>
			</div>
		</section>
	)
}
