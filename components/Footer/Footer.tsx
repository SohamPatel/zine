import { FunctionComponent } from "react";
import style from "./Footer.module.scss";

type FooterProps = {};

export const Footer: FunctionComponent<FooterProps> = ({}) => (
  <footer className={style.footer}>
    <div className="container">
      <h2>Zine</h2>
      <p>&copy; Soham</p>
    </div>
  </footer>
);
