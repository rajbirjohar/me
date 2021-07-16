const { Octokit } = require('@octokit/rest')

const githubFetch = async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const headers = {
    Authorization: 'Token ' + process.env.GITHUB_AUTH_TOKEN,
  }

  //Followers request
  const followers = await octokit.request(
    '/users/rajbirjohar/followers?per_page=100'
  )
  const followerCount = followers.data.length

  //Last updated request
  const portfolio = await octokit.request('/repos/rajbirjohar/Portfolio')
  const portfolioUpdated = portfolio.data.pushed_at

  //Stars request
  const stars = await octokit.request('/users/rajbirjohar/repos')
  const starsCount = stars.data
    .filter((repo) => !repo.fork)
    .reduce((acc, item) => {
      return acc + item.stargazers_count
    }, 0)

  //Repos request
  const reposStarred = await octokit.request(
    '/users/rajbirjohar/starred?per_page=100'
  )
  const starredCount = reposStarred.data.length

  //Orgs request
  const userOrgs = await octokit.request('/user/orgs')
  const orgsCount = userOrgs.data.length

  // projects
  const url = 'https://api.github.com/users/rajbirjohar/repos'
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
    stars: starsCount,
    followers: followerCount,
    starred: starredCount,
    orgsCont: orgsCount,
    repos: projectsList,
    portfolioLastUpdated: portfolioUpdated,
  })
}

export default githubFetch
