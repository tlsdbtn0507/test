import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  console.error(err);

  return <div>TadA~!</div>;
};
export default ErrorPage;
