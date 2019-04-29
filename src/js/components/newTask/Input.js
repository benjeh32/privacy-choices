// Imports
import React from "react";
import PropTypes from "prop-types";
import {
    FormGroup,
    Label,
    Col,
    Input as InputBootstrap,
    FormText
} from 'reactstrap';

/**
 * Input component.
 */
const Input = ({ label, type, id, value, onChange, isRequired, guidanceText, options }) => (
    <FormGroup row>
        <Label for={id} sm="2">{label}</Label>
        <Col sm="10">
            <InputBootstrap type={type} id={id} value={value} onChange={onChange} required={isRequired}>
                {options}
            </InputBootstrap>
            <FormText>{guidanceText}</FormText>
        </Col>
    </FormGroup>
);

// Property types
Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isRequired: PropTypes.bool,
    guidanceText: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.node)
};

// Export
export default Input;