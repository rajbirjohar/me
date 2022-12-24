import { NextApiRequest, NextApiResponse } from "next";
const { Octokit } = require("@octokit/rest");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  //Last updated request
  const portfolio = await octokit.request("/repos/rajbirjohar/alpine");
  const lastUpdated = portfolio.data.pushed_at;

  //return
  return res.status(200).json({
    lastUpdated: lastUpdated,
  });
}
