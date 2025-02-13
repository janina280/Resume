import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Communication = () => {
  return (
    <div className="communication-sc resume-block">
      <div className="container">
        <div className="communication-content dotted-border-left">
          <Title titleText={"Communication&Interpersonal Skills "} />
          <div className="communication-list grid">
            {DATA.communicationAndInterpersonalSkills?.map((item) => (
              <CommunicationItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication ;

const CommunicationItem = ({ item }) => {
  return (
    <div className="communication-item" key={item.id}>
      <div className="communication-title flex items-center">
        <img src={item.icon} className="communication-icon" alt={item.name} />
        <h3 className="communication-course">{item.name}</h3>
      </div>
    </div>
  );
};

CommunicationItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
