import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        CredentialsProvider({
            id:"credentials",
            name:"credentials",
            async authorize(credentials){
                await connect()

                try {
                    const user = await User.findOne( {email: credentials.email} )

                    if(user){
                        //check password
                        const isPassWordCorrect = await bcrypt.compare(
                            credentials.password, 
                            user.password
                            );
                             if(isPassWordCorrect){
                                return user
                             }else{
                                console.error(error);
                             }

                    } else {
                        console.error(error)
                    }
                } catch (error) {
                    console.error(error)
                }
            },
            
        }),
    ],
    pages: {
        error: "/dashboard/login"
    }
});

export { handler as GET, handler as POST};