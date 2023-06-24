export default async function sitemap() {
  const routes = ["", "/info"].map((route) => ({
    url: `https://rajbir.io${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
