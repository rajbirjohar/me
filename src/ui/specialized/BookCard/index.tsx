import Image from "next/image";
import { getBookByISBN } from "@/lib/openlibrary";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/ui/core/HoverCard";
import styles from "./styles.module.css";

export async function BookCard({
	title,
	isbn,
}: {
	title: string;
	isbn: string;
}) {
	const book = await getBookByISBN(isbn);

	// Fallback if book is not found
	if (!book) {
		return <>{title}</>;
	}

	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<span className={styles.trigger}>{title || book.title}</span>
			</HoverCardTrigger>
			<HoverCardContent side="bottom">
				<div className={styles.metadata}>
					{book.cover && (
						<div className={styles.coverwrapper}>
							<Image
								src={book.cover}
								alt={book.title}
								fill
								className={styles.cover}
								sizes="(max-width: 768px) 100vw, 200px"
							/>
						</div>
					)}
					<div className={styles.details}>
						<p className={styles.title}>{book.title}</p>
						<span className={styles.author}>{book.authors}</span>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
