// Imports
import React, { Component } from 'react';

// Constants
const id = 'privacy-choices-toggle';
const buttonText = 'Privacy choices';

/**
 * Component for the button that toggles the settings menu.
 */
class PrivacyChoicesToggle extends Component {

    // Render
    render() {
        return (
            <button id={id} onClick={this.props.onClick}>
                {buttonText}
            </button>
        );
    };

};

// Export component
export default PrivacyChoicesToggle;