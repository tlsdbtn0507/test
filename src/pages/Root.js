import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
export default Root;
