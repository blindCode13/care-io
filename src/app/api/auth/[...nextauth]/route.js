import { loginUser } from "@/actions/server/auth";
import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
        async signIn({ user, account}) {

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
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };