import type { NextApiRequest, NextApiResponse } from 'next'
const { Octokit } = require('@octokit/rest')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const headers = {
    Authorization: 'Token ' + process.env.GITHUB_AUTH_TOKEN,
  }

  //Last updated request
  const portfolio = await octokit.request('/repos/rajbirjohar/Portfolio')
  const lastUpdated = portfolio.data.pushed_at

  // projects
  const url =
    'https://api.github.com/users/rajbirjohar/repos?sort=updated&per_page=10'
  const response = await fetch(url, { headers: headers })
  const json = await response.json()
  const projectsList = []

  json.forEach((p) => {
    projectsList.push({
      name: p.name,
      stars: p.stargazers_count,
      pushed: p.pushed_at,
      url: p.html_url,
      description: p.description,
      language: p.language,
    })
  })

  //return
  return res.status(200).json({
    repos: projectsList,
    lastUpdated: lastUpdated,
  })
}
