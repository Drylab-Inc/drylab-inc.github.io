import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/navbar";
// import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  metadataBase: new URL("https://precedent.dev"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={cx(sfPro.variable, inter.variable)}>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <div className="w-full0 fixed h-screen" />
          {/* <Suspense fallback="..."> */}
          <Navbar />
          {/* </Suspense> */}
          <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
          {/* <VercelAnalytics /> */}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </>

    // </ClerkProvider>
  );
}
