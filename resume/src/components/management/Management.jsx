import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Management = () => {
  return (
    <div className="management-sc resume-block">
      <div className="container">
        <div className="management-content dotted-border-left">
          <Title titleText={"Management&Leadership Skills"} />
          <div className="management-list grid">
            {DATA.managementAndLidershipSkills?.map((item) => (
              <ManagementItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

const ManagementItem = ({ item }) => {
  return (
    <div className="management-item" key={item.id}>
      <div className="manage-title flex items-center">
        <img src={item.icon} className="manage-icon" alt={item.name} />
        <h3 className="manage-course">{item.name}</h3>
      </div>
    </div>
  );
};

ManagementItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
