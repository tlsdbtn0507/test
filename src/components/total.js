import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Total = () => {
  const { id } = useParams();

  const pageIndex = id === undefined ? 1 : id;

  const count = useSelector((state) => state[pageIndex - 1].value);

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
