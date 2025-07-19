import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { getLastUpdate } from "@/lib/github";
import styles from "./styles.module.css";

export default async function LastUpdated() {
	const { updatedAt, sha, url } = await getLastUpdate();

	return (
		<Link
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.wrapper}
		>
			<time dateTime={updatedAt} className={styles.time}>
				{formatDistanceToNow(new Date(updatedAt))} ago
			</time>{" "}
			— <span>{sha.slice(0, 7)}</span>
		</Link>
	);
}
