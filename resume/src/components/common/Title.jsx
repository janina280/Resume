import PropTypes from "prop-types";

const Title = (titleText) => {
  return (
    <div className="title flex intems-center">
      <div className="dots-shape">
        <h3>{titleText}</h3>
      </div>
    </div>
  );
};

export default Title;

Title.prototype = {
  titleText: PropTypes.string,
};
