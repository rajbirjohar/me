interface Journal {
  slug: string;
  title: string;
  date: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
}
