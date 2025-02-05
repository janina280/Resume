import Title from "../common/Title";
import { FaLink } from "react-icons/fa6";
import DATA from "../../constant/mockData";
import PropTypes from "prop-types";
import {
  DiamondLgBlue,
  DiamondLgGreen,
  DiamondLgOrange,
  DiamondLgPink,
  DiamondLgYellow,
} from "../../assets/image";

const Skill = () => {
  return (
    <div className="skill-sc resume-block">
      <div className="container">
        <div className="skill-content dotted-border-left">
          <Title titleText={"Skills"} />
          <div className="skill-list grid">
          {DATA.skills.map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;


const SkillItem = ({ item }) => {
  const showDiamondImage = (color) => {
    if (color === "Blue") {
      return DiamondLgBlue;
    } else if (color === "Green") {
      return DiamondLgGreen;
    } else if (color === "Orange") {
      return DiamondLgOrange;
    } else if (color === "Pink") {
      return DiamondLgPink;
    } else if (color === "Yellow") {
      return DiamondLgYellow;
    }
  };

  return (
    <div className="skill-item" key={item.id}>
     
      <div className="skill-position flex items-center flex-wrap">
        <div className="diamond-shapes-group">
          {item.diamondColors?.map((color, index) => (
            <img key={index} src={showDiamondImage(color)} alt="" />
          ))}
        </div>
      </div>
      <div className="skill-company flex items-center flex-wrap">
        <p className="company-name">{item.name}</p>
      </div>
      <p className="skill-description text">{item.description}</p>
      <div className="exp-links">
        {item.links?.map((link) => (
          <a key={link.label} href={link.url} className="text-mauve">
            <FaLink />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

SkillItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    diamondColors: PropTypes.array,
      
      name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

