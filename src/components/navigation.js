import { NavLink } from "react-router-dom";

import css from "../css/navi.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActoins } from "../store/counterSlice";

const Navigation = () => {
  const pages = useSelector((s) => s);

  const dispatch = useDispatch();

  const addPage = () => {
    dispatch(counterActoins.makeMoreState());
  };

  return (
    <nav className={css.navi}>
      {pages.map(({ index }) => (
        <ul key={index}>
          <span>
            <NavLink to={`/${index}`}> to {index} page</NavLink>
          </span>
        </ul>
      ))}
      <button onClick={addPage}>Add more Page</button>
    </nav>
  );
};

export default Navigation;
