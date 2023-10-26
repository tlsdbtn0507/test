import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  return <div>TadA~!</div>;
};
export default ErrorPage;
