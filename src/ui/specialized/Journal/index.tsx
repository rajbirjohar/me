import { format } from "date-fns";
import Link from "next/link";
import { parseDate } from "@/utils/parseDate";
import styles from "./styles.module.css";

const Journal = ({ journal }: { journal: Journal }) => {
	const date = parseDate(journal.date);
	return (
		<article key={journal.slug} className={styles.article}>
			<Link href={`/journal/${journal.slug}`} className={styles.link}>
				{journal.title}
			</Link>
			<div className={styles.underline} />
			<time>{format(date, "M.d.y")}</time>
		</article>
	);
};

export { Journal };
