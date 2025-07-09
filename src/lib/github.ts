import { cache } from "react";

const endpoint = "https://api.github.com";

export const getLastUpdate = cache(async () => {
	if (!process.env.GITHUB_REPO) {
		throw new Error("GITHUB_REPO env var missing");
	}
	if (!process.env.GITHUB_TOKEN) {
		console.warn("No GITHUB_TOKEN - using unauthenticated quota");
	}
	const res = await fetch(
		`${endpoint}/repos/${process.env.GITHUB_REPO}/commits?per_page=1`,
		{
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				Accept: "application/vnd.github+json",
				"X-GitHub-Api-Version": "2022-11-28",
			},
			// GitHub → ETag header lets Next revalidate efficiently
			next: { revalidate: 60 * 60 }, // 1 h
		},
	);

	if (!res.ok) {
		throw new Error(res.statusText);
	}

	const [latest] = (await res.json()) as Array<{
		sha: string;
		commit: { author: { date: string } };
		html_url: string;
	}>;

	return {
		sha: latest.sha,
		url: latest.html_url,
		updatedAt: latest.commit.author.date, // ISO string
	};
});
