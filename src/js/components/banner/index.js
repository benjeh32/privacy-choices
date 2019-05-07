// Imports
import React, { Component } from 'react';

// Local imports
import PrivacyChoicesNotification from '../banner/notification';
import PrivacyChoicesButton from '../shared/button';

// Constants
const id = 'privacy-choices-banner';
const toggleButtonText = 'Privacy choices'

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
                <PrivacyChoicesButton buttonText={toggleButtonText} onClick={this.props.onToggleSettings} />
                <PrivacyChoicesNotification isPromptShown={this.props.isPromptShown} onAccept={this.props.onPromptAccept} onSettings={this.props.onPromptSettings} />
            </div>
        );
    };

};

// Export component
export default PrivacyChoicesBanner;