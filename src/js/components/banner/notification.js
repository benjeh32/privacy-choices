// Imports
import React, { Component } from 'react';

// Constants
const id = 'privacy-choices-notification';
const hiddenClassName = 'hidden';
const visibleClassName = 'visible';

/**
 * Component for the consent prompt notification.
 */
class PrivacyChoicesNotification extends Component {

    // Render
    render() {

        // Determine if shown or not
        let className = visibleClassName;
        if (this.props.isConsentHeld) {
            className = hiddenClassName;
        };

        return (
            <div id={id} className={className}>
                <h3>Your privacy choices for this site</h3>
                <p>This site uses cookies and other storage technologies to optimise site functionality and give you the best possible experience (list all categories and usages).</p>
            </div>
        );
    };
};

// Export component
export default PrivacyChoicesNotification;