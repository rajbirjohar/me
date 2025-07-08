import { getLastUpdate } from "@/lib/github";
import { formatDistanceToNow } from "date-fns";
import styles from "./styles.module.css";
import Link from "next/link";

export default async function LastUpdated() {
  const { updatedAt, url, sha } = await getLastUpdate();

  return (
    <span
      title={new Date(updatedAt).toLocaleString()}
      className={styles.wrapper}
    >
      <span className={styles.sha}>
        {sha}
      </span>
      <time dateTime={updatedAt} className={styles.time}>
        Updated {formatDistanceToNow(new Date(updatedAt))} ago
      </time>
    </span>
  );
}
