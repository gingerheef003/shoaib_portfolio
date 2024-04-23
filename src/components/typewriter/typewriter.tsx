import React from "react";
import './typewriter.scss'
import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./cursorBlinker/cursorBlinker";

type TypewriterProps = {

}

const Typewriter: React.FC<TypewriterProps> = () => {
  return (
    <div className="type-writer-wrapper">
      <div className="typewriter">
        <RedoAnimText delay={1 + 1} />
        <CursorBlinker />
      </div>
    </div>
  );
};
export default Typewriter;
