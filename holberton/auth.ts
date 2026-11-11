import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { fetchUser } from "@/lib/data";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    theme: {
        brandColor: "#1ED2AF",
        logo: "/logo.png",
        buttonText: "#ffffff",
    },
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            authorize: async (credentials) => {
                const email = credentials.email;
                const password = credentials.password;
                if (typeof email !== "string" || typeof password !== "string") {
                    return null;
                }

                const user = await fetchUser(email);
                if (!user) return null;
                const passwordsMatch = await bcrypt.compare(password, user.password);
                if (!passwordsMatch) return null;
                return { id: user.id, name: user.name, email: user.email };
            },
        }),
    ],
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth;
        },
    },
});
