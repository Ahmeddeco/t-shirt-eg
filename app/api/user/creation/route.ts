import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, response: NextResponse) {
  const session = await auth()
  const user = session?.user
  try {
    let dbUser = await prisma.user.findUnique({ where: { email: user?.email! } })
    if (!dbUser) {
      await prisma.user.create({ data: { name: user?.name!, email: user?.email!, image: user?.image } })
    }
  } catch (error) {
    console.error(error)
  }
  return NextResponse.redirect(new URL("/", request.url))
}
