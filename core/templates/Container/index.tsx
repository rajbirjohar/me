import React from "react";
import css from "./styles.module.css";
import Wave from "@/atoms/Wave";

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
          <Wave />
        </div>

        <div className={css.content}>{props.children}</div>
      </article>
    </div>
  );
}
