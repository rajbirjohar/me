import css from "./Ascii.module.css";

export default function Ascii(): JSX.Element {
  return (
      <footer className={css.wrapper}> 
         <pre className={css.ascii}>
          {"  "}^     ^                          ^                           ^                <span className={css.smoke}>## #</span>                                      ^                              ^     {"\n"}
          {" "}/|\ ^ /|\       ^    ^           /|\           ^    ^        /|\ ^            <span className={css.smoke}># #</span>     <span className={css.tent}>____</span>          ^                   /|\   ^         ^    ^       ^ /|\   /{"\n"}
          {" "}/|\/|\/|\    ^ /|\  /|\ ^        /|\  ^     ^ /|\  /|\ ^     /|\/|\    ^     <span className={css.smoke}>##</span>      <span className={css.tent}>^    \</span>        /|\ ^    ^   ^       /|\  /|\     ^ /|\  /|\   ^ /|\/|\ ^ /{"\n"}
              \/|\/|\/|\   /|\/|\  /|\/|\       /|\ /|\   /|\/|\  /|\/|\    /|\/|\   /|\   <span className={css.fire}>***</span>     <span className={css.tent}>/|\    \</span>       /|\/|\  /|\ /|\      /|\  /|\    /|\/|\  /|\  /|\/|\/|\/|\/{"\n"}
          {"  "}|  |  |    .| #|.. .|&/|\        | #&|.   .| #|.. .|&/|\     | #|.   /|\  =*=*=   <span className={css.tent}>/#|#\    \</span>      .| #|.. .|& /|\       |#& /|\    .| #|.. .|&  /|\ |  |  |  {"\n"}
          -----    ----- -----      -----   -----     -----     ----------   -----    --------------------   -----  ---------- -----    ----------   ----- -----   -----  {"\n"}
         </pre>
    </footer>
  )
}
