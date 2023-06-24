"use client"; // Error components must be Client Components

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section>
      <h1>Something went wrong!</h1>
    </section>
  );
}
