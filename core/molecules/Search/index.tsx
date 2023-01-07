import { IconSearch } from "@tabler/icons";
import css from "./styles.module.css";

export default function Search(props: {
  value: string;
  setValue: (search: string) => void;
}) {
  return (
    <div className={css.searchwrapper}>
      <IconSearch />
      <input
        className={css.search}
        autoComplete="off"
        id="search"
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
}
