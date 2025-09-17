"use client"

import CircleProgress from "@/components/shared/CircleProgress"
import { circleOurPerformanceProgress } from "@/constants/cards"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export default function OurPerformance() {
	return (
		<section className="container mx-auto py-12 flex flex-col gap-12 items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<h2 className="text-center">
					our performance <br /> on printing services
				</h2>
				<h6 className="text-center max-w-xl">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem illo maiores totam in, voluptate,
					necessitatibus, labore blanditiis dignissimos maxime quasi nulla ut consequatur officiis voluptatem tempora.
					Quaerat similique itaque possimus?
				</h6>
			</div>
			<div className="w-full flex flex-wrap items-center justify-center gap-8">
				{circleOurPerformanceProgress.map(({ title, value }, index) => (
					<div key={index} className="flex flex-col items-center justify-center gap-8">
						<CircleProgress value={value} strokeWidth={2}/>
						<h4 className="text-muted-foreground uppercase">{title}</h4>
					</div>
				))}
			</div>
		</section>
	)
}
