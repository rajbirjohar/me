import { Experience } from "types/alpine";
import experiences from "@/data/experiences";
import Step from "./Step";
import css from "./styles.module.css";

export default function ListExperiences(props: { all?: boolean }): JSX.Element {
  const groupByYear = (arr: Experience[], property: string) => {
    const group = arr.reduce((acc: any, cur: any) => {
      if (!acc[cur[property]]) {
        acc[cur[property]] = [];
      }
      acc[cur[property]].push(cur);
      return acc;
    }, {});
    return Object.keys(group).map((year) => ({
      year: Number(year),
      events: group[year],
    }));
  };

  if (props.all) {
    return (
      <ul className={css.wrapper}>
        {groupByYear(experiences, "year")
          .sort((a, b) => b.year - a.year)
          .map((value, index) => (
            <li key={index}>
              <h2 className={css.year}>
                <time dateTime={`${value.year}`}>{value.year}</time>
              </h2>
              {value.events.map((step: Experience) => (
                <Step key={step.title} experience={step} />
              ))}
            </li>
          ))}
      </ul>
    );
  }

  return (
    <ul className={css.wrapper}>
      {groupByYear(experiences, "year")
        .sort((a, b) => b.year - a.year)
        .slice(0, 1)
        .map((value, index) => (
          <li key={index}>
            {value.events.slice(0, 3).map((step: Experience) => (
              <Step key={step.title} experience={step} />
            ))}
          </li>
        ))}
    </ul>
  );
}
