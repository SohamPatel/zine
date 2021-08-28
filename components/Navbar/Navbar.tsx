import { FunctionComponent } from "react";
import style from "./Navbar.module.scss";

type NavbarProps = {};

export const Navbar: FunctionComponent<NavbarProps> = ({}) => (
  <nav className={style.navbar}>
    <div className="container">
      <h1>Zine</h1>
      <ul role="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  </nav>
);
