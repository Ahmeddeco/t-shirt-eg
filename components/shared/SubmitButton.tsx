"use client"

import React from "react"
import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"
import { Button } from "../ui/button"

type SubmitButtonProps = {
	text: string
	size?: "default" | "sm" | "lg" | "icon" | "wide"
}

export default function SubmitButton({ text, size = "wide" }: SubmitButtonProps) {
	const { pending } = useFormStatus()

	return (
		<>
			{pending ? (
				<Button disabled size={size}>
					<Loader2 className="animate-spin" /> Please wait
				</Button>
			) : (
				<Button type="submit" size={size}>
					{text}
				</Button>
			)}
		</>
	)
}
