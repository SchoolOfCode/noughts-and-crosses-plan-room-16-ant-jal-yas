import { useState } from "react";
import css from "./index.module.css";

export default function Square({ text, value, onClick, turn }) {
  return (
    <div key={value} className={css.gridItem} onClick={()=>{onClick(turn,value)}} >
      {text}
    </div>
  );
  // <div style={{ border: "3px solid black" }}>{text}</div>;
}
