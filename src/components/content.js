import { useState } from "react";
import css from "../css/content.module.css";

import { counterActoins } from "../store/counterSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Content = ({ num }) => {
  const [count, setCount] = useState(0);
  const { id } = useParams();

  const dispatch = useDispatch();
  const increaseCount = () => {
    setCount((prev) => ++prev);
    dispatch(counterActoins.increment(id === undefined ? 0 : id - 1));
  };


  
  return (
    <div className={css.div}>
      <h1> content{num} </h1>
      {count} <button onClick={increaseCount}>increaseButton</button>
    </div>
  );
};
export default Content;
