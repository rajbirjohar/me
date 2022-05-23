import experiences from "./data";
import Step from "./Step";
import css from './Experiences.module.css'

export default function Experiences(): JSX.Element {
  return (
    <ul className={css.wrapper}>
      {experiences.map((step) => (
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
    </ul>
  );
}
