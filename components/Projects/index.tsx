import fetcher from "@/util/fetcher";
import useSWR from "swr";
import { Project } from "types/portfolio";
import ProjectCard from "@/components/Projects/ProjectCard";
import css from "./styles.module.css";

export default function Projects(props: { all?: boolean }): JSX.Element {
  const { data, error } = useSWR(`/api/github`, fetcher);
  if (error) {
    return (
      <p>
        <em>Something went wrong.</em>
      </p>
    );
  }
  if (!data) {
    return (
      <p>
        <em>Loading...</em>
      </p>
    );
  }
  return (
    <ul className={css.wrapper}>
      {data.projects
        .sort((a: Project, b: Project) => b.stars - a.stars)
        .map((project: Project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            stars={project.stars}
            pushed={project.pushed}
            url={project.url}
            description={project.description}
            language={project.language}
          />
        ))}
    </ul>
  );
}
