// import NextAuth from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import type { NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "./db";

// export const authOptions = {
// 	adapter: PrismaAdapter(prisma),
// 	providers: [
// 		GitHubProvider({
// 			clientId: process.env.AUTH_GITHUB_ID as string,
// 			clientSecret: process.env.AUTH_GITHUB_SECRET as string,
// 		}),
// 	],
// } satisfies NextAuthOptions;
// export const { handlers, auth, signOut } = NextAuth(authOptions);

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHubProvider({
			clientId: process.env.AUTH_GITHUB_ID as string,
			clientSecret: process.env.AUTH_GITHUB_SECRET as string,
		}),
	],
};

export const { handlers, auth, signOut } = NextAuth(authOptions);