// Imports
import React, { Component } from 'react'

// Local imports
import PrivacyChoicesConfiguration from '../../configuration'

// Custom styling
const style = {
  background: PrivacyChoicesConfiguration.style.buttonBackgroundColour,
  color: PrivacyChoicesConfiguration.style.buttonTextColour
}

/**
 * Component for a button.
 */
class PrivacyChoicesButton extends Component {
  // Render
  render () {
    return (
      <button style={{ ...style, ...this.props.style }} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}

// Export component
export default PrivacyChoicesButton
