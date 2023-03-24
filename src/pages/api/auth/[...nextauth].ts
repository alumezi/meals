/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import NextAuth, { type Session, type NextAuthOptions } from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";
import FacebookProvider from "next-auth/providers/facebook";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
// import { prisma } from "../../../server/db";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session(data: { session: Session }) {
      return data.session;
    },
  },
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),
  ],
};

export default NextAuth(authOptions);
