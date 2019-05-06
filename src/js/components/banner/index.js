// Imports
import React, { Component } from 'react';

// Local imports
import PrivacyChoicesNotification from '../banner/notification';
import PrivacyChoicesToggle from '../banner/toggle';

// Constants
const id = 'privacy-choices-banner';

/**
 * Component for the privacy choices banner.
 * 
 * This is the entire bottom of the screen section including setting toggle and the consent prompt.
 */
class PrivacyChoicesBanner extends Component {

    // Render
    render() {
        return (
            <div id={id}>
                <PrivacyChoicesToggle onClick={this.props.onToggleSidebar} />
                <PrivacyChoicesNotification isConsentHeld={this.props.isConsentHeld} />
            </div>
        );
    };

};

// Export component
export default PrivacyChoicesBanner;