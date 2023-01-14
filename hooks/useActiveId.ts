import { useEffect, useState } from "react";

export const useActiveId = (
  itemIds: {
    level: string;
    text: string;
    slug: string;
  }[]
) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },

      {
        rootMargin: "-20% 0% -80% 0px",
      }
    );
    itemIds.forEach((id) => {
      if (document.getElementById(id.slug) as HTMLElement) {
        observer.observe(document.getElementById(id.slug) as HTMLElement);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        if (document.getElementById(id.slug) as HTMLElement) {
          observer.unobserve(document.getElementById(id.slug) as HTMLElement);
        }
      });
    };
  }, [activeId, itemIds]);

  return activeId;
};
