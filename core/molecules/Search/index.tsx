import { Input } from "@/core/atoms/Input";
import { Search as SearchIcon } from "lucide-react";
import css from "./styles.module.css";

export default function Search(props: {
  search: string;
  onSearchChange: (search: string) => void;
}) {
  return (
    <div className={css.search}>
      <SearchIcon className={css.icon} />
      <Input className={css.input} />
    </div>
  );
}
