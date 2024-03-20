// import { handlers } from "@/utils/auth";

// export const { GET, POST } = handlers;

import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "@/utils/db";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.AUTH_GITHUB_ID as string,
			clientSecret: process.env.AUTH_GITHUB_SECRET as string,
		}),
	],
} satisfies NextAuthConfig);

export { handler as GET, handler as POST };
