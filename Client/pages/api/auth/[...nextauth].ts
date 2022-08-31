import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

const getOptions = (req: any, res: any) => ({
    // Configure one or more authentication providers
    providers: [
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
        }: {
            user: {
                name?: string | null | undefined | any;
                email?: string | null | undefined;
                image?: string | null | undefined;
            };
        }) {
            try {
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
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        },
        async session({ session }: { session: any }) {
            console.log(session);
            try {
                session.user = {
                    ...session.user.name,
                };
                return session;
            } catch (e) {
                console.log(e);
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
