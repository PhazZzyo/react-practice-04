import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <nav>
      <ul>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles["active-link"] : styles["link"]
          }
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles["active-link"] : styles["link"]
          }
        >
          Add
        </NavLink>
      </ul>
    </nav>
  );
};
