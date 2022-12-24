import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "types/alpine";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const headers = {
    Authorization: "Token " + process.env.GITHUB_AUTH_TOKEN,
  };

  // projects
  const url =
    "https://api.github.com/users/rajbirjohar/repos?sort=updated";
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
  });
}
