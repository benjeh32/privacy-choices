// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesConfiguration from '../../configuration'
import PrivacyChoicesNotification from '../banner/notification'
import PrivacyChoicesButton from '../shared/button'

// Styling constants
const id = 'privacy-choices-banner'

/**
 * Component for the privacy choices banner.
 *
 * This is the entire bottom of the screen section including setting toggle and the consent prompt.
 */
class PrivacyChoicesBanner extends Component {
  // Render
  render () {
    return (
      <div id={id}>
        <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.settings.openButton} onClick={this.props.onToggleSettings} />
        <PrivacyChoicesNotification isPromptShown={this.props.isPromptShown} onAccept={this.props.onPromptAccept} onSettings={this.props.onPromptSettings} />
      </div>
    )
  };
};

// Export component
export default PrivacyChoicesBanner
