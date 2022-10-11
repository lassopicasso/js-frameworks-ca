import React from "react";
import PropTypes from "prop-types";

function Heading({ title }) {
  document.title = title === "Strategy Games" ? "Strategy Games" : `${title} | Strategy Games`;
  return <h1>{title}</h1>;
}

export default Heading;

Heading.propTypes = {
  title: PropTypes.string,
};
