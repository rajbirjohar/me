import { Featured } from "types/portfolio";
import FeaturedCard from "./FeaturedCard";
import css from "./styles.module.css";
import chromax from "/public/chromax.svg";
import fearlessmouse from "/public/fearlessmouse.png";

export default function FeaturedProjects() {
  const featured: Featured[] = [
    {
      id: "fearless",
      title: "Fearless Mouse",
      description: (
        <>
          <p>
            A studio I&#39;m starting with a partner, trying to see how high we
            can dream.
          </p>
        </>
      ),
      url: "https://fearlessmouse.com/",
      image: fearlessmouse,
    },
    {
      id: "chromax",
      title: "Chromax",
      description: (
        <>
          <p>
            Chromax is a nifty app in the making that helps paint aesthetic
            color palettes based on a little math.
          </p>
        </>
      ),
      url: "https://www.chromax.app/",
      image: chromax,
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description: (
        <>
          <p>
            My digital garden, where I pour all my creativity, inspiration, and
            thoughts.
          </p>
        </>
      ),
      url: "https://rajbir.io/",
      image: "",
    },
  ];
  return (
    <div className={css.wrapper}>
      {featured.map((featured) => (
        <FeaturedCard key={featured.id} featured={featured} />
      ))}
    </div>
  );
}
