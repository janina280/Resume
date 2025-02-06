import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Skill = () => {
  return (
    <div className="skill-sc resume-block">
      <div className="container">
        <div className="skill-content dotted-border-left">
          <Title titleText={"Skills"} />
          <div className="skill-list grid">
            {DATA.skills?.map((item) => (
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
  return (
    <div className="skill-item" key={item.id}>
      <div className="skill-title flex items-center">
        <img src={item.icon} className="skill-icon" alt={item.icon} />
        <h3 className="skill-course">{item.name}</h3>
      </div>
      <p className="skill-info text">
        {item.description}
      </p>
    </div>
  );
};

SkillItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};
