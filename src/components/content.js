import { useState } from "react";
import css from "../css/content.module.css";

import { counterActoins } from "../store/counterSlice";
import { useDispatch } from "react-redux";

const Content = ({ num }) => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const increaseCount = () => {
    setCount((prev) => ++prev);
    dispatch(counterActoins.increment());
  };

  return (
    <div className={css.div}>
      <h1> content{num} </h1>
      {count} <button onClick={increaseCount}>increaseButton</button>
    </div>
  );
};
export default Content;
