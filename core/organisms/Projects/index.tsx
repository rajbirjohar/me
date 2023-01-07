import fetcher from "@/lib/fetcher";
import css from "./styles.module.css";
import useSWR from "swr";
import { Project } from "types/alpine";
import ProjectCard from "../../molecules/ProjectCard";
import { useState } from "react";
import Search from "@/molecules/Search";

export default function ListProjects(props: { all?: boolean }) {
  const { data, error } = useSWR<{ projects: Project[] }>(
    "/api/github/projects",
    fetcher
  );

  const [search, setSearch] = useState("");

  if (error) {
    return (
      <em>There seems to have been trouble loading my projects from Github.</em>
    );
  }
  if (!data) {
    return <em>Loading...</em>;
  }

  const filteredProjects: Project[] = data.projects.filter(
    ({ title, description, language }) => {
      const searchString = `${title.toLowerCase()} ${language?.toLowerCase()} ${description?.toLowerCase()}`;
      return searchString.includes(search.toLowerCase());
    }
  );

  if (props.all) {
    return (
      <>
        <Search value={search} setValue={setSearch} />
        {filteredProjects.length === 0 && (
          <p>
            <em>
              Woah. It looks like you tried to find something that doesn&#39;t
              exist yet. If you would like pitch an idea, let me know.
            </em>
          </p>
        )}
        <div className={css.grid}>
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className={css.grid}>
      {data.projects.slice(0, 3).map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
