import { Link } from "react-router-dom";

const Navigation = () => {
  const PAGES = [1, 2, 3];

  return (
    <nav>
      {/* <Link to={}></Link> */}
      {PAGES.map((e) => (
        <Link to={`/${e}`}>e</Link>
      ))}
    </nav>
  );
};

export default Navigation;
