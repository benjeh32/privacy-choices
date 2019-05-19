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
    let content

    if (this.props.isPromptShown) {
      content = <PrivacyChoicesNotification onAccept={this.props.onPromptAccept} onSettings={this.props.onPromptSettings} />
    } else {
      content = <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.settings.openButton} onClick={this.props.onToggleSettings} />
    }

    return (
      <div id={id}>
        {content}
      </div>
    )
  };
};

// Export component
export default PrivacyChoicesBanner
