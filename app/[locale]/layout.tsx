import type { Metadata } from "next"
import "./globals.css"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"
import { ourFileRouter } from "@/app/api/uploadthing/core"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Toaster } from "sonner"
import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import localFont from "next/font/local"

const cairo = localFont({
	src: "../../public/Cairo.ttf",
})

export const metadata: Metadata = {
	title: "T-SHIRT EG",
	description: "An e-commerce app for printed T-shirts",
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: "en" | "ar" }>
}>) {
	const locale = (await params).locale
	console.log("locale", locale)
	return (
		<html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
			<body className={`${cairo.className} antialiased`}>
				<NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Header />
					<main className="mt-12 min-h-dvh  ">{children}</main>
					<Footer />
					<Toaster
						theme="system"
						richColors
						duration={5000}
						icons={{
							success: <CircleCheckBig />,
							warning: <CircleAlert />,
							error: <CircleX />,
						}}
					/>
				</ThemeProvider>
			</body>
		</html>
	)
}
