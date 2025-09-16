import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export const isAdmin = async () => {
  const session = await auth()
  let userRole

  try {
    userRole = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!
      }, select: {
        role: true
      }
    })
  } catch (error) {
    console.error(error)
  }
  if (userRole?.role !== 'admin') {
    redirect('/')
  }
  return session
}


export const isOwner = async () => {
  const session = await auth()
  let userRole

  try {
    userRole = await prisma.user.findUnique({
      where: {
        email: session?.user?.email!
      }, select: {
        role: true
      }
    })
  } catch (error) {
    console.error(error)
  }
  if (userRole?.role !== 'owner') {
    redirect('/')
  }
  return session
}
