// Imports
import React from "react";
import PropTypes from "prop-types";

/**
 * Input option component.
 */
const InputOption = ({ value, text }) => (
    <option value={value}>{text}</option>
);

// Property types
InputOption.propTypes = {
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// Export
export default InputOption;