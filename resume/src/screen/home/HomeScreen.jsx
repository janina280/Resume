import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <Experience />
      <Education />
      <Cursor />
    </div>
  );
};

export default Home;
