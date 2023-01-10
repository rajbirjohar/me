import React from "react";
import css from "./styles.module.css";

export default function Container(props: {
  heading: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div>{props.heading}</div>
      </header>
      <div className={css.content}>{props.children}</div>
    </div>
  );
}
