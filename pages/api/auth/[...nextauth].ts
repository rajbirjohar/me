import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // scope: 'read:user user:email',
      // profile(profile: { id; login; email; avatar_url }) {
      //   return {
      //     id: profile.id,
      //     name: profile.login,
      //     email: profile.email, // email can be null! Need to fix this
      //     image: profile.avatar_url,
      //   }
      // },
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_URI,
})
