import PropTypes from "prop-types";
import "./button.css";

const Button = ({ name, color, onClick }) => {
  return (
    <button onClick={onClick} className={`custom-button ${color}`}>
      {name}
    </button>
  );
};

// default values for props:
Button.defaultProps = {
  color: "blue"
};

// type checking
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string, //optional
  onClick: PropTypes.func.isRequired
};

export default Button;
