import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const journalDirectory = join(process.cwd(), "_journal");

export function getJournalSlugs() {
	return fs.readdirSync(journalDirectory);
}

export function getJournalBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(journalDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { ...data, slug: realSlug, content } as Journal;
}

export function getAllJournals(): Journal[] {
	const slugs = getJournalSlugs();
	const journals = slugs
		.map((slug) => getJournalBySlug(slug))
		.sort((journal1, journal2) => (journal1.date > journal2.date ? -1 : 1));
	return journals;
}

export async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown);
	return result.toString();
}
