// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option

// import type { NextRequest } from 'next/server'
// import NextAuth from 'next-auth'
// import authConfig from './auth.config'

// const { auth } = NextAuth(authConfig)

// export default auth(async function middleware(req: NextRequest) {
//   console.log('mid', req.method)
// })
