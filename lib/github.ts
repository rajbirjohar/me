import { Octokit } from "@octokit/rest";
import { cache } from "react";
import "server-only";

export const getProfileData = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });

  const response = await octokit.request("GET /user", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data;
});

export const getRepo = cache(async () => {
  {
    const octokit = new Octokit({
      auth: process.env.GITHUB_AUTH_TOKEN,
    });

    const response = await octokit.request("GET /repos/{owner}/{repo}", {
      owner: "rajbirjohar",
      repo: "alpine",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return response.data;
  }
});
