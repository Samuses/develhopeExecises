import React from "react";
import PropTypes from "prop-types";

// Age Component
const Age = ({ age }) => {
  return <p>Your age is {age}</p>;
};

// Welcome Component
const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age} />
    </div>
  );
};

// Default props
Welcome.defaultProps = {
  name: "Guest",
};

// PropTypes
Welcome.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

Age.propTypes = {
  age: PropTypes.number.isRequired,
};

export default Welcome;
