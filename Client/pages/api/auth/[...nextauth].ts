import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

const getOptions = (req: any, res: any) => ({
    // Configure one or more authentication providers
    providers: [
        CredentialProvider({
            async authorize(credentials) {
                const baseUrl = process.env.BASE_URL;
                const response: any = await fetch(`${baseUrl}/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials?.email.trim(),
                        password: credentials?.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                // Returning token to set in session

                return {
                    tokens: data?.data?.tokens,
                    ...data.data.user,
                };
            },
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_APP_ID || '',
            clientSecret: process.env.FACEBOOK_SECRET || '',
        }),
    ],
    callbacks: {
        async signIn({
            user,
            account,
        }: {
            account: any;
            user: {
                name?: string | null | undefined | any;
                email?: string | null | undefined;
                image?: string | null | undefined;
                cookies?: any;
                avatar?: string | null | undefined;
                _id?: string;
                address?: string | null | undefined;
                phone?: string | null | undefined;
                tokens?: string;
            };
        }) {
            try {
                if (account.type !== 'credentials') {
                    const resD: any = await fetch(`${process.env.BASE_URL}/auth/google`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: user.name,
                            email: user.email,
                            avatar: user.image,
                        }),
                    });

                    const cookies = resD.headers.raw()['set-cookie'];
                    res.setHeader('Set-Cookie', cookies);
                    const data = await resD.json();
                    user.name = {
                        name: data?.data?.name,
                        email: data?.data?.email,
                        avatar: data?.data?.avatar,
                        _id: data?.data?._id,
                        phone: data?.data?.phone,
                        address: data?.data?.address,
                        toReview: data?.data?.toReview,
                    };
                } else {
                    user.name = {
                        name: user?.name,
                        email: user?.email,
                        avatar: user?.avatar,
                        _id: user?._id,
                        address: user?.address,
                        phone: user?.phone,
                        tokens: user?.tokens,
                    };
                }
                return true;
            } catch (e) {
                return false;
            }
        },
        async session({ session }: { session: any }) {
            try {
                session.user = {
                    ...session.user.name,
                };
                session.tokens = {
                    ...session.user.tokens,
                };
                return session;
            } catch (e) {
                return false;
            }
        },
    },
    // cookies: {
    //     sessionToken : {

    //     }
    // }
});

export default (req: any, res: any) => NextAuth(req, res, getOptions(req, res));
