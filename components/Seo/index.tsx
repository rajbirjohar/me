import Head from "next/head";
import globalMeta from "@/util/meta";

export default function Seo(props: {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: any;
  ogImgUrl?: string;
  structuredData?: any;
  children?: any;
}) {
  return (
    <Head>
      <title>{props.title ?? globalMeta.siteName}</title>
      <meta
        name="description"
        content={props.description ?? globalMeta.description}
      />
      <link rel="canonical" href={props.canonicalUrl ?? globalMeta.siteUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/*
        	Open graph meta tags.
    	*/}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={globalMeta.siteName} />
      <meta property="og:type" content={props.ogType} />
      <meta
        property="og:description"
        content={props.description ?? globalMeta.description}
      />
      <meta
        property="og:image"
        content={props.ogImgUrl ?? globalMeta.siteLogo}
      />
      <meta
        property="og:url"
        content={props.canonicalUrl ?? globalMeta.siteUrl}
      />

      {props.children}
    </Head>
  );
}
