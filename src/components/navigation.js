import { NavLink } from "react-router-dom";
import css from "../css/navi.module.css";

const Navigation = () => {
  const PAGES = [1, 2, 3];

  return (
    <nav className={css.navi}>
      {PAGES.map((e) => (
        <ul>
          <span>
            <NavLink to={`/${e}`}> to {e} page</NavLink>
          </span>
        </ul>
      ))}
    </nav>
  );
};

export default Navigation;
