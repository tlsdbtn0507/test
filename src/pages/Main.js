import "../css/App.css";
import Content from "../components/content";
import Total from "../components/total";
import TimeLine from "../components/timeLine";

const Main = () => {
  const contents = [1, 2, 3];
  return (
  <>
  <div className='goorm'>
      <TimeLine/>
  </div>
    <div className="contents-holder">
      {contents.map((e) => (
        <Content key={e} num={e} />
      ))}
      <Total />
    </div>
  </>
  );
};
export default Main;
