import { useState } from "react";
import css from "./index.module.css";

export default function Square({ text, value }) {
  return (
    <div key={value} className={css.gridItem}>
      {value}
    </div>
  );
  // <div style={{ border: "3px solid black" }}>{text}</div>;
}
