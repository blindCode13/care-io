import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "./dbConnect";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",

            async authorize(credentials, req) {
                const user = await loginUser({
                    email: credentials.email,
                    password: credentials.password
                });

                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account }) {

            const isExist = await dbConnect('users').findOne({
                email: user.email,
            });
            if (isExist) {
                return true;
            }

            const newUser = {
                provider: account?.provider,
                email: user.email,
                name: user.name,
            };
            const result = await dbConnect('users').insertOne(newUser);

            return result.acknowledged;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
            }
            return session
        }
    },
}