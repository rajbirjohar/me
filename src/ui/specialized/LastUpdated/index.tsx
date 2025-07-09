import { formatDistanceToNow } from "date-fns";
import { getLastUpdate } from "@/lib/github";
import styles from "./styles.module.css";

export default async function LastUpdated() {
	const { updatedAt } = await getLastUpdate();

	return (
		<div
			title={new Date(updatedAt).toLocaleString()}
			className={styles.wrapper}
		>
			<time dateTime={updatedAt} className={styles.time}>
				Updated {formatDistanceToNow(new Date(updatedAt))} ago
			</time>
		</div>
	);
}
