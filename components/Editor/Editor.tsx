import { FunctionComponent } from "react";
import style from "./Editor.module.scss";

type EditorProps = {};

export const Editor: FunctionComponent<EditorProps> = ({}) => (
  <canvas className={style.canvas}></canvas>
);
