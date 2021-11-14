import NextAuth from 'next-auth'
import clientPromise from 'lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile: { id; login; email; avatar_url }) {
        return {
          id: profile.id,
          name: profile.login,
          email: profile.email, // email can be null! Need to fix this
          image: profile.avatar_url,
        }
      },
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.MONGODB_URI,
})
