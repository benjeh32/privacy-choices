// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesButton from '../shared/button'
import PrivacyChoicesConfiguration from '../../configuration'
import PrivacyChoicesPrompt from './prompt'

// Styling constants
const id = 'privacy-choices-banner'

/**
 * Component for the banner.
 *
 * This is the entire bottom of the screen section including settings toggle and the consent prompt.
 */
class PrivacyChoicesBanner extends Component {
  // Render
  render () {
    return (
      <div id={id}>
        <PrivacyChoicesButton text={PrivacyChoicesConfiguration.language.settings.openButton} onClick={this.props.onSettings} />
        <PrivacyChoicesPrompt isVisible={this.props.isPromptVisible} onClickAccept={this.props.onAccept} onClickSettings={this.props.onSettings} />
      </div>
    )
  }
}

// Export component
export default PrivacyChoicesBanner
