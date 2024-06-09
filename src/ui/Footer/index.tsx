import { Tooltip, TooltipContent, TooltipTrigger } from "../Tooltip";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <hr />
        <Tooltip>
          <TooltipTrigger asChild>
            <p>33.4484° N, 112.0740° W</p>
          </TooltipTrigger>
          <TooltipContent>Based in Phoenix, Arizona</TooltipContent>
        </Tooltip>
      </footer>
    </>
  );
};

export { Footer };
