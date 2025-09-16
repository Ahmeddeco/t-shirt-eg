import React from "react"
import { Button } from "../ui/button"
import { signOut } from "@/auth"

export default function SignOut() {
	return (
		<form
			className="w-full"
			action={async () => {
				"use server"
				await signOut()
			}}
		>
			<Button type="submit" size={"wide"}>
				Sign out
			</Button>
		</form>
	)
}
