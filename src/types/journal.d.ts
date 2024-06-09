interface Journal {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
}
