import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import LastUpdated from "@/ui/specialized/LastUpdated";
import { Theme } from "../Theme";
import styles from "./styles.module.css";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.section}>
					<div>
						<p className={styles.tag}>
							Inspired by the endless wonderful designs on the web.
						</p>
					</div>
				</div>
				<div className={styles.section}>
					<div className={styles.links}>
						<h4>Elsewhere</h4>
						<Link
							href="https://github.com/rajbirjohar"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.link}
						>
							Github <ArrowUpRightIcon />
						</Link>
					</div>
					<div className={styles.links}>
						<h4>Connect</h4>
						<span>hello@rajbir.io</span>
					</div>
				</div>
			</div>
			<Theme />
			<LastUpdated />
		</footer>
	);
};
