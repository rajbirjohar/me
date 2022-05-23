import { Experience } from "types/portfolio";
import experiences from "@/data/experiences";
import Step from "./Step";
import css from "./ListExperiences.module.css";

export default function ListExperiences(props: { all?: boolean }): JSX.Element {
  return (
    <ul className={css.wrapper}>
      {props.all ? (
        <>
          {experiences.map((step: Experience) => (
            <Step
              key={step.title}
              title={step.title}
              position={step.position}
              endDate={step.endDate}
              startDate={step.startDate}
              caption={step.caption}
              icon={step.icon}
            />
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
              caption={step.caption}
              icon={step.icon}
            />
          ))}
        </>
      )}
    </ul>
  );
}
