// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesConfiguration from '../../configuration'
import PrivacyChoicesButton from '../shared/button'

// Styling constants
const id = 'privacy-choices-prompt'
const messageId = 'privacy-choices-prompt-message'
const buttonsId = 'privacy-choices-prompt-buttons'

/**
 * Component for the consent prompt.
 */
class PrivacyChoicesPrompt extends Component {
  // Render
  render () {
    return (
      <div id={id} style={this.props.visible ? { transform: 'translateY(0%)' } : { transform: 'translateY(100%)' }}>
        <div id={messageId}>
          <h3>{PrivacyChoicesConfiguration.language.prompt.heading}</h3>
          <p>{PrivacyChoicesConfiguration.language.prompt.description}</p>
        </div>
        <div id={buttonsId}>
          <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.prompt.acceptButton} onClick={this.props.onAccept} />
          <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.prompt.settingsButton} onClick={this.props.onSettings} />
        </div>
      </div>
    )
  };
};

// Export component
export default PrivacyChoicesPrompt