import { getAllJournals } from "@/lib/journal";
import { Heading, HeadingWrapper } from "@/ui/layout/Heading";
import { Journal } from "@/ui/specialized/Journal";
import styles from "./page.module.css";

export default function Journals() {
	const journals = getAllJournals();

	return (
		<div className={styles.wrapper}>
			<HeadingWrapper>
				<Heading>Journals</Heading>
			</HeadingWrapper>
			<section className={styles.section}>
				{journals.length < 1 && <p>No musings today.</p>}
				{journals.map((journal) => (
					<Journal key={journal.slug} journal={journal} />
				))}
			</section>
		</div>
	);
}
