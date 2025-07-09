import { cache } from "react";

type OLDoc = {
  title: string;
  authors?: { name: string }[];
  publish_date?: string;
  description?: string | { value: string };
  cover?: { large: string; medium: string; small: string };
  key: string;
};

export const getBookByISBN = cache(async (isbn: string) => {
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } }); // 24 h

  if (!res.ok) throw new Error(`OL ${res.status}: ${await res.text()}`);

  const data = (await res.json()) as Record<string, OLDoc>;
  const book = data[`ISBN:${isbn}`];
  if (!book) {
    // return quietly if book not found. We don't want to crash the UI.
    console.warn(`Book with ISBN ${isbn} not found in Open Library`);
    return null;
  }

  const description =
    typeof book.description === "string"
      ? book.description
      : book.description?.value ?? "";

  return {
    title: book.title,
    authors: book.authors?.map((a) => a.name).join(", ") ?? "Unknown author",
    year: book.publish_date?.slice(-4) ?? "—",
    description,
    cover:
      book.cover?.medium ??
      `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`, // guaranteed fallback
    url: `https://openlibrary.org${book.key}`,
  };
});
