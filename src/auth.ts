import NextAuth from 'next-auth'
import authConfig from './auth.config'

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  jwt: {
    maxAge: 10 * 60,
  },
  session: {
    maxAge: 10 * 60,
  },
  // pages: {
  //   signIn: '/auth/login',
  // },
})
