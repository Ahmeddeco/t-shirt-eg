import { auth } from "@/auth"

export const isSession = async () => {
  const session = await auth()
  const user = session?.user
  return user
}