import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { getUserFromDb } from './lib/dados'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async credentials => {
        // let user = null

        //  const pwHash = saltAndHashPassword(credentials.password)
        const user = await getUserFromDb(
          String(credentials.email),
          String(credentials.password)
        )

        console.log('usar', user)

        if (!user) {
          throw new Error('credeicnias invalida')
        }

        return user
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  jwt: {
    maxAge: 10 * 60,
  },
  session: {
    maxAge: 10 * 60,
  },
  pages: {
    signIn: '/auth/login',
  },
})
