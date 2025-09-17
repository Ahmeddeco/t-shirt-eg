import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const session = await auth()
  const user = session?.user
  try {
    const dbUser = await prisma.user.findUnique({ where: { email: user?.email as string } })
    if (!dbUser) {
      await prisma.user.create({ data: { name: user?.name as string, email: user?.email as string, image: user?.image } })
    }
  } catch (error) {
    console.error(error)
  }
  return NextResponse.redirect(new URL("/", request.url))
}
