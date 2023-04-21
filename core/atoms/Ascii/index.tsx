import { motion } from "framer-motion";
import css from "./styles.module.css";

// DO NOT AUTOFORMAT
export default function Ascii(): JSX.Element {
  return (
      <motion.footer className={css.wrapper} layout> 
         <pre className={css.ascii}>
          {"  "}^     ^                          ^                           ^                <span className={css.smoke}>## #</span>                                      ^                              ^     {"\n"}
          {" "}/|\ ^ /|\       ^    ^           /|\           ^    ^        /|\ ^            <span className={css.smoke}># #</span>     <span className={css.tent}>____</span>          ^                   /|\   ^         ^    ^       ^ /|\   {"\n"}
          {" "}/|\/|\/|\    ^ /|\  /|\ ^        /|\  ^     ^ /|\  /|\ ^     /|\/|\    ^     <span className={css.smoke}>##</span>      <span className={css.tent}>^    \</span>        /|\ ^    ^   ^       /|\  /|\     ^ /|\  /|\   ^ /|\/|\ ^ {"\n"}
          {" "}/|\/|\/|\   /|\/|\  /|\/|\       /|\ /|\   /|\/|\  /|\/|\    /|\/|\   /|\   <span className={css.fire}>***</span>     <span className={css.tent}>/|\    \</span>       /|\/|\  /|\ /|\      /|\  /|\    /|\/|\  /|\  /|\/|\/|\/|\{"\n"}
          {"  "}|  |  |    .| #|.. .|&/|\        | #&|.   .| #|.. .|&/|\     | #|.   /|\  =*=*=   <span className={css.tent}>/#|#\    \</span>      .| #|.. .|& /|\       |#& /|\    .| #|.. .|&  /|\ |  |  |  {"\n"}
          -----    ----- -----      -----   -----     -----     ----------   -----    --------------------   -----  ---------- -----    ----------   ----- -----   -----  {"\n"}
         </pre>
    </motion.footer>
  )
}
