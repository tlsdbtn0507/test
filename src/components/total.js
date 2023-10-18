import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Total = () => {
  const { id } = useParams();

  const pageIndex = id === undefined ? 1 : id;

  const count = useSelector((state) => state[pageIndex - 1].value);
  //   const total = useSelector((state) => state);

  //   console.log(total.reduce((a, b) => a.value + b.value, 0));
  //   console.log(total);
  return (
    <>
      <h1>TotalCount:{}</h1>
      <h2>
        Count of CurrentPage{`(${pageIndex})`} : {count}
      </h2>
    </>
  );
};

export default Total;
