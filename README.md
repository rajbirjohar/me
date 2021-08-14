## Portfolio

> Author: Rajbir Johar

## Purpose

This repo/project is meant to serve as an extension of my experiences and projects. I strive for a minimal, yet concise design which serves only the neccessary information. There is nothing worse than having to read through blocks of random and off-tangent writing.

## Structure

The structure follows the typical Next.JS default structure.

```bash
├── master
│   ├── components
│   │   ├── Header.js
│   │   ├── Layout.js
│   │   ├── ...
│   ├── pages
│   │   ├── index.js
│   │   ├── _app.js
│   │   ├── _document.js
│   │   ├── api
│   │   │   ├── github.js
│   │   │   ├── nowplaying.js
│   │   │   ├── toptracks.js
│   │   ├── ...
│   ├── lib
│   │   ├── fetcher.js
│   │   ├── notion.js
│   │   ├── spotify.js
│   ├── styles
│   │   ├── global.css
│   │   ├── header.module.css
│   │   ├── layout.module.css
│   │   ├── ...
│   ├── ...
├── staging
│   │   ├── pages
│   │   ├── components
│   │   ├── lib
│   │   ├── styles
│   ├── ...
└── .gitignore
```

Components are within the `components` folder and the pages are within the `pages` folder.

The styling is all done via `css modules` to create clean designs and clean code structure.

Imports are done via absolute imports so there is no need to `../../../..` your way back to a parent folder and down another nested folder.

The `master` is for production and the `staging` branch is for staging and developing. When making PRs please make them for the `staging` branch and assign me for code review.

## Stack

<img alt="Next JS" src="https://img.shields.io/badge/nextjs-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/> <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" /> <img alt="GitHub" src="https://img.shields.io/badge/GithHub%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Spotify" src="https://img.shields.io/badge/Spotify-1ED760?style=for-the-badge&logo=spotify&logoColor=white" />

This project has been bootstrapped using `yarn create next-app` and makes api calls to Github's and Spotify's public APIs. You will need to place your own secret `TOKENS` in your own `.env.local` file and of course, do not commit your secrets. Environment variables are how we access secured and private data from third party APIs. This allows us to fetch/read/write/delete data while ensuring that no one else has access to it asides from those authorized.

Instructions on how to acquire said `TOKENS` are as followed:

### Github

#### Github Statistics and Projects

1. Try cloning/forking is repo on your own machine. Next, head to - Github account settings > Developer Settings > Personal Tokens > Generate New Token. Then check the **user box.**
2. Then within the root of the project, open up a terminal and type `touch .env.local` to create a new `.env.local` file. Open up the file and paste in your new secret key like shown below without `<>`.
3. Finally, navigate to `/pages/api/github` and replace all mentions of my github username within the urls with your github username. (Better yet, set an env variable!)

   `GITHUB_AUTH_TOKEN=<SECRET-GH-TOKEN>`

4. Once you've completed the above steps, your copy of this website should generate statistics and projects from your own Github profile.

### Spotify

1. Log into your [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
2. Click **Create an App**.
3. Fill out the name and description and click **create**.
4. Click **Show Client Secret**.
5. Save your Client ID and Secret somewhere safe. You will need these later on.
6. Click **Edit Settings**.
7. Add `http://localhost:3000` as a redirect URI.

You have properly set up a Spotify app and the correct credentials to make your requests.

Since we only need to grant access once, we will follow the [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow).

8. Use the example URL below to get an idea of what it might look like. Go ahead and swap out the `client_id` without the `<>` and scopes for your own. Then paste this within your browser while your project is running.

```Javascript
https://accounts.spotify.com/authorize?client_id=<client_id>&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read%20user-read-recently-played
```

9. After authorization, you'll be sent back to `redirect_uri`. Within the URL, there is a `code` query parameter. Save the value without `<>`.

```
http://localhost:3000/callback?code=<NApCCg..BkWtQ>
```

10. Afterwards, you will need to retrieve the refresh token by generating a Base64 encoded string containing the client ID and secret you got from earlier. Use this [encoding tool](https://www.base64encode.org) to encode it online. The format should be `client_id:client_secret`. Replace the values in the command below with your new encoded string and the `code` parameter from the last step without the `<>`.

```bash
curl -H "Authorization: Basic <base64 encoded client_id:client_secret>" -d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

11. This returns a JSON response containing a `refresh_token`. This token is valid indefinitely unless you revoke access, so we'll want to save this in an environment variable (Note, it will display two tokens, you want the second token).

12. Finally, place your `client_id`, `client_secret`, and `refresh_token` within the `.env.local` file.

For reference, I followed this wonderful [guide](https://leerob.io/blog/spotify-api-nextjs).

## Guestbook

The purpose of the guestbook is for users to sign in using their Github account and being able to post messages on my website for the world to see.

The guestbook page is significant because it is a fully functional CRUD application. You can create, read, update, and delete your messages. So this section will go into depth on how I acheived this. I mainly used [MongoDB](https://www.mongodb.com/) and [NextAuth](https://next-auth.js.org/).

### MongoDB

I chose MongoDB because it allowed me to easily structure my data in a in a relational way where I can store the sessions, users and messages in each of its own collections instead of just lumping them together in one collection. Its generous free teir also allowed me to cut costs since this is a relatively low impact functionality (for now).

The steps to get the required env variables are as followed:

1. Create a free MongoDB atlas account and create a database. It does not need to have any collections yet to start working.

2. Click on the **Connect** button and select the second option. You will be presented with your `MONGODB_URI` in the format below where `user` will be your MongoDB access name and `<password>` will be your access password without the `<>`. You can create a new access user via the **Database Access** tab on the left under Security. I recommend allowing MongoDB to generate your password or using a password generator to keep your database safe.

```bash
mongodb+srv://user:<password>@portfoliocluster.abc12.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

Then, `myFirstDatabase` is where you will replace the name of your database incase you named it something different. It will also be the env variable for `MONGODB_DB`.

I recommend creating two databases and filling out your production env variables and development env variables accordingly so you don't mix production and dummy data.

### NextAuth

NextAuth is my authentication library of choice because I was not going to write my own library/api and their initial start up code was incredibly easy to add to my project. They offer a wide variety of functions and great integration with MongoDB which worked out perfectly for my purposes.

All you really need to know is that NextAuth requires a `NEXTAUTH_URL` as the canonical url of your production website so as to perform auth callbacks. `NEXTAUTH_SECRET` should be any random string of characters or a protected password. It is not required but strongly recommended.

#### Github Authentication

I chose Github as my primary OAuth provider because it's really easy to set up and developers and recruiters are my main target audience right now. Follow below to set up your own Github OAuth application.

1. Navigate to Github account settings > Developer Settings > OAuth apps.
2. Click **New OAuth App** and fill out the required information. This is what will display to users when they attempt to login via NextAuth. The important bit is the homepage url and the callback url which works with NextAuth on redirecting users back to the guestbook page. It will be of the format:

```bash
http://localhost:3000/api/auth/callback
```

- or for your production site:

```bash
https://example.com/api/auth/callback
```

3. After this is done, you should now be able to view your `Client ID` which will be place into `GITHUB_ID` and generate a `Client Secret` which will go into `GITHUB_SECRET`

I recommend creating two different OAuth apps so you don't need to switch the callback url every time you are on your dev environment.

Afterwards, you should now have a fully functional CRUD guestbook. If any of these instructions are confusing or do not work, please open an issue and let me know.

I have included a `.env.example` file which you will just need to rename to `.env.local`.
