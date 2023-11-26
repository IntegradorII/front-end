import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { getServerSession } from 'next-auth'
import Aut0Provider from 'next-auth/providers/auth0'
import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { signJwt } from '@/utils/jwt/jwt'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Aut0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt ({ token, user, account }) {
      // console.log('token', token)
      // console.log('usera', user)
      // console.log('account', account)
      if (user && account) { // is sign in or sign up event
        token.auth_token = await signJwt({
          sub: token.sub,
          id_token: account.id_token,
          access_token: account.access_token,
          expires_at: account.expires_at
        })
      }
      return token
    },
    async session ({ session, token }) {
      session.auth_token = token.auth_token as string
      return session
    }
  }
}

export async function auth (...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []) {
  return await getServerSession(...args, authOptions)
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
