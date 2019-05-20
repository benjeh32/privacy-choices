// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesButton from '../shared/button'
import PrivacyChoicesConfiguration from '../../configuration'

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
      <div id={id} style={this.props.isVisible ? { transform: 'translateY(0%)' } : { transform: 'translateY(100%)' }}>
        <div id={messageId}>
          <h3>{PrivacyChoicesConfiguration.language.prompt.heading}</h3>
          <p>{PrivacyChoicesConfiguration.language.prompt.description}</p>
        </div>
        <div id={buttonsId}>
          <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.prompt.acceptButton} onClick={this.props.onClickAccept} />
          <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.prompt.settingsButton} onClick={this.props.onClickSettings} />
        </div>
      </div>
    )
  };
};

// Export component
export default PrivacyChoicesPrompt
