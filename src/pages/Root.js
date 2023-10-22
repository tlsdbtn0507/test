import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
export default Root;
