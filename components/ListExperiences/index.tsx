import { Experience } from "types/portfolio";
import experiences from "@/data/experiences";
import Step from "./Step";
import css from "./ListExperiences.module.css";

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

  return (
    <ul className={css.wrapper}>
      {props.all ? (
        <>
          {groupByYear(experiences, "year")
            .sort((a, b) => b.year - a.year)
            .map((value, index) => (
              <div key={index}>
                <h3 className={css.year}>{value.year}</h3>
                {value.events.map((step: Experience) => (
                  <Step
                    key={step.title}
                    title={step.title}
                    position={step.position}
                    endDate={step.endDate}
                    startDate={step.startDate}
                    year={step.year}
                    caption={step.caption}
                    icon={step.icon}
                  />
                ))}
              </div>
            ))}
        </>
      ) : (
        <>
          {experiences.slice(0, 3).map((step: Experience) => (
            <Step
              key={step.title}
              title={step.title}
              position={step.position}
              endDate={step.endDate}
              startDate={step.startDate}
              year={step.year}
              caption={step.caption}
              icon={step.icon}
            />
          ))}
        </>
      )}
    </ul>
  );
}
