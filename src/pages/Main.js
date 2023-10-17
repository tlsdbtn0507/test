import "../css/App.css";
import Content from "../components/content";

const Main = () => {
  const contents = [1, 2, 3];
  return (
    <div className="contents-holder">
      {contents.map((e) => (
        <Content key={e} num={e} />
      ))}
    </div>
  );
};
export default Main;
