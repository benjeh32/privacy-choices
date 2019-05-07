// Imports
import React, { Component } from 'react';

// Local imports
import PrivacyChoicesButton from '../shared/button';

// Constants
const id = 'privacy-choices-notification';
const messageClassName = 'privacy-choices-notification-message';
const buttonsClassName = 'privacy-choices-notification-buttons';
const acceptButtonText = 'Accept and continue';
const settingsButtonText = 'Manage choices'

/**
 * Component for the consent prompt notification.
 */
class PrivacyChoicesNotification extends Component {

    // Render
    render() {

        // Determine if shown or not
        if (!this.props.isPromptShown) {
            return (null);
        };

        return (
            <div id={id}>
                <div className={messageClassName}>
                    <h3>Your privacy choices for this site</h3>
                    <p>This site uses cookies and other storage technologies to optimise site functionality and give you the best possible experience (list all categories and usages).</p>
                </div>
                <div className={buttonsClassName}>
                    <PrivacyChoicesButton buttonText={acceptButtonText} onClick={this.props.onAccept} />
                    <PrivacyChoicesButton buttonText={settingsButtonText} onClick={this.props.onSettings} />
                </div>
            </div>
        );
    };
};

// Export component
export default PrivacyChoicesNotification;