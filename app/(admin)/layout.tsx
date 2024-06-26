import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandMenu } from "@/components/commandMenu";
import { NextAuthProvider } from "@/components/nextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Admin - UTHM Voice",
	description: "Uthm Voice project",
};

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<CommandMenu />
					<NextAuthProvider>{children}</NextAuthProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
