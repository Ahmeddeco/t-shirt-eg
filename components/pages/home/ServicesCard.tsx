import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import React from "react"

type Props = {
	icon: LucideIcon
	iconColor?: string
	title: string
	titleBr: string
	description: string
	bgReverse?: boolean
}

export default function ServicesCard({ description, icon, title, titleBr, bgReverse = false, iconColor }: Props) {
	return (
		<Card className={`${bgReverse && "bg-foreground text-background"} w-md aspect-10/12 `}>
			<CardContent className="flex flex-col gap-8 items-center justify-center h-full">
				{React.createElement(icon, { size: 72, fill: iconColor, absoluteStrokeWidth: true })}
				<h2 className="text-center">
					{title}
					<br />
					{titleBr}
				</h2>
				<h6 className="text-center">{description}</h6>
			</CardContent>
		</Card>
	)
}
