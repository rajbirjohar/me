import supabase from "@/lib/supabase/public";
import Head from "next/head";
import css from "./styles.module.css";
import { useState } from "react";
import { useDisableScroll } from "@/hooks/useDisableScroll";
import Expanded from "@/components/Gallery/Expanded";
import Gallery from "@/components/Gallery";

export type Photo = {
  name: string;
  date: Date;
  url: string;
};

export default function GalleryPage(props: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);
  useDisableScroll(selected !== null);
  const { photos } = props;
  return (
    <>
      <Head>
        <title>Rajbir Johar | Gallery</title>
        <meta
          content="Some of my best photos that I've captured with my camera."
          name="description"
        />
      </Head>
      <header>
        <h1>Gallery</h1>
      </header>
      <div className={css.section}>
        <p>
          Recently, I&#39;ve been trying to capture how I see the world.
          Here&#39;s a glimpse through some of work. You can find more on my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.instagram.com/rajbir.johar/"}
          >
            Instagram
          </a>
          .
        </p>
        <Expanded photo={selected} setPhoto={setSelected} />
        <Gallery photos={photos} setPhoto={setSelected} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Select all photos from the bucket
  const data = await supabase.storage.from("gallery").list("photos");

  // Extract the file name and generate a public url for each photo

  let photos: { name: string; date: Date; url: string }[] = [];
  data.data?.map((path) => {
    const url = supabase.storage
      .from("gallery")
      .getPublicUrl(`photos/${path.name}`).data.publicUrl;
    photos.push({
      name: path.name,
      date: path.metadata.lastModified || path.created_at,
      url: url,
    });
  });

  return { props: { photos } };
}
