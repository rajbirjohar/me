import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "types/portfolio";
const { Octokit } = require("@octokit/rest");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const headers = {
    Authorization: "Token " + process.env.GITHUB_AUTH_TOKEN,
  };

  //Last updated request
  const portfolio = await octokit.request("/repos/rajbirjohar/Portfolio");
  const lastUpdated = portfolio.data.pushed_at;

  // projects
  const url =
    "https://api.github.com/users/rajbirjohar/repos?sort=updated&per_page=10";
  const response = await fetch(url, { headers: headers });
  const json = await response.json();
  const projects: Project[] = [];

  json.forEach((project: any) => {
    projects.push({
      title: project.name,
      stars: project.stargazers_count,
      pushed: project.pushed_at,
      url: project.html_url,
      description: project.description,
      language: project.language,
    });
  });
  
  //return
  return res.status(200).json({
    projects: projects,
    lastUpdated: lastUpdated,
  });
}
