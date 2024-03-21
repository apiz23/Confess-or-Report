// import { handlers } from "@/utils/auth";
// export const { GET, POST } = handlers;

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
	providers: [
		GitHubProvider({
			clientId: process.env.AUTH_GITHUB_ID as string,
			clientSecret: process.env.AUTH_GITHUB_SECRET as string,
		}),
	],
});

export { handler as GET, handler as POST };
