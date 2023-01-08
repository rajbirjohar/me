import css from "./styles.module.css";

export default function GradientButton(props: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className={css.herobuttoncontainer}>
      <div className={css.herobuttonwrapper}>
        <span className={css.herobuttonbg} />
        <button className={css.herogradientbutton}>{props.children}</button>
      </div>
    </div>
  );
}
