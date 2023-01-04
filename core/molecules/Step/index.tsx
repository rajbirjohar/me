import { Experience, SubStep } from "types/alpine";
import css from "./styles.module.css";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons";

function Substep(props: { substep: SubStep }) {
  const { substep } = props;
  if (!substep) {
    return <></>;
  }
  return (
    <div className={css.substep}>
      <div className={css.icon}>
        <substep.icon width={16} height={16} />
      </div>
      <div>
        <h4 className={css.title}>{substep.title}</h4>
        <time className={css.date} dateTime={`${substep.range}`}>
          {substep.range}
        </time>
        <div className={css.caption}>{substep.caption}</div>
      </div>
    </div>
  );
}

export default function Step(props: { experience: Experience }): JSX.Element {
  const { experience } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.icon}>
        <experience.icon width={20} height={20} />
      </div>
      <div>
        {experience.url ? (
          <h3 className={css.title}>
            <Link href={experience.url}>
              <>
                {experience.title} <IconArrowUpRight className={css.externalicon} />
              </>
            </Link>
          </h3>
        ) : (
          <h3 className={css.title}>{experience.title}</h3>
        )}
        <time className={css.date} dateTime={`${experience.month}`}>
          {experience.month}
        </time>
        <div className={css.caption}>{experience.caption}</div>
        {experience.substeps && (
          <div className={css.substepwrapper}>
            {experience.substeps.map((substep, index) => (
              <Substep key={index} substep={substep} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
