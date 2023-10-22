import { useEffect, useState } from "react";

const Toggler = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("asdf");

      return () => {
        clearInterval(timer);
      };
    }, 1000);
  }, [count]);

  return <div>showToggling : {count}</div>;
};

export default Toggler;
