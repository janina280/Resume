import Cursor from "../../components/cursor/Cursor";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Header from "../../components/header/Header";
import Hobby from "../../components/hobby/Hobby";
import Management from "../../components/management/Management";
import Skill from "../../components/skill/Skill";
import Communication from "../../components/communication/Communication";

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <Experience />
      <Education />
      <Skill />
      <Cursor />
      <Hobby />
      <Management />
      <Communication/>
    </div>
  );
};

export default Home;
