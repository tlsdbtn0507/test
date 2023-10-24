import { useEffect, useState } from "react";

const Toggler = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);

      return () => {
        clearInterval(timer);
      };
    }, 1000);
  });

  return <div>showToggling : {count}</div>;
};

export default Toggler;
