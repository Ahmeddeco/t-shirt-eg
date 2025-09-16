import { signIn } from "@/auth"
import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc"

export default function SignIn() {
	return (
		<form
			action={async () => {
				"use server"
				await signIn("google", { redirectTo: "/api/user/creation" })
			}}
		>
			<Button type="submit">
				<FcGoogle />
				Signin with Google
			</Button>
		</form>
	)
}
