import css from "./Ascii.module.css";

export default function Ascii(): JSX.Element {
  return (
      <footer className={css.wrapper}>
        <div className={css.ascii}>
                                                                                                                                        <span className="ascii-gray">## #</span><br />
    ^      ^      ^      ^     ^      ^      ^      ^                            ^                             ^                       <span className="ascii-gray"># #</span>                         ^                              ^      ^      ^      ^     ^      ^      ^      ^
 ^ /|\    /|\    /|\ ^  /|\ ^ /|\    /|\    /|\ ^  /|\        ^    ^            /|\            ^    ^         /|\ ^                   <span className="ascii-gray">##</span>         ^                /|\   ^         ^    ^       ^ /|\    /|\    /|\ ^  /|\ ^ /|\    /|\    /|\ ^  /|\
/|\/|\ ^  /|\  ^ /|\/|\ /|\/|\/|\ ^  /|\  ^ /|\/|\ /|\    ^  /|\  /|\  ^        /|\  ^     ^  /|\  /|\  ^     /|\/|\    ^          <span className="ascii-primary">__||</span>         /|\ ^    ^   ^    /|\  /|\     ^ /|\  /|\   ^ /|\/|\ ^  /|\  ^ /|\/|\ /|\/|\/|\ ^  /|\  ^ /|\/|\ /|\
/|\/|\/|\ /|\ /|\/|\/|\ /|\/|\/|\/|\ /|\ /|\/|\/|\ /|\   /|\ /|\  /|\ /|\       /|\ /|\   /|\ /|\  /|\ /|\    /|\/|\   /|\        <span className="ascii-primary">/<span className="ascii-dark">.</span>\__\</span>        /|\/|\  /|\ /|\   /|\  /|\    /|\/|\  /|\  /|\/|\/|\/|\ /|\ /|\/|\/|\ /|\/|\/|\/|\ /|\ /|\/|\/|\ /|\
 |  |  |   |   |  |  |   |  |  |  |   |   |  |  |   |    .|  #|.. .|& /|\        | #&|.   .|  #|.. .|& /|\     | #|.   /|\        <span className="ascii-dark">|O | |</span>        .| #|.. .|& /|\    |#& /|\    .| #|.. .|&  /|\ |  |  |   |   |  |  |   |  |  |  |   |   |  |  |   |
</div>
    </footer>
  )
}
