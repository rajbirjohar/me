"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <time>
      {time.toLocaleString("en-US", {
        timeStyle: "medium",
        hour12: false,
      })}{" "}
    </time>
  );
}
