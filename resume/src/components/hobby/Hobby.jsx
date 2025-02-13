import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Hobby = () => {
  return (
    <div className="hobby-sc resume-block">
      <div className="container">
        <div className="hobby-content dotted-border-left">
          <Title titleText={"Hobbies"} />
          <div className="hobby-list grid">
            {DATA.hobbiesAndInterests?.map((item) => (
              <HobbyItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;

const HobbyItem = ({ item }) => {
  return (
    <div className="hobby-item" key={item.id}>
      <div className="hobby-title flex items-center">
        <img src={item.icon} className="hobby-icon" alt={item.icon} />
        <h3 className="hobby-course">{item.name}</h3>
      </div>
    </div>
  );
};

HobbyItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
