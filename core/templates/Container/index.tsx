import React from "react";
import css from "./styles.module.css";

export default function Container(props: {
  heading: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={css.container}>
      <article className={props.className ? props.className : ""}>
        <div className={css.heading}>
          <div className={css.headingcontent}>{props.heading}</div>
        </div>
        <div className={css.content}>{props.children}</div>
      </article>
    </div>
  );
}
