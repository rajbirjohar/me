import css from "./styles.module.css";

export default function Wave() {
  return (
    <svg
      id="visual"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 960 80.38"
      className={css.wave}
    >
      <path d="m0,7.38l22.8.3c22.9.4,68.5,1,114.2,8.4,45.7,7.3,91.3,21.3,137,22.3,45.7,1,91.3-11,137.2-21.3C457,6.68,503-1.92,548.8.38c45.9,2.3,91.5,15.7,137.2,25.3,45.7,9.7,91.3,15.7,137,13.7s91.3-12,114.2-17l22.8-5v63H0V7.38Z" />
    </svg>
  );
}
