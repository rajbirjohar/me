import { motion } from "framer-motion";
import { Featured } from "types/portfolio";
import FeaturedCard from "./FeaturedCard";
import css from "./styles.module.css";

export default function FeaturedProjects() {
  const featured: Featured[] = [
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
      image: "",
    },
    {
      id: "nexus",
      title: "Nexus",
      description: (
        <>
          <p>
            Nexus is a fully fledged course review system and database for
            students.
          </p>
        </>
      ),
      url: "https://nexus-ucr.vercel.app/",
      image: "",
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
    <motion.ul className={css.wrapper}>
      {featured.map((featured) => (
        <FeaturedCard key={featured.id} featured={featured} />
      ))}
    </motion.ul>
  );
}
