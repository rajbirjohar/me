import { parse } from "date-fns";

export function parseDate(raw: string) {
	const d = parse(raw, "yyyy-MM-dd", new Date()); // treated as local date
	return d;
}
