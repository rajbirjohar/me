import Header from "@/organisms/Header";
import css from "./styles.module.css";

export default function Page(props: { children: React.ReactNode }) {
  return (
    <>
      <Header sticky />
      <div className={css.wrapper}>{props.children}</div>
    </>
  );
}
