import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { env } from "@/env" // o process.env directamente si no usas el sistema T3

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET, // <- importante también
})
